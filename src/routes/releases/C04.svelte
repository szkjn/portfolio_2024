<script lang="ts">
  import type { Release } from "$lib/types";
  import "../focus_pages.css";

  export let item: Release;

  const images: string[] = [];
</script>

<main>
  <div class="focus-boxes">
    <div class="focus-box">
      <div>
        <p>
          <span class="el-date">{item.date}</span>
          <span class="el-loc">{item.location}</span>
        </p>
        <h1 class="el-title focus">
          <span class="italic">{item.title}</span>, {item.subtitle}
        </h1>
        <br />
        <p class="short-desc">
          Radiation is an event series crafted by Berlin-based <a
            href="https://terenor-records.bandcamp.com/">Terenor Records</a
          >. "We strive to reconnect genders and genres around creative
          radiations.""
        </p>
        <br />
        <p class="short-desc italic"></p>
      </div>
    </div>
    <img src={item.coverImg} alt={item.title} class="focus-box cover-img" />
  </div>
  <iframe
    title=""
    src="https://bandcamp.com/EmbeddedPlayer/album=1709906394/size=large/bgcol=333/linkcol=0687f5/tracklist=false/artwork=small/track=1670631233/transparent=true/"
    seamless
    ><a href="https://radiationmutation.bandcamp.com/album/propagation-2019"
      >PROPAGATION 2019 by RADIATION</a
    ></iframe
  >
</main>

<style>
  iframe {
    border: 0;
    width: 100%;
    height: 120px;
  }
  .el-title {
    margin-top: 6px;
  }
  .focus-boxes {
    padding-top: 0;
    max-width: 700px;
  }
  .focus-box {
    max-width: 50%;
  }
  .el-title {
    font-size: 1.5rem;
  }
  .short-desc {
    font-size: 0.8rem;
  }
  .cover-img {
    width: 50%;
    max-width: 46%;
  }
</style>
