<script lang="ts">
  import type { Exhibition } from "$lib/types";
  import "../focus_pages.css";

  export let item: Exhibition;

  const images: string[] = [
    "/images/i_used_to/03.jpg",
    "/images/i_used_to/05.jpg",
    "/images/i_used_to/02.jpg",
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
    <p class="short-desc italic">
      BARTR end-of-residency exhibition, curated by BARTR
    </p>
  </div>
  <div class="focus-boxes">
    <div class="focus-box long-desc">
      <p>
        <span class="italic">I used to fall every autumn</span> delves into the anxieties
        and fears surrounding the ongoing climate crisis. The interactive apparatus
        created is a reflection of the bleak future that we may face if we do not
        take action to protect the environment.
      </p>
      <br />
      <p>
        The installation plays a collection of fantasized spoken words from the
        dying nature, giving voice to the fallen leaves and branches. (Much love
        to Poppy Robinson for lending her British tone for this.)
      </p>
      <br />
      <p>
        With the use of a MIDI controller developed by <a
          href="https://play.playtronica.com/">Playtronica</a
        >, the spectator participates by triggering cynical statements
        referencing pop culture.
      </p>
    </div>
    <img src={item.coverImg} alt={item.title} class="focus-box cover-img" />
    <img src="/images/i_used_to/04.jpg" alt={item.title} class="focus-box" />
    <div class="focus-box long-desc">
      <p class="italic">Don't be sorry, be careful</p>
      <p class="italic">Heaven is a place on earth without you</p>
      <p class="italic">Chop, chop, another one bites the dust</p>
      <p class="italic">Sweet dreams are made of trees</p>
      <br />
      <p>
        To activate the samples, the spectator must hold a kitchen knife in one
        hand and touch one of the hanging artifact in the other to close the
        electrical loop.
      </p>
      <br />
      <p>
        This gesture symbolizes the duality of destruction and preservation that
        we all face in our daily lives. Through this interactive element, the
        installation aims to inspire a sense of agency and personal
        responsibility in the viewer.
      </p>
    </div>
    {#each images as image}
      <img src={image} alt={item.title} class="focus-box" />
    {/each}
  </div>
</main>

<style>
  img {
    max-width: 45vw;
  }
</style>
