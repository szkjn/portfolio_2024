<!-- src/components/Modal.svelte -->
<script lang="ts">
  export let show: boolean = false;
  export let element: any;
  export let onClose: any;
</script>

{#if show}
  <div class="modal {show ? 'open' : ''}">
    <div class="modal-content">
      <button class="close" on:click={onClose}>&times;</button>
      {#if element}
        <div class="el-top">
          <div class="el-top-left">
            <p class="el-top-left-header">
              <span class="el-date el-date-modal">{element.date}</span>
              {element.location}
            </p>
            <p class="el-title">{element.title}</p>
          </div>
          <img class="el-img" src={element.main_img} alt={element.title} />
        </div>
        <div class="el-btm">
          <p>{element.long_desc}</p>
        </div>
      {/if}
    </div>
  </div>
{/if}

<style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    /* height: 100vh; */
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; /* Ensure it's above other content */
    opacity: 0;
    transition: opacity 2s ease;
  }
  
  .modal.open {
    opacity: 1;
  }
  
  .modal-content {
    height: 100vh;
    /* padding: 1rem; */
    /* border-left: 50px solid var(--dark-mode-color); */
    /* padding: 20px; */
    /* box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); */
    width: 600px; /* Or any appropriate width */
    z-index: 1001;
    overflow-y: auto; /* Add scroll to the modal content if needed */
    /* max-height: 90vh; Adjust based on your design */
  }

  .close {
    float: right;
    border: none;
    background: none;
    font-size: 1.5rem;
    cursor: pointer;
  }

  img {
    max-width: 66%;
  }
</style>
