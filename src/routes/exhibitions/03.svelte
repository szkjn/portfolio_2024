<script lang="ts">
  import type { Exhibition } from "$lib/types";
  import "../focus_pages.css";

  export let item: Exhibition;

  const images: string[] = [
    "/images/loop_me_out/03.jpg",
    "/images/loop_me_out/02.jpg",
    "/images/loop_me_out/04.jpg",
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
    <p class="short-desc italic">Neukölln Stories, curated by Nomadic Art</p>
  </div>
  <div class="focus-boxes">
    <div class="focus-box long-desc">
      <p>
        The first phase of this project adopted a journalistic approach,
        collecting stories on audio tapes from local businesses in Neukölln,
        Richardkiez. The interviewed participants discussed diverse matters such
        as gentrification, cultural identity, and environmental concerns. Their
        testimonies were recorded over six months, along with field recordings
        from the neighborhood. These testimonies were then isolated into short
        segments and looped.
      </p>
      <br />
      <p>
        This technique was used to distance the project from its initial
        informative approach, instead proposing fragmented and transversal
        perspectives on the collected Neukölln Stories. Additionally, Jun added
        ambient soundscapes and textures to these audio materials.
      </p>
      <br />
      <p>
        These were developed in the context of post-quarantine outdoor
        performances with local dancers, reflecting Jun's own Neukölln Stories
        from the recent months: the lockdown, being away, returning, the
        indecisive state of melancholia, and a blurred sense of belonging and
        identity.
      </p>
      <br />
    </div>
    <img src={item.coverImg} alt={item.title} class="focus-box cover-img" />
    {#each images as image}
      <img src={image} alt={item.title} class="focus-box" />
    {/each}
  </div>
</main>

<style>
  .focus-box.cover-img,
  img {
    max-width: 45%;
  }
</style>
