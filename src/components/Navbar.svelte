<!-- src/lib/components/Navbar.svelte -->
<script lang="ts">
  // Add any necessary script here
</script>

<nav>
  <h1>jun suzuki</h1>
  <h1>multimedia artist + data engineer</h1>
  <ul class="nav-links">
    <li><a href="/">where is home ?</a></li>
    <li><a href="/about">talk 2 me</a></li>
  </ul>
</nav>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem;
    margin: 0;
    height: var(--navbar-height);
  }

  h1, a {
    font-size: 0.8rem;
  }

  .nav-links {
    list-style: none;
    display: flex;
    gap: 1rem;
  }

  .nav-links a {
    text-decoration: none;
    color: var(--dark-mode-color);
  }

  .nav-links a:hover {
    text-decoration: underline;
  }
</style>
