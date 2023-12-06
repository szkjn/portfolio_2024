<!-- src/components/Music.svelte -->
<script lang="ts">
  import data from "$lib/private_data.json";
  export let selectEl: any;
  const elements = data.releases;
</script>

<div>
  <h2 class="col-title">r e l e a s e s</h2>
  {#each elements as element}
    <button class="el" on:click={() => selectEl("C", element)}>
      <div class="el-top">
        <div class="el-top-left">
          <p class="el-top-left-header">
            <span class="el-date">{element.date}</span>
            <span class="el-loc">{element.location}</span>
          </p>
          <p class="el-title">
            <span class="italic">{element.title}</span>,
            <span class="second"> {element.subtitle}</span>
          </p>
        </div>
      </div>
    </button>
  {/each}
</div>

<style>
  .italic {
    background: transparent;
    text-decoration: line-through;
    font-style: italic;
  }
  .second {
    background: transparent;
  }
  .el-top:hover .italic {
    text-decoration: none;
  }
</style>
