<!-- src/components/Exhibitions.svelte -->
<script lang="ts">
  import data from "$lib/private_data.json";
  export let selectEl: any;
  const elements = data.exhibitions;
</script>

<div>
  <h2 class="col-title">e x h i b i t i o n s</h2>
  {#each elements as element}
    <button class="el" on:click={() => selectEl("A", element)}>
      <div class="el-top">
        <div class="el-top-left">
          <p class="el-top-left-header">
            <span class="el-date">{element.date}</span>
            <span class="el-loc">{element.location}</span>
          </p>
          <p class="el-title">
          <span class="italic">{element.title}</span>
          {#if element.subtitle !== ""}
          <span class="second">, {element.subtitle}</span>
          {/if}
          </p>
        </div>
      </div>
    </button>
  {/each}
</div>


<style>
  .italic {
    background: transparent;
  }
  .second {
    background: transparent;
  }
  .el-top:hover .italic {
    font-style: italic;
  }
</style>
