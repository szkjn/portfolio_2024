<script lang="ts">
  import type { Performance } from "$lib/types";
  import "../focus_pages.css";

  export let item: Performance;

  const images: string[] = [
    "/images/fluids_bucht/01.jpg",
    "/images/fluids_bucht/03.png",
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
      Mirage, House of Flamboyant, Bucht der Träumer 2023
    </p>
  </div>
  <div class="focus-boxes">
    <img src={item.coverImg} alt={item.title} class="focus-box cover-img" />
    {#each images as image}
      <img src={image} alt={item.title} class="focus-box" />
    {/each}
  </div>
</main>

<style>
</style>
