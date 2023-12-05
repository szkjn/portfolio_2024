<script lang="ts">
  import type { Exhibition } from "$lib/types";

  export let item: Exhibition;

  const images: string[] = [
    "/images/birds_chirping/01.jpg",
    "/images/birds_chirping/02.jpg",
    "/images/birds_chirping/03.jpg",
    "/images/birds_chirping/04.jpg",
  ];
</script>

<main>
  <h1>{item.title}</h1>
  <p class="date-location">{item.date} - {item.location}</p>
  <img src={item.coverImg} alt={item.title} class="main-image" />
  <p class="short-description">{item.shortDesc}</p>
  <p class="long-description"></p>

  <div class="gallery">
    {#each images as image}
      <img src={image} alt={item.title} class="gallery-image" />
    {/each}
  </div>
</main>

<style>
  .gallery {
    /* Styles for the image gallery */
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .gallery-image {
    /* Styles for images in the gallery */
    width: 150px;
    height: auto;
  }
</style>
