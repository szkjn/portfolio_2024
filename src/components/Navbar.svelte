<!-- src/lib/components/Navbar.svelte -->
<script lang="ts">
  // Add any necessary script here
</script>

<nav class="container">
  <a href="/"><h1 class="">jun <span class="">suzuki</span></h1></a>
  <a href="/about" class="about">.- -... --- ..- -</a>
</nav>

<style>
  span {
    /* padding-left: 1rem; */
    padding-right: 2rem;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    height: var(--navbar-height);
    background: #333;
  }

  h1,
  a {
    font-size: 0.8rem;
  }
  .about {
    padding-left: 1.5rem;
  }
</style>
