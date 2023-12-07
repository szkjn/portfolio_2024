<script lang="ts">
  import type { Performance } from "$lib/types";
  import "../focus_pages.css";

  export let item: Performance;

  const images: string[] = ["/images/wild_access/02.jpg"];
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
      <p>
        Wild Access Lichtenberg is an innovative outdoor performance that
        combines elements of an audio walk and theater performance,
        incorporating lights, sound, and dance. Each participant wears wireless
        headphones and is guided through the experience by two facilitators who
        communicate through talkie-walkies. The installation provides an
        immersive journey that stimulates multiple senses and encourages the
        viewer to engage with the outdoor surroundings on a deeper level.
      </p>
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
