<script lang="ts">
  import type { Exhibition } from "$lib/types";
  import "../focus_pages.css";
  export let item: Exhibition;

  const images: string[] = ["/images/birds_chirping/03.jpg"];
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
        This installation consists of a dark booth where the spectator is
        placed, isolated from the outside world. Once inside, one hears
        distorted bird songs that are played through low-quality speakers,
        creating an eerie and disturbing soundscape. These speakers are made
        from reversed piezo microphones, giving the sound a distorted and
        unnerving quality.
      </p>
      <br />
      <p>
        To add to the disorienting experience, stroboscopic bike lights are used
        to blind the viewer, making them lose their sense of time and space.
        This creates a unique and challenging sensory experience, where the
        sound and light play off each other to create a sense of unease and
        discomfort.
      </p>
      <br />
      <p>
        The title is a cynical nod to the way we often perceive nature as a
        passive and unimportant backdrop to our lives. By distorting and
        manipulating the sounds of birds, the installation questions our
        relationship to the natural world and forces us to confront the way we
        often take it for granted.
      </p>
      <br />
    </div>

    <img src={item.coverImg} alt={item.title} class="focus-box cover-img" />
    <img
      src="/images/birds_chirping/02.jpg"
      alt={item.title}
      class="focus-box"
    />

    <p class="focus-box quote italic">
      A dystopian vision of a near future's holiday booth faking birds singing
      and starry nights.
    </p>
  </div>
</main>

<style>
  img {
    max-width: 45vw;
  }

  .quote {
    font-size: 1.5rem;
    text-align: center;
    max-width: 33%;
  }
</style>
