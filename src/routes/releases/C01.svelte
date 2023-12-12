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
          <a href="https://mjut.me/">mjut</a> is queer friendly multi-level place
          and safer space located in Leipzig east (Germany).
        </p>
      </div>
    </div>
    <img src={item.coverImg} alt={item.title} class="focus-box cover-img" />
    <iframe
      title=""
      src="https://bandcamp.com/EmbeddedPlayer/album=485367123/size=large/bgcol=333/linkcol=0687f5/tracklist=false/artwork=small/track=3165539409/transparent=true/"
      seamless
      ><a href="https://mjutclub.bandcamp.com/album/surroundings-2"
        >surroundings 2 by mjut</a
      ></iframe
    >
  </div>
</main>

<style>
  main {
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: stretch;
  }
  iframe {
    width: 100%;
    border: 0;
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
    max-width: 42%;
  }
</style>
