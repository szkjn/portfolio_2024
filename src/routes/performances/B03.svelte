<script lang="ts">
  import type { Performance } from "$lib/types";
  import "../focus_pages.css";

  export let item: Performance;

  const images: string[] = ["/images/wild_access/02.jpg"];
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
      {item.subtitle}, curated by SAVVY Contemporary
    </p>
  </div>
  <div class="focus-boxes">
    <div class="focus-box long-desc">
      <p>
        Wild Access Lichtenberg is an innovative outdoor performance that
        combines elements of an audio walk and theater performance,
        incorporating lights, sound, and dance. Each participant wears wireless
        headphones and is guided through the experience by two facilitators who
        communicate through talkie-walkies.
      </p>
      <br />
      <p>
        The installation provides an immersive journey that stimulates multiple
        senses and encourages the viewer to engage with the outdoor surroundings
        on a deeper level.
      </p>
    </div>
    <img src={item.coverImg} alt={item.title} class="focus-box" />
    {#each images as image}
      <img src={image} alt={item.title} class="focus-box" />
    {/each}
  </div>
</main>

<style>
</style>
