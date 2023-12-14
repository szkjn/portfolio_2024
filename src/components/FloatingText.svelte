<script lang="ts">
  import { onMount } from "svelte";

  let floatingText: any;

  export let startX: number = 50;
  export let startY: number = 50;
  let posX: number = startX;
  let posY: number = startY;
  let dragging: boolean = false;

  const line1 = "where".split("");
  const line2 = "is".split("");
  const line3 = "home ?".split("");

  const getRandomY = () => Math.floor(Math.random() * 10);

  function onMouseDown(e: MouseEvent): void {
    dragging = true;
    document.body.style.userSelect = "none";
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  }

  function onMouseMove(e: MouseEvent): void {
    if (dragging) {
      posX += e.movementX;
      posY += e.movementY;
    }
  }

  function onMouseUp(): void {
    dragging = false;
    document.body.style.userSelect = "";
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);
  }

  onMount(() => {
    const textWidth = floatingText.offsetWidth;
    const textHeight = floatingText.offsetHeight;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    posX = (viewportWidth - textWidth) / 2;
    posY = (viewportHeight - textHeight) / 2;
  });
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  bind:this={floatingText}
  class="floating-text"
  on:mousedown={onMouseDown}
  style="left: {posX}px; top: {posY}px"
>
  <div class="line1">
    {#each line1 as letter, index}
      <span class="letter" style="top: {getRandomY()}px">{letter}</span>
    {/each}
  </div>
  <div class="line2">
    {#each line2 as letter, index}
      <span class="letter" style="top: {getRandomY()}px">{letter}</span>
    {/each}
  </div>
  <div class="line3">
    {#each line3 as letter, index}
      <span class="letter" style="top: {getRandomY()}px">{letter}</span>
    {/each}
  </div>
</div>

<style>
  * {
    background: transparent;
  }
  .floating-text {
    position: fixed;
    display: flex;
    flex-direction: column;
    padding: 10px;
    background: transparent;
    cursor: move;
    z-index: 1000;
  }

  .letter {
    position: relative;
    background: transparent;
    color: mediumpurple;
    color: #333;
    font-weight: 100;
    font-size: 0.6rem;
    background: #333;
    padding-left: 1px;
    /* border: 1px solid #ddd; */
    /* box-shadow: 0 2px 5px 0px rgba(255, 255, 255, 1); */

    /* text-shadow:
      -2px -1px 0 #0f0,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      0px 0px 0 #000; */
  }
  .floating-text:hover .letter {
    color: #fff;
  }

  .line1 {
    letter-spacing: 0.4rem;
  }
  .line2 {
    letter-spacing: 1rem;
    padding-left: 3rem;
  }
  .line3 {
    padding-left: 2rem;
    letter-spacing: 1rem;
  }
</style>
