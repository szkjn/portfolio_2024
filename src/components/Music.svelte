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
            {element.location}
          </p>
          <p class="el-title">{element.title}</p>
        </div>
        {#if element.coverImg}
          <img
            class="el-img-thumb"
            src={element.coverImg}
            alt={element.title}
            style="width: 75%"
          />
        {/if}
      </div>
      <div class="el-btm">
        <p>{element.shortDesc}</p>
      </div>
    </button>
  {/each}
</div>

<style>
  img {
    width: 66%;
  }
</style>
