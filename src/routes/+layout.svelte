<script>
  import { base } from "$app/paths";
  const year = new Date().getFullYear();
  const license = "CC BY-NC-SA 4.0";
</script>


<header>
  <h1>Verse // Verve</h1>
  <p>A Collection of Collections of Poetry and other Things</p>
  <nav>
    <a href="{base}/">Home</a>
    <a href="{base}/about">About</a>
    <a href="{base}/contact">Contact</a>
  </nav>
</header>
<slot></slot>
<footer>
  <p>by David Vanderhaar - {year} - {license}</p>
</footer>
