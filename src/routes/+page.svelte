<script>
  const POEM_ENDPOINT = 'https://api.github.com/repos/david-vanderhaar/verse-and-verve-data/contents/poems?ref=main';

  let poems = [];

  async function fetchPoems() {
    const response = await fetch(POEM_ENDPOINT);
    const data = await response.json();
    const poemPromises = data
      .filter(file => file.name.endsWith('.txt'))
      .map(async file => {
        const poemResponse = await fetch(file.download_url);
        const poemText = await poemResponse.text();
        const poemTextParts = poemText.split('END_METADATA');
        poemTextParts[0] = poemTextParts[0].replace('END_METADATA', '');
        const metadataPart = poemTextParts[0].split('\n');
        const metadata = metadataPart.reduce((acc, line) => {
          const [key, value] = line.split(': ');
          acc[key] = value;
          return acc;
        }, {});
        
        const content = poemTextParts[1].trim();

        console.log(metadata);
        console.log(content);
        return {
          metadata,
          content
        };
      });

    poems = await Promise.all(poemPromises);
  }

  fetchPoems();
</script>

{#if poems.length > 0}
  {#each poems as poem}
    <article>
      <p>{poem.metadata?.title || ''}</p>
      <p>{poem.content}</p>
    </article>
  {/each}
{:else}
<p>...</p>
{/if}

<style>
  p {
    white-space: pre-wrap;
  }
</style>