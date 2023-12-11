<script lang="ts">
  import type { Performance } from "$lib/types";
  import "../focus_pages.css";

  export let item: Performance;

  const images: string[] = [];
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
      Flughafen Tempelhof 100th Anniversary, curated by TimeLab x slowfuture
    </p>
  </div>
  <div class="focus-boxes">
    <div class="focus-box long-desc">
      <p>
        "Witness an expression of vulnerability and strength in Fluids, a
        performance by sound artist Jun Suzuki and dancer Alvin Collantes at the
        Flughafen Tempelhof on the morning of Oct 10.
      </p>
      <br />
      <p>
        In a world increasingly divided along lines of identity and culture,
        Fluids emerges as a collaborative dance and sound performance that seeks
        to explore, question, and even blur these boundaries. Crafted by the
        Berlin-based duo, Fluids is a blend of organic movement, ethereal dance,
        Japanese mantras, and high-pitched, crystal-clear singing.
      </p>
      <br />
      <p>
        At its core, the performance is an ode to their Asian heritage, imbued
        with a complex dialogue on themes of identity, migration, and cultural
        belonging. Fluids is more than just a set performance; it's an adaptable
        expression that responds to its environment."
      </p>
      <br />
      <p>Timelab x slowfuture</p>
      <br />
      <a
        href="https://www.thf-berlin.de/aktuelles/100-jahre-100-stunden/veranstaltung/alvin-collantes-jun-suzuki-fluids"
        >Event link</a
      >
    </div>
    <img src={item.coverImg} alt={item.title} class="focus-box cover-img" />
    {#each images as image}
      <img src={image} alt={item.title} class="focus-box" />
    {/each}
  </div>
  <div class="footer"></div>
</main>

<style>
</style>
