<!-- src/components/Modal.svelte -->
<script>
  export let show = false;
  export let content;
  export let onClose;
</script>

{#if show}
  <div class="modal">
    <div class="modal-content">
      <span class="close" on:click={onClose}>&times;</span>
      {#if content}
        <h2>{content.title}</h2>
        <p>{content.fullDescription}</p>
        {#if content.images}
          {#each content.images as image}
            <img src={image} alt={`Image for ${content.title}`} />
          {/each}
        {/if}
      {/if}
    </div>
  </div>
{/if}

<style>
  .modal {
    /* Modal styles (positioning, background, etc.) */
  }
  .modal-content {
    /* Content styles */
  }
  .close {
    /* Close button styles */
  }
</style>
