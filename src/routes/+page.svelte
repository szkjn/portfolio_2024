<!-- src/routes/+page.svelte -->
<script lang="ts">
  import Navbar from "../components/Navbar.svelte";
  import Exhibitions from "../components/Exhibitions.svelte";
  import Performances from "../components/Performances.svelte";
  import Music from "../components/Music.svelte";
  import Programming from "../components/Programming.svelte";
</script>

<div class="container">
  <div class="column"><Exhibitions /></div>
  <div class="column"><Performances /></div>
  <div class="column"><Music /></div>
  <div class="column"><Programming /></div>
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    padding: 10px;
  }
  .column {
    height: calc(100vh - var(--navbar-height) - 20px);
    overflow-y: auto;
    padding-right: 0.4rem;
    /* border: 1px solid blue */
  }

</style>
