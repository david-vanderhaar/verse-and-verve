<script>
  import { onMount } from 'svelte';
  import { createEventDispatcher } from 'svelte';
  import { fade } from 'svelte/transition';
  import { base } from '$app/paths';
  import Scroller from '@sveltejs/svelte-scroller';
  import TableOfContents from '../components/TableOfContents.svelte';

  const PRODUCTION_MODE = process.env.NODE_ENV === 'production';
  // const PRODUCTION_MODE = true
  const POEM_ENDPOINT = 'https://api.github.com/repos/david-vanderhaar/verse-and-verve-data/contents/poems?ref=main';
  const FADE_DELAY = 1000;

  const dispatch = createEventDispatcher();

  let rootDocument;
  let rootWindow;
  let poems = [];
  let mounted = false;

  onMount(async () => {
    rootDocument = document.documentElement;
    rootWindow = window;
    if (PRODUCTION_MODE) await fetchPoems();
    else await fetchTestPoems();
    if (rootWindow.location.hash) await jumpToPoem(rootWindow.location.hash);

    mounted = true;
  });

  async function jumpToPoem(hash) {
    if (hash) {
      const poemId = hash.replace('#', '');
      const target = document.getElementById(poemId);
      
      if (!target) return;

      // return if target already in view
      if (target.getBoundingClientRect().top < window.innerHeight) return;
      target.scrollIntoView({behavior: 'instant'});
    }
  }

  function parseText(text) {
    const poemTextParts = text.split('END_METADATA');
    poemTextParts[0] = poemTextParts[0].replace('END_METADATA', '');
    const metadataPart = poemTextParts[0].split('\n');
    const metadata = metadataPart.reduce((acc, line) => {
      const [key, value] = line.split(': ');
      acc[key] = value;
      return acc;
    }, {});
    
    const content = poemTextParts[1].trim();

    return {
      metadata,
      content
    };
  }

  function sortByDateLatest(poems) {
    return poems.sort((a, b) => {
      const aDate = new Date(a.metadata?.created);
      const bDate = new Date(b.metadata?.created);
      return bDate - aDate;
    });
  }

  async function fetchTestPoems() {
    const urls = [
      `${base}/texts/example.txt`,
      `${base}/texts/example2.txt`,
      `${base}/texts/example3.txt`,
      `${base}/texts/example4.txt`,
      `${base}/texts/example5.txt`,
    ]
    
    const poemPromises = urls.map(
      (url) => parsePoemResponse(url)
    );

    const result = await Promise.all(poemPromises);
    poems = sortByDateLatest(result);
    poems = poems.map((poem, index) => ({id: index, ...poem}));
  }
  
  async function fetchPoems() {
    const response = await fetch(POEM_ENDPOINT);
    const data = await response.json();
    const poemPromises = data
      .filter(filterTxtFiles)
      .map((item) => (parsePoemResponse(item.download_url)));

    const result = await Promise.all(poemPromises);
    poems = sortByDateLatest(result);
    poems = poems.map((poem, index) => ({id: index, ...poem}));
  }

  function filterTxtFiles(file) {
    return file.name.endsWith('.txt');
  }

  async function parsePoemResponse(url) {
    const poemResponse = await fetch(url);
    const poemText = await poemResponse.text();
    return parseText(poemText);
  }

  let count;
	let index;
	let progress;

  function getTitle(poem) {
    return poem?.metadata?.title || poem?.metadata?.created || '';
  }

  function getTableOfContentsDisplay(poem) {
    const name = poem?.metadata?.title || null;
    const date = poem?.metadata?.created || null;
    return [date, name].filter((item) => item !== null).join(' - ');
  }

  function getPoemTarget(poem) {
    return getTitle(poem).toLowerCase().replace(/ /g, '-');
  }

  function getTableOfContents(poems, currentPoemId) {
    return poems.map((poem) => {
      return {
        displayName: getTableOfContentsDisplay(poem), 
        target: getPoemTarget(poem),
        current: currentPoemId !== undefined && poem.id === currentPoemId
      }
    });
  }

  $: poemsLoaded = poems.length > 0;
  $: if (poemsLoaded) dispatch('poemsLoaded', { poemsLoaded });
  $: currentPoem = poems[index];
  $: currentPoemId = currentPoem?.id;
  $: currentPoemTitle = getTitle(currentPoem);
  $: currentPoemColor = currentPoem?.metadata?.color || '#eadcbd';
  $: currentPoemTextColor = currentPoem?.metadata?.text_color || '#262422';
  
  // update background color with current poem color
  $: rootDocument?.style.setProperty('--background-color', currentPoemColor);
  $: rootDocument?.style.setProperty('--text-color', currentPoemTextColor);

  // update hash with current poem id if window exists
  $: if(mounted) rootWindow?.history.replaceState(null, '', `#${getPoemTarget(currentPoem)}`);

  $: tableOfContents = getTableOfContents(poems, currentPoemId);

</script>

{#if poemsLoaded}
  <div transition:fade={{delay: FADE_DELAY}}>
    <TableOfContents items={tableOfContents} />
    <Scroller
      top=0
      threshold=0.5
      bottom=0.9
      query="article"
      bind:count
      bind:index
      bind:progress
    >
      <div slot="background">
        index: {index}
        poem: {currentPoemTitle}
        progress: {progress}
      </div>
      <div slot="foreground">
        {#each poems as poem, i}
          <article class:viewed={i === index} id={getPoemTarget(poem)}>
            <p class="title">{getTitle(poem)}</p>
            {#if poem?.metadata?.title !== undefined}
              <div class="date">{poem.metadata?.created || ''}</div>
            {/if}
            <p class="content">{poem.content}</p>
          </article>
        {/each}
      </div>
    </Scroller>
  </div>
{:else}
  <p>...</p>
{/if}

<style>
  [slot="background"] {
    display: none;
  }
  [slot="foreground"] {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  p {
    white-space: pre-wrap;
  }

  article {
    margin-bottom: 2rem;
    width: 300px;
    min-height: 50vh;
    opacity: 0.3;
    transition: all 0.5s ease-in-out;
    transition: color 0.1s ease-in-out;
  }

  .viewed {
    opacity: 1;
  }

  .title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0;
  }

  .content {
    font-size: 1.5rem;
  }

  .date {
    font-style: italic;
  }
</style>