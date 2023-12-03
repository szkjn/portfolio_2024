<!-- src/components/Music.svelte -->
<script lang="ts">
  import data from "$lib/private_data.json";

  const elements = data.music;
</script>

<div>
  <h2 class="colTitle">Releases</h2>
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

<style>
  img {
    width: 66%;
  }
</style>