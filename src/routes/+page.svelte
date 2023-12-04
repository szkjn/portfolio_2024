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
        ? "translateX(-107%)"
        : "translateX(-230%)"
    : "translateX(0)";
  $: transformC = isFocusMode
    ? focusedCol === "A"
      ? "translateX(230%)"
      : focusedCol === "B"
        ? "translateX(230%)"
        : focusedCol === "C"
          ? "translateX(-214%)"
          : "translateX(-330%)"
    : "translateX(0)";
  $: transformD = isFocusMode
    ? focusedCol === "A" || focusedCol === "B" || focusedCol === "C"
      ? "translateX(130%)"
      : "translateX(-320%)"
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
      <div class="full-content">
        <h2>{selectedEl.title}</h2>
        <p>{selectedEl.long_desc}</p>
        <img src={selectedEl.main_img} alt={selectedEl.title} />
      </div>
      <div class="go-back-column">
        <button on:click={clearFocus} class="go-back-button"> &lt;</button>
      </div>
    </div>
  {/if}
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
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
  }

  .col {
    padding: 1rem;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    transition: transform 1s ease;
    z-index: 1;
  }

  .focus-window {
    position: absolute;
    top: 0;
    left: 20rem;
    height: 100%;
    width: 66vw;
    z-index: 0;
    display: grid;
    grid-template-columns: 8fr 1fr;
    /* border: 1px solid red; */
  }

  .full-content {
    overflow-y: scroll;
    /* background: greenyellow; */
  }

  .el {
    background: blue;
  }

  img {
    max-width: 50vw;
    max-height: 80vh;
  }
  .go-back-column {
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
    overflow-y: hidden;
  }
  .go-back-button {
    height: 100%;
    border-left: 1px solid var(--dark-mode-bg-hover);
    font-size: 1.5rem;
    animation: slowblink 2s infinite ease-in-out;
  }
  .go-back-button:hover {
    border-left: 1px solid var(--dark-mode-color);
    animation: reveal 0.2s infinite;
    cursor: pointer;
  }
</style>
