<!-- src/components/Exhibitions.svelte -->
<script lang="ts">
  import data from "$lib/private_data.json";

  const elements = data.exhibitions;
</script>

<div>
  <h2 class="col-title">e x h i b i t i o n s</h2>
  {#each elements as element}
    <div class="el">
      <div class="el-top">
        <div class="el-top-left">
          <p class="el-top-left-header">
            <span class="el-date">{element.date}</span>
            {element.location}
          </p>
          <p class="el-title">{element.title}</p>
        </div>
        <!-- {#if element.main_img}
          <img
            class="el-img-thumb"
            src={element.main_img}
            alt={element.title}
          />
        {/if} -->
      </div>
      <div class="el-btm">
        <p>{element.short_desc}</p>
      </div>
    </div>
  {/each}
</div>
