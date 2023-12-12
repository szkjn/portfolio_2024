<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import "../app.css";
  import Navbar from "../components/Navbar.svelte";
  import Footbar from "../components/Footbar.svelte";
</script>

<div class="parent">
  <Navbar />
  <slot />
  <Footbar />
</div>
