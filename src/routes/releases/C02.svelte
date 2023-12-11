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
          “<a href="https://exiles-electronics.bandcamp.com/"
            >EXILES (or Exiles Electronics)</a
          >
          is a Budapest-based experimental music label focusing on local and international
          artists since 2016. They are a small label of wonder and
          intrigue, the label’s discography is filled with unfamiliar names and
          a broad spectrum of electronic music from innumerable and unusual
          sources.”
        </p>
      </div>
    </div>
    <img src={item.coverImg} alt={item.title} class="focus-box cover-img" />
  </div>
  <iframe
    title=""
    src="https://bandcamp.com/EmbeddedPlayer/album=2809909115/size=large/bgcol=333/linkcol=0687f5/tracklist=false/artwork=small/track=3865854509/transparent=true/"
    seamless
    ><a href="https://exiles-electronics.bandcamp.com/album/exiles"
      >EXILES by VA</a
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
