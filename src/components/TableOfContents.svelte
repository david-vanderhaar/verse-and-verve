<script>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  export let items = [];

  let isOpen = false;

  function toggle() {
    isOpen = !isOpen;
  }

  onMount(() => {
    const button = document.querySelector('.toc-button');
    const toc = document.querySelector('.toc');

    button.addEventListener('mouseenter', () => {
      fly(toc, {
        y: 10,
        duration: 200,
      });
    });

    button.addEventListener('mouseleave', () => {
      fly(toc, {
        y: -10,
        duration: 200,
      });
    });
  });
</script>

<button class="toc-button" on:click={toggle}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M19 13H5v-2h14v2z"/>
  </svg>
</button>

<div class="toc" style="display: {isOpen ? 'block' : 'none'};">
  <ul>
    {#each items as item}
      <li>
        <a href=#{item.target}>{item.displayName}</a>
      </li>
    {/each}
  </ul>
</div>

<style>
  .toc-button {
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 1000;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
  }

  .toc {
    position: fixed;
    top: 60px;
    left: 20px;
    z-index: 1000;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    max-height: 300px;
    overflow-y: auto;
  }

  .toc ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .toc li {
    margin: 0;
    padding: 0;
  }

  .toc a {
    color: #333;
    text-decoration: none;
  }

  .toc a:hover {
    text-decoration: underline;
  }
</style>
