<!-- src/components/Performancezs.svelte -->
<script lang="ts">
  import data from "$lib/private_data.json";
  export let selectEl: any;
  const elements = data.performances;
</script>

<div>
  <h2 class="col-title">p e r f o r m a n c e s</h2>
  {#each elements as element}
    <button class="el" on:click={() => selectEl("B", element)}>
      <div class="el-top">
        <div class="el-top-left">
          <p class="el-top-left-header">
            <span class="el-date">{element.date}</span>
            <span class="el-loc">{element.location}</span>
          </p>
          <p class="el-title">
            <span class="title">{element.title}</span>
            {#if element.subtitle !== ""}
              <span class="subtitle">, {element.subtitle}</span>
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
  .el-top:hover .title {
    text-decoration: line-through;
  }
  /* .el-top:hover .subtitle {
    color: #333;
  } */
</style>
