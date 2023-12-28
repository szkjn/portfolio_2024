<!-- src/Layout.svelte -->
<script lang="ts">
  import Exhibitions from "./components/Exhibitions.svelte";
  import Performances from "./components/Performances.svelte";
  import Music from "./components/Releases.svelte";
  import Programming from "./components/Programming.svelte";

  export const prerender = true;
</script>

<!-- <div class="container">
  <Exhibitions />
  <Performances />
  <Music />
  <Programming />
</div> -->

<style>
  /* .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  } */
</style>
