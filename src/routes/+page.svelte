<!-- src/routes/+page.svelte -->
<script lang="ts">
  import FloatingText from "../components/FloatingText.svelte";

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

  import Releases from "../components/Releases.svelte";
  import Release01 from "./releases/C01.svelte";
  import Release02 from "./releases/C02.svelte";
  import Release03 from "./releases/C03.svelte";
  import Release04 from "./releases/C04.svelte";

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

  const releaseComponents: any = {
    "1": Release01,
    "2": Release02,
    "3": Release03,
    "4": Release04,
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
      case "C":
        DetailComponent = releaseComponents[selectedEl.id];
      // case "D":
      //     DetailComponent = exhibitionComponents[selectedEl.id];
    }
    // Reactive debug logs
    console.log("isFocusMode", isFocusMode);
    console.log("Focused Column:", focusedCol);
    console.log("Element id:", selectedEl.id);
  }
</script>

<FloatingText startX={100} startY={100}>where</FloatingText>

<div class={`container ${isFocusMode ? "focus-mode" : ""}`}>
  <div class="column" style="transform: {transformA}">
    <Exhibitions {selectEl} />
  </div>
  <div class="column" style="transform: {transformB}">
    <Performances {selectEl} />
  </div>
  <div class="column" style="transform: {transformC}">
    <Releases {selectEl} />
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
        <svelte:component this={DetailComponent} item={selectedEl} />
      </div>
    </div>
  {/if}
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: 1.3fr 1.1fr 0.9fr 0.7fr;
    margin: 0.5rem 0 0 0;
    padding: 0 calc(var(--global-padding) * 9 / 10);
    height: calc(100vh - var(--navbar-height) - 0.5rem);
    overflow-y: hidden;
    overflow-x: hidden;
    position: relative;
    /* gap: 14px; */
    /* border: 1px dashed greenyellow; */
    /* background: var(--dark-mode-bg); */
  }
  .column {
    height: 100%;
    overflow-y: auto;
    padding: 0 calc(var(--global-padding) * 1 / 10);
    transition: transform 0.1s ease-in-out;
    z-index: 1;
  }

  .focus-window {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    padding: 0 var(--global-padding);
    z-index: 0;
    display: flex;
    flex-direction: column;
    /* border: 1px solid red; */
  }

  .full-content {
    overflow-y: scroll;
    /* padding-top: 0.25rem; */
    /* background: greenyellow; */
  }

  .go-back-header {
    /* margin-bottom: 1rem; */
    padding-bottom: 0.3rem;
    font-size: 0.75rem;
    /* border: 1px var(--dark-mode-bg) solid; */
    background: transparent;
    border-bottom: 1px var(--dark-mode-color) solid;
  }
  .go-back-button {
    padding: 0;
    margin: 0;
  }
</style>
