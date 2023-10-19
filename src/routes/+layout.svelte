<script>
  import { base } from "$app/paths";
  const year = new Date().getFullYear();
</script>


<header>
  <h1 style="margin-bottom: 0;">Verse // Verve</h1>
  <div class="italic">A Collection of Collections of Poetry and other Things</div>
</header>
<main>
  <slot></slot>
</main>
<footer>
  <div class="italic">David Vanderhaar - {year}</div>
</footer>

<style>
  .italic {
    font-style: italic;
  }

  header {
    margin-bottom: 2rem;
  }

  header, footer {
    text-align: center;
  }
</style>
