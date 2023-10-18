<script>
  import { onMount } from 'svelte';
  import { base } from '$app/paths';

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

  async function fetchTestPoems() {
    const urls = [
      `${base}/texts/example.txt`,
      `${base}/texts/example2.txt`,
    ]
    
    const poemPromises = urls.map(
      (url) => parsePoemResponse(url)
    );

    poems = await Promise.all(poemPromises);
  }
  
  async function fetchPoems() {
    const response = await fetch(POEM_ENDPOINT);
    const data = await response.json();
    const poemPromises = data
      .filter(filterTxtFiles)
      .map((item) => parsePoemResponse(item.download_url));

    poems = await Promise.all(poemPromises);
  }

  function filterTxtFiles(file) {
    return file.name.endsWith('.txt');
  }

  async function parsePoemResponse(url) {
    const poemResponse = await fetch(url);
    const poemText = await poemResponse.text();
    return parseText(poemText);
  }
</script>

{#if poems.length > 0}
  {#each poems as poem}
    <article>
      <p class="title">{poem.metadata?.title || ''}</p>
      <div class="date">{poem.metadata?.created || ''}</div>
      <p class="content">{poem.content}</p>
    </article>
  {/each}
{:else}
<p>...</p>
{/if}

<style>
  p {
    white-space: pre-wrap;
  }

  article {
    margin-bottom: 4rem;
  }

  .title {
    font-weight: bold;
    margin-bottom: 0;
  }

  .date {
    font-style: italic;
  }
</style>