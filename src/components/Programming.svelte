<!-- src/components/Programming.svelte -->
<script lang="ts">
  import data from "$lib/data.json";
  // export let selectEl: any;
  const elements = data.programming;
</script>

<div>
  <h2 class="col-title">p r o g r a m m i n g</h2>
  {#each elements as element}
    <!-- <button class="el" on:click={() => selectEl("D", element)}> -->
    <button class="el">
      <div class="el-top">
        <div class="el-top-left">
          <p class="el-top-left-header">
            <span class="el-date">{element.date}</span>
            <span class="el-loc">{element.location}</span>
          </p>
          <p class="el-title">
            <span class="title">{element.title}, </span>
            {#if element.subtitle !== ""}
              <span class="subtitle"> {element.subtitle}</span>
            {/if}
          </p>
        </div>
      </div>
    </button>
  {/each}
</div>

<style>
  .title {
    background: transparent;
  }
  .subtitle {
    background: transparent;
  }
  .el-top:hover .subtitle {
    text-decoration: line-through;
    color: #333;
  }
  .el-top:hover .title {
    text-decoration: line-through;
    color: #333;
  }
</style>
