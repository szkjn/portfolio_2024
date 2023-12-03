<!-- src/lib/components/Navbar.svelte -->
<script lang="ts">
  // Add any necessary script here
</script>

<nav>
  <h1>jun suzuki</h1>
  <ul class="nav-links">
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    margin: 0;
    background-color: #f5f5f5;
    height: var(--navbar-height);
  }

  .logo {
    font-size: 1rem;
  }

  .nav-links {
    list-style: none;
    display: flex;
    gap: 1rem;
  }

  .nav-links a {
    text-decoration: none;
    color: black;
  }
</style>
