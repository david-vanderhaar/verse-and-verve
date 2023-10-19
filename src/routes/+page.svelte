<script>
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import Scroller from '@sveltejs/svelte-scroller';

  const PRODUCTION_MODE = process.env.NODE_ENV === 'production';
  const POEM_ENDPOINT = 'https://api.github.com/repos/david-vanderhaar/verse-and-verve-data/contents/poems?ref=main';

  let poems = [];

  onMount(() => {
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
  $: currentPoem = poems[index]?.metadata?.title || '';

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
      poem: {currentPoem}
      progress: {progress}
    </div>
    <div slot="foreground">
      {#each poems as poem}
        <article>
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
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 1;
    width: 50%;
    height: calc(100vh - 30px)
  }

  [slot="foreground"] {
    padding-left: 50%;
  }
  p {
    white-space: pre-wrap;
  }

  article {
    width: 300px;
    height: 50vh;
  }

  .title {
    font-weight: bold;
    margin-bottom: 0;
  }

  .date {
    font-style: italic;
  }
</style>