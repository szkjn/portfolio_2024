<script lang="ts">
  import type { Exhibition } from "$lib/types";
  import "../focus_pages.css";

  export let item: Exhibition;
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
    <p class="short-desc italic">SOFT EIS Magazine ISSUE03 Launch Party</p>
  </div>
  <div class="focus-boxes">
    <div class="focus-box long-desc">
      <p>
        To celebrate Berlin-based art magazine <a
          href="https://www.softeismagazine.com/">SOFT EIS</a
        >'s third and last issue exploring the theme of ~loss~, the editorial
        team has asked some contributors to showcase personal work to pursue
        their ongoing discourse on dualities in the broadest sense.
      </p>
      <br />
      <p>
        My contribution to the magazine explores OpenAI GPT-3's creativity (a
        couple of months before the birth of ChatGPT) and reflects about the
        subtle changes and potential ~losses~ as we grow more connected with AI. <a
          href="/">More about the written piece here.</a
        >
      </p>
      <br />
      <p>
        For the occasion, I was happy to take part in the exhibition space
        alongside talented visual artists and replugged the wires of this <a
          href="/">two years-old installation initially built in Budapest</a
        >
        to approach ~loss~ with a tongue-in-cheek pessimistic vision of nature's
        dying leaves.
      </p>
    </div>
    <img src={item.coverImg} alt={item.title} class="focus-box cover-img" />
    <img
      src="/images/i_used_to_2023/03.jpg"
      alt={item.title}
      class="focus-box"
    />
    <div class="focus-box long-desc">
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
      <br />
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
    <img
      src="/images/i_used_to_2023/02.jpg"
      alt={item.title}
      class="focus-box"
    />
  </div>
</main>

<style>
  img {
    max-width: 33vw;
  }
</style>
