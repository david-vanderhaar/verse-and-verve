<script>
  import { base } from "$app/paths";
  import ContentLoader from "../../components/ContentLoader.svelte";

  const PRODUCTION_MODE = process.env.NODE_ENV === 'production';
  // const PRODUCTION_MODE = true
  const ENDPOINT = 'https://api.github.com/repos/david-vanderhaar/verse-and-verve-data/contents/thoughts?ref=main';
  const TEST_PATH = base + '/thoughts';
</script>

<ContentLoader
  CONTENT_WIDTH="800px"
  FONT_FAMILY="'IBM Plex Serif', Roboto Slab, serif"
  PRODUCTION_MODE={PRODUCTION_MODE}
  ENDPOINT={ENDPOINT}
  TEST_PATH={TEST_PATH}
  DEFAULT_BACKGROUND_COLOR="#f8f8f8"
  DEFAULT_TEXT_COLOR="#262422"
  CONTENT_FONT_SIZE="18px"
/>