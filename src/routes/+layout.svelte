<script>
  import { base } from "$app/paths";
  const year = new Date().getFullYear();
</script>


<header>
  <h1>Verse // Verve</h1>
  <p class="italic">A Collection of Collections of Poetry and other Things</p>
  ---------
</header>
<main>
  <slot></slot>
</main>
<footer>
  ---------
  <p class="italic">David Vanderhaar - {year}</p>
</footer>

<style>
  .italic {
    font-style: italic;
  }
</style>
