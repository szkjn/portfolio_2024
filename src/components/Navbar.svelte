<!-- src/lib/components/Navbar.svelte -->
<script lang="ts">
  // Add any necessary script here
</script>

<nav class="container">
  <a href="/"><h1 class="">j u n<span class="">s u z u k i</span></h1></a>
  <!-- <h1 class="nav-title">:)</h1> -->
  <ul class="nav-links">
    <li><a href="/about">+++</a></li>
  </ul>
</nav>

<style>
  span {
    padding-left: 1rem;
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
  .nav-title {
    letter-spacing: 0rem;
    transition: letter-spacing 1s;
  }
  .nav-title:hover {
    letter-spacing: 0rem;
  }

  .nav-links {
    list-style: none;
    display: flex;
    gap: 1rem;
  }

  svg {
  }
</style>
