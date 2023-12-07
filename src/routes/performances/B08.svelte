<script lang="ts">
  import type { Performance } from "$lib/types";
  import "../focus_pages.css";

  export let item: Performance;

  const images: string[] = [
    "/images/fluids_tia/02.jpg",
    "/images/fluids_tia/04.jpg",
    "/images/fluids_tia/03.jpg",
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
      Tanz im August Festival 2023, Tanz und Ökologie.
    </p>
  </div>
  <div class="focus-boxes">
    <div class="focus-box long-desc">
      <p>
        Delving into this year’s festival theme "Dance and Ecology", Alvin and I
        presented an interpretation of our dependence on technology and its
        subsequent breakdown, leading us back to the essence of natural sounds
        and elements.
      </p>
      <br />
      <p>
        With the assistance of 12 ~sonic fairies~, we crafted a lo-fi surround
        sound experience. Each fairy was positioned strategically and connected
        through a group call, broadcasting the spoken words and sound effects
        captured through my phone.
      </p>
      <br />
      <p>
        This setup immersed the audience in a spatial sonic experience
        characterized by glitches and notable latency, leading to the creation
        of an intended feedback loop initiating a series of delayed screeching
        sounds culminating in a breakdown (the end of the call).
      </p>
      <br />
      <p>
        From there, we took a moment to appreciate the richness of the park’s
        natural sounds, before concluding in a capella, with Alvin’s body fully
        expressing itself, animating like a spirit of the forest.
      </p>
      <br />
      <p>
        Our hope was to encourage reflection on our relationship with technology
        and to offer a moment to reconnect with the simple, pure sounds and
        movements of the natural world surrounding us.
      </p>
    </div>
    <img src={item.coverImg} alt={item.title} class="focus-box cover-img" />
    {#each images as image}
      <img src={image} alt={item.title} class="focus-box" />
    {/each}
    <div class="focus-box container-player">
      <p>
        On that occasion, I was invited to share my perspective on the
        intersection of performance art and ecology for the coming decade on the
        festival's podcast, among other fellow artists. Find below my
        participation (35:00).
      </p>
      <br />
      <a
        href="https://soundcloud.com/tanzimaugust/tanz-im-august-podcast-1-interconnecting-dance-ecology"
        title="Tanz im August Podcast #1 – Interconnecting Dance &amp; Ecology"
        target="_blank"
        style="color: #cccccc; text-decoration: none;"
        >Tanz im August Podcast #1 – Interconnecting Dance &amp; Ecology</a
      >
      <iframe
        title="Tanz im August Podcast"
        width="100%"
        height="100%"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1589349703&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
      <div
        style="font-size: 8px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"
      ></div>
    </div>
  </div>
</main>

<style>
  .container-player {
    max-width: 500px;
    text-align: justify;
    background: transparent;
  }
</style>
