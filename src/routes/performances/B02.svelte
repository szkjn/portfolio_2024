<script lang="ts">
  import type { Performance } from "$lib/types";
  import "../focus_pages.css";

  export let item: Performance;

  const images: string[] = [
    "/images/fluids_apal/02.png",
    "/images/fluids_apal/03.png",
  ];
</script>

<main>
  <div class="header">
    <p>
      <span class="el-date">{item.date}</span>
      <span class="el-loc">{item.location}</span>
    </p>
    <h1 class="el-title focus">{item.title}</h1>
    <br />
    <p class="short-desc">{item.shortDesc}</p>
    <br />
    <p class="short-desc italic">
      Asian Artists Performing Lab, AmnAsia 5, end-of-residency performance
    </p>
  </div>
  <div class="focus-boxes">
    <img src={item.coverImg} alt={item.title} class="focus-box" />
    {#each images as image}
    <img src={image} alt={item.title} class="focus-box" />
    {/each}
    <div class="focus-box long-desc"></div>
  </div>
</main>

<style>
</style>
