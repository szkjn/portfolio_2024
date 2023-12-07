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
  <p>
    <span class="el-date">{item.date}</span>
    <span class="el-loc">{item.location}</span>
  </p>
  <h1 class="el-title focus">{item.title}</h1>
  <p class="short-desc">{item.shortDesc}</p>
  <div class="image-text-container">
    <div class="long-desc">
      <p></p>
    </div>

    <img src={item.coverImg} alt={item.title} class="cover-img" />
  </div>

  <div class="gallery">
    {#each images as image}
      <img src={image} alt={item.title} class="gallery-image" />
    {/each}
  </div>
</main>

<style>
</style>
