<script lang="ts">
  import type { Release } from "$lib/types";
  import "../focus_pages.css";

  export let item: Release;
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
          <a href="https://lahmacun.hu/">Lahmacun</a> is a worldwide online
          community radio based in Budapest, Hungary. I'm a proud contributor of
          a monthly residency broadcast named
          <a href="https://lahmacun.hu/shows/transverszia">transverszia</a> as well
          as occasional back-end engineering to the open-source base code.
        </p>
      </div>
    </div>
    <img src={item.coverImg} alt={item.title} class="focus-box cover-img" />
  </div>
  <iframe
    title=""
    src="https://bandcamp.com/EmbeddedPlayer/album=3578722709/size=large/bgcol=333/linkcol=0687f5/tracklist=false/artwork=small/track=3381260555/transparent=true/"
    seamless
    ><a
      href="https://lahmacunradio.bandcamp.com/album/kkh-support-compilation-20"
      >KKH Support Compilation 20 by Lahmacun Radio</a
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
