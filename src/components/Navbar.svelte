<!-- src/lib/components/Navbar.svelte -->
<script lang="ts">
  // Add any necessary script here
</script>

<nav>
  <h1 class="logo">j u n<span class="logo">s u z u k i</span></h1>
  <h1>multimedia artist + data engineer</h1>
  <ul class="nav-links">
    <li><a href="/about">t a l k 2 m e : : )</a></li>
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
    padding: 0 1.5rem;
    margin: 0;
    height: var(--navbar-height);
  }

  h1,
  a {
    font-size: 0.8rem;
  }
/* 
  .logo {
    animation: blinkText .2s infinite;
  } */

  .nav-links {
    list-style: none;
    display: flex;
    gap: 1rem;
  }
</style>
