<script>
  import { fade } from 'svelte/transition';

  export let items = [];
  let isOpen = false;
  function toggle() { isOpen = !isOpen; }
  function close() { isOpen = false; }

  // close the table of contents if the user clicks outside of TOC
  function handleClick(event) {
    if (!event.target.closest('.toc') && !event.target.closest('.toc-button')) {
      close();
    }
  }
</script>

<svelte:window on:click={handleClick} />
<button class="toc-button" on:click={toggle}>
  <span>◒</span>
</button>

{#if isOpen}
  <div class="toc" transition:fade>
    {#each items as item}
      <div>
        <a href=#{item.target} class:active={item?.current === true}>{item.displayName}</a>
      </div>
    {/each}
  </div>
{/if}

<style>
  .toc a.active {
    text-decoration: underline;
  }

  .toc-button {
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: var(--text-color);
    color: var(--background-color);
    border: none;
    border-radius: 10px 10px 0 0;
    padding: 10px;
    z-index: 100;
    cursor: pointer;
  }

  .toc {
    position: fixed;
    top: 60px;
    right: 20px;
    background-color: var(--text-color);
    color: var(--background-color);
    border-radius: 10px 0px 10px 10px;
    padding: 10px;
    max-height: 300px;
    overflow-y: auto;
    z-index: 100;
    max-height: calc(100vh - 100px);
  }

  .toc a {
    color: var(--background-color);
    text-decoration: none;
  }

  .toc a:hover {
    text-decoration: underline;
  }
</style>
