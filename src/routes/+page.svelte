<script>
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import Scroller from '@sveltejs/svelte-scroller';

  const PRODUCTION_MODE = process.env.NODE_ENV === 'production';
  const POEM_ENDPOINT = 'https://api.github.com/repos/david-vanderhaar/verse-and-verve-data/contents/poems?ref=main';

  let rootDocument;
  let poems = [];

  onMount(() => {
    rootDocument = document.documentElement;
    if (PRODUCTION_MODE) fetchPoems();
    else fetchTestPoems();
  });

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
    ]
    
    const poemPromises = urls.map(
      (url) => parsePoemResponse(url)
    );

    
    const result = await Promise.all(poemPromises);
    poems = sortByDateLatest(result);
  }
  
  async function fetchPoems() {
    const response = await fetch(POEM_ENDPOINT);
    const data = await response.json();
    const poemPromises = data
      .filter(filterTxtFiles)
      .map((item) => parsePoemResponse(item.download_url));

    const result = await Promise.all(poemPromises);
    poems = sortByDateLatest(result);
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

  $: poemsLoaded = poems.length > 0;
  $: currentPoem = poems[index];
  $: currentPoemTitle = currentPoem?.metadata?.title || '';
  $: currentPoemColor = currentPoem?.metadata?.color || '#eadcbd';
  
  // update background color with current poem color
  $: rootDocument?.style.setProperty('--background-color', currentPoemColor);

</script>

{#if poemsLoaded}
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
        <article class:viewed={i === index}>
          <p class="title">{poem.metadata?.title || ''}</p>
          <div class="date">{poem.metadata?.created || ''}</div>
          <p class="content">{poem.content}</p>
        </article>
      {/each}
    </div>
  </Scroller>
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
    opacity: 0.5;
    transition: all 0.5s ease-in-out;
  }

  .viewed {
    opacity: 1;
  }

  .title {
    font-weight: bold;
    margin-bottom: 0;
    font-family: sans-serif;
  }

  .content {
    font-family: serif;
    font-size: 1rem;
    font-size: 1.5rem;
  }

  .date {
    font-style: italic;
    font-family: sans-serif;
  }
</style>