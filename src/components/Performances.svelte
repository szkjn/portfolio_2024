<!-- src/components/Performancezs.svelte -->
<script lang="ts">
  import data from "$lib/private_data.json";
  export let openModal: (element: any) => void;

  const elements = data.performances;
</script>

<div>
  <h2 class="col-title">p e r f o r m a n c e s</h2>
  {#each elements as element}
    <button class="el" on:click={() => openModal(element)}>
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
    </button>
  {/each}
</div>
