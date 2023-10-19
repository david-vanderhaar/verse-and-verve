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
  <p class="italic">David Vanderhaar - {year}</p>
</footer>

<style>
  .italic {
    font-style: italic;
  }

  header {
    margin-bottom: 2rem;
  }

  header, footer {
    text-align: left;
  }

  main, header, footer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* left align everything on mobile */
  @media (max-width: 600px) {
    header, footer {
      text-align: left;
    }

    main, header, footer {
      align-items: flex-start;
      margin-left: 1rem;
      margin-left: 1rem;
    }

  }
</style>
