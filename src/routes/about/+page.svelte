<!-- src/routes/about/+page.svelte -->
<script lang="ts">
  const images: string[] = [
    "/images/selfies/01.png",
    "/images/selfies/02.png",
    "/images/selfies/03.png",
    "/images/selfies/04.png",
    "/images/selfies/05.png",
    "/images/selfies/06.png",
  ];
</script>

<div class="container">
  <div class="top">
    <div class="first">
      <p>
        Jun Suzuki, a French-Japanese artist, excels in the realm of digital
        arts and sound design. His artistic journey began with a strong
        foundation in opera, evolving into an expansive career encompassing
        sound installations, music production, and interactive design.
        Influenced by his academic background in film and media art, Jun's work
        is a testament to his ability to weave auditory and visual narratives,
        creating immersive experiences. His artistry is marked by a distinctive
        synthesis of sound and sight, where each piece tells a story, inviting
        the audience into a world crafted by his unique vision and creative
        prowess.
      </p>
    </div>
    <div class="second">
      <p>
        In the realm of technology, Jun is also a proficient back-end developer
        and data engineer. His technical skills are broad, encompassing Python,
        SQL, and various database technologies. Jun's tech career is marked by
        significant contributions to data engineering, particularly in sensitive
        data processing, NLP, and data visualization in the medical and
        industrial sectors. This technical expertise, combined with his artistic
        background, makes him a versatile professional. While his heart lies in
        the arts, his proficiency in technology enables him to bring a unique
        perspective to the tech industry, blending creativity with technical
        acumen.
      </p>
    </div>
  </div>
  <div class="btm">
    {#each images as image}
      <img src={image} alt="" class="" />
    {/each}
  </div>
</div>

<style>
  .container {
    margin: 1.5rem 0;
    height: calc(100vh - var(--navbar-height) - 3rem);
    /* overflow-y: hidden; */
    overflow-x: hidden;
    /* border: 1px dashed greenyellow; */
  }
  p {
    font-size: 0.8rem;
  }

  img {
    max-width: 16.66%;
    transition: 0.2s ease-in-out;
  }
  .top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
  .btm {
    display: flex;
    justify-content: space-between;
  }
  .first,
  .second {
    text-align: justify;
    /* border: 1px solid blue; */
    max-width: 33%;
  }
</style>
