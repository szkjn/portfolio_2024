<!-- src/routes/+page.svelte -->
<script lang="ts">
  import Exhibitions from "../components/Exhibitions.svelte";
  import Exhibition01 from "./exhibitions/A01.svelte";
  import Exhibition02 from "./exhibitions/A02.svelte";
  import Exhibition03 from "./exhibitions/A03.svelte";
  import Exhibition04 from "./exhibitions/A04.svelte";
  import Exhibition05 from "./exhibitions/A05.svelte";
  import Exhibition06 from "./exhibitions/A06.svelte";

  import Performances from "../components/Performances.svelte";
  import Performance01 from "./performances/B01.svelte";
  import Performance02 from "./performances/B02.svelte";
  import Performance03 from "./performances/B03.svelte";
  import Performance04 from "./performances/B04.svelte";
  import Performance05 from "./performances/B05.svelte";
  import Performance06 from "./performances/B06.svelte";
  import Performance07 from "./performances/B07.svelte";
  import Performance08 from "./performances/B08.svelte";
  import Performance09 from "./performances/B09.svelte";

  import Music from "../components/Music.svelte";

  import Programming from "../components/Programming.svelte";

  import type { Data, RouteParams } from "$lib/types";
  import data from "$lib/private_data.json";

  export async function load({ params }: { params: RouteParams }) {
    const { category, id } = params;
    const categoryData = data[category as keyof Data];

    if (!categoryData) {
      return { status: 404, error: new Error("Category not found") };
    }

    const item = categoryData.find((item) => item.id === id);

    if (!item) {
      return { status: 404, error: new Error("Item not found") };
    }

    return {
      props: {
        item,
      },
    };
  }

  const exhibitionComponents: any = {
    "1": Exhibition01,
    "2": Exhibition02,
    "3": Exhibition03,
    "4": Exhibition04,
    "5": Exhibition05,
    "6": Exhibition06,
  };

  const performanceComponents: any = {
    "1": Performance01,
    "2": Performance02,
    "3": Performance03,
    "4": Performance04,
    "5": Performance05,
    "6": Performance06,
    "7": Performance07,
    "8": Performance08,
    "9": Performance09,
  };

  let DetailComponent: any;

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

  $: transformA = isFocusMode ? "translateX(400%)" : "translateX(0)";
  $: transformB = isFocusMode ? "translateX(400%)" : "translateX(0)";
  $: transformC = isFocusMode ? "translateX(400%)" : "translateX(0)";
  $: transformD = isFocusMode ? "translateX(400%)" : "translateX(0)";

  $: if (isFocusMode) {
    switch (focusedCol) {
      case "A":
        DetailComponent = exhibitionComponents[selectedEl.id];
        break;
      case "B":
        DetailComponent = performanceComponents[selectedEl.id];
        break;
      // case "C":
      //     DetailComponent = exhibitionComponents[selectedEl.id];
      // case "D":
      //     DetailComponent = exhibitionComponents[selectedEl.id];
    }
    // Reactive debug logs
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
        <!-- <p class="focus-header">
          <span class="el-date">{selectedEl.date}</span>
          <span class="el-loc">{selectedEl.location}</span>
          <span class="el-title">{selectedEl.title}</span>
        </p> -->
        <svelte:component this={DetailComponent} item={selectedEl} />
      </div>
    </div>
  {/if}
</div>

<style>
  img {
    max-width: 500px;
  }
  .container {
    display: grid;
    grid-template-columns: 1.3fr 1.1fr 0.9fr 0.7fr;
    margin: 1.5rem 0.5rem;
    height: calc(100vh - var(--navbar-height) - 3rem);
    overflow-y: hidden;
    overflow-x: hidden;
    position: relative;
    /* gap: 14px; */
    /* border: 1px dashed greenyellow; */
    /* background: var(--dark-mode-bg); */
  }
  .column {
    height: calc(100vh - var(--navbar-height) - 3rem);
    overflow-y: auto;
    padding: 0 1rem;
    transition: transform 0.1s ease-in-out;
    z-index: 1;
    /* border: 1px dashed greenyellow; */
  }

  .focus-window {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    padding: 0 1rem;
    z-index: 0;
    display: flex;
    flex-direction: column;
    /* border: 1px solid red; */
  }

  .full-content {
    overflow-y: scroll;
    padding-top: 0.25rem;
    /* background: greenyellow; */
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
