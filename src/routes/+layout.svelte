<script>
  import { base } from "$app/paths";
  const year = new Date().getFullYear();
</script>


<body>
  <header>
    <h1 style="margin-bottom: 0;">Verse // Verve</h1>
    <div class="italic">A Collection of Collections of Poetry and other Things</div>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <p class="italic">David Vanderhaar - {year}</p>
  </footer>
</body>

<style>
  .italic {
    font-style: italic;
  }

  header {
    margin-bottom: 2rem;
  }
</style>
