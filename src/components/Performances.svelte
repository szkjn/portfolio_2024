<!-- src/components/Performancezs.svelte -->
<script lang="ts">
  import data from "$lib/private_data.json";

  const elements = data.performances;
</script>

<div>
  <h2 class="colTitle">Performances</h2>
  {#each elements as element}
    <div>
      <p class="elTitle">{element.title}</p>
      <p>{element.location} - {element.date}</p>
      {#if element.main_img}
        <img class="elThumbnail" src={element.main_img} alt={element.title} />
      {/if}
      <p>{element.description}</p>
    </div>
  {/each}
</div>
