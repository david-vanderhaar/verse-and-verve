<script>
  import "@fontsource-variable/cormorant";
  import { base } from "$app/paths";
  
  const year = new Date().getFullYear();
</script>

<svelte:head>
  <title>Verse // Verve</title>
  <meta name="description" content="A Collection of Collections of Poetry and other Things" />
  <link rel="apple-touch-icon" sizes="180x180" href="{base}/favicon/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="192x192" href="{base}/favicon/android-chrome-192x192.png">
  <link rel="icon" type="image/png" sizes="32x32" href="{base}/favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="{base}/favicon/favicon-16x16.png">
  <link rel="icon" href="{base}/favicon/favicon.ico" />
</svelte:head>
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
  :global(html) {
    font-family: 'Cormorant Variable', serif;
  }

  .italic {
    font-style: italic;
  }

  header {
    /* font-family: 'Cormorant Variable', serif; */
    margin-bottom: 2rem;
  }

  header, footer {
    text-align: center;
  }
</style>
