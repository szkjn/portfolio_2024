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
            {element.location}
          </p>
          <p class="el-title">{element.title}</p>
        </div>
        <div class="el-btm">
          <p>{element.shortDesc}</p>
        </div>
        <!-- {#if element.coverImg}
          <img
            class="el-img-thumb"
            src={element.coverImg}
            alt={element.title}
            style="width: 66%"
          />
        {/if} -->
      </div>
    </button>
  {/each}
</div>
