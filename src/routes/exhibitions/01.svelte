<script lang="ts">
  import type { Exhibition } from "$lib/types";

  export let item: Exhibition;

  const images: string[] = [
    "/images/birds_chirping/02.jpg",
    "/images/birds_chirping/03.jpg",
    "/images/birds_chirping/04.jpg",
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
      <p>
        This installation consists of a dark booth where the spectator is
        placed, isolated from the outside world. Once inside, one hears
        distorted bird songs that are played through low-quality speakers,
        creating an eerie and disturbing soundscape. These speakers are made
        from reversed piezo microphones, giving the sound a distorted and
        unnerving quality.
      </p>
      <p>
        To add to the disorienting experience, stroboscopic bike lights are used
        to blind the viewer, making them lose their sense of time and space.
        This creates a unique and challenging sensory experience, where the
        sound and light play off each other to create a sense of unease and
        discomfort.
      </p>
      <p>
        The title is a cynical nod to the way we often perceive nature as a
        passive and unimportant backdrop to our lives. By distorting and
        manipulating the sounds of birds, the installation questions our
        relationship to the natural world and forces us to confront the way we
        often take it for granted.
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
  .focus {
    font-size: 2rem;
    width: auto;
  }
  .short-desc {
    color: var(--dark-mode-color);
    opacity: 0.9;
    background-color: var(--dark-mode-bg);
    padding: 0.25rem 0;
    margin: 0;
    display: inline-block;
  }
  .image-text-container {
    position: relative;
  }

  .cover-img {
    padding-top: 10rem;
    width: 100%;
    max-width: 1280px;
    height: auto;
  }

  .long-desc {
    margin: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    color: white;
    padding: 2rem 0 0 2rem;
    text-align: justify;
    width: 33%;
    min-width: 200px;
    max-width: 300px;
    background: transparent;
    /* color: greenyellow; */
  }

  .long-desc > p {
    background: transparent;
  }
  .cover-img {
    width: 100%;
  }
  .gallery {
    display: flex;
    flex-direction: column;
  }
  .gallery-image {
    max-width: 50%;
    /* height: auto; */
  }
</style>
