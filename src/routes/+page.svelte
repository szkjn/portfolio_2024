<!-- src/routes/+page.svelte -->
<script lang="ts">
  import Exhibitions from "../components/Exhibitions.svelte";
  import Performances from "../components/Performances.svelte";
  import Music from "../components/Music.svelte";
  import Programming from "../components/Programming.svelte";
  import Modal from "../components/Modal.svelte";
  import FullContent from "../components/FullContent.svelte";

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

  //   Debug logs
  $: if (isFocusMode) {
    console.log("Focused Column:", focusedCol);
    console.log("Selected Element:", selectedEl.title);
  }
</script>

<div class={`container ${isFocusMode ? "focus-mode" : ""}`}>
  {#if isFocusMode}
    <div class="column focused">
      {#if focusedCol === "A"}<Exhibitions {selectEl} />{/if}
      {#if focusedCol === "B"}<Performances {selectEl} />{/if}
      {#if focusedCol === "C"}<Music {selectEl} />{/if}
      {#if focusedCol === "D"}<Programming {selectEl} />{/if}
    </div>
    <div class="el-full-content">
      {#if selectedEl}
        <div class="full-content">
          <h2>{selectedEl.title}</h2>
          <p>{selectedEl.long_desc}</p>
          <img src={selectedEl.main_img} alt={selectedEl.title} />
        </div>
      {/if}
    </div>
    <div class="go-back-column">
      <button on:click={clearFocus} class="go-back-button"> &lt;</button>
    </div>
  {:else}
    <div class="column A">
      <Exhibitions {selectEl} />
    </div>
    <div class="column B">
      <Performances {selectEl} />
    </div>
    <div class="column C">
      <Music {selectEl} />
    </div>
    <div class="column D">
      <Programming {selectEl} />
    </div>
  {/if}
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    gap: 16px;
    padding: 1.5rem;
    overflow-x: hidden;
  }
  .column {
    flex: 1;
    height: calc(100vh - var(--navbar-height) - 3rem);
    overflow-y: auto;
    padding-right: 0.4rem;
    transition: flex 2s ease;
  }

  .container.focus-mode .column.focused {
    opacity: 0.5;
  }

  .column.focused {
    flex: 1;
    opacity: 1;
  }

  .el-full-content {
    flex: 3;
  }

  img {
    max-width: 50vw;
    max-height: 80vh;
  }

  .go-back-column {
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
  }

  .container.focus-mode .go-back-column {
    opacity: 1;
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
