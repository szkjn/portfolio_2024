<!-- src/routes/+page.svelte -->
<script lang="ts">
  import Exhibitions from "../components/Exhibitions.svelte";
  import Performances from "../components/Performances.svelte";
  import Music from "../components/Music.svelte";
  import Programming from "../components/Programming.svelte";

  let isFocusMode: boolean = false;
  let focusedCol: any = null;
  let selectedEl: any = null;

  function selectEl(col: string, el: string): void {
    isFocusMode = true;
    focusedCol = col;
    selectedEl = el;
  }

  function clearFocus(): void {
    isFocusMode = false;
    focusedCol = null;
    selectedEl = null;
  }

  function setFocus(col: string, el: string): void {
    isFocusMode = true;
    focusedCol = col;
    selectedEl = el;
  }

  $: transformA =
    isFocusMode && focusedCol !== "A" ? "translateX(-130%)" : "translateX(0)";
  $: transformB = isFocusMode
    ? focusedCol === "A"
      ? "translateX(330%)"
      : focusedCol === "B"
        ? "translateX(-100%)"
        : "translateX(-230%)"
    : "translateX(0)";
  $: transformC = isFocusMode
    ? focusedCol === "A"
      ? "translateX(230%)"
      : focusedCol === "B"
        ? "translateX(230%)"
        : focusedCol === "C"
          ? "translateX(-230%)"
          : "translateX(-400%)"
    : "translateX(0)";
  $: transformD = isFocusMode
    ? focusedCol === "A" || focusedCol === "B" || focusedCol === "C"
      ? "translateX(130%)"
      : "translateX(-420%)"
    : "translateX(0)";

  // Reactive debug logs
  $: if (isFocusMode) {
    console.log("isFocusMode", isFocusMode);
    console.log("Focused Column:", focusedCol);
  }
</script>

<div class={`container ${isFocusMode ? "focus-mode" : ""}`}>
  <div class="column" style="transform: {transformA}">
    <Exhibitions {selectEl} />
  </div>
  <div class="column" style="transform: {transformB}">
    <Performances {selectEl} />
  </div>
  <div class="column" style="transform: {transformC}">
    <Music {selectEl} />
  </div>
  <div class="column" style="transform: {transformD}">
    <Programming {selectEl} />
  </div>

  {#if isFocusMode}
    <div class="focus-window">
      <div class="go-back-header">
        <button on:click={clearFocus} class="go-back-button">back</button>
      </div>
      <div class="full-content">
        <p class="focus-header">
          <span class="el-date">{selectedEl.date}</span>
          <span class="el-loc">{selectedEl.location}</span>
          <span class="el-title">{selectedEl.title}</span>
        </p>
        <p>{selectedEl.long_desc}</p>
        <img src={selectedEl.main_img} alt={selectedEl.title} />
      </div>
    </div>
  {/if}
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: 1.3fr 1.1fr 0.9fr 0.7fr;
    margin: 1.5rem;
    height: calc(100vh - var(--navbar-height) - 3rem);
    overflow-y: hidden;
    overflow-x: hidden;
    position: relative;
    gap: 14px;
    /* border: 1px dashed greenyellow; */
  }
  .column {
    height: calc(100vh - var(--navbar-height) - 3rem);
    overflow-y: auto;
    padding-right: 0.4rem;
    transition: transform 1s ease;
    z-index: 1;
    /* border: 1px dashed greenyellow; */
  }

  .focus-window {
    position: absolute;
    top: 0;
    left: 24rem;
    /* padding-right: 0.4rem; */
    height: 100%;
    width: 62vw;
    z-index: 0;
    display: flex;
    flex-direction: column;
    /* border: 1px solid red; */
  }

  .full-content {
    overflow-y: scroll;
    /* background: greenyellow; */
  }

  img {
    max-width: 50vw;
    max-height: 80vh;
  }
  .go-back-header {
    margin-bottom: 1rem;
    border: 1px var(--dark-mode-bg) solid;
    font-size: 0.75rem;
  }
  .go-back-button {
    padding: 0;
    margin: 0;
  }
</style>
