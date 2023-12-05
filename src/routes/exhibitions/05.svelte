<script lang="ts">
  import type { Exhibition } from "$lib/types";

  export let item: Exhibition;

  const images: string[] = [
    "/images/i_used_to_2023/05.jpg",
    "/images/i_used_to_2023/03.jpg",
    "/images/i_used_to_2023/04.jpg",
    "/images/i_used_to_2023/02.jpg",
  ];
</script>

<main>
  <p>
    <span class="el-date">{item.date}</span>
    <span class="el-loc">{item.location}</span>
  </p>
  <h1 class="el-title focus">{item.title}</h1><br>
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
  .long-desc {
    background-color: var(--dark-mode-bg);
    padding: 2rem;
  }
</style>
