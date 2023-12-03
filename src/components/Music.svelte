<!-- src/components/Music.svelte -->
<script lang="ts">
  import data from "$lib/private_data.json";

  const elements = data.music;
</script>

<div>
  <h2 class="colTitle">Music</h2>
  {#each elements as element}
    <div>
      <h3>{element.title}</h3>
      <p>{element.description}</p>
      <p>{element.location}</p>
      <p>{element.date}</p>
      <!-- <img src={element.image} alt={element.title} /> -->
    </div>
  {/each}
</div>
