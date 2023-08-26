<script>
  import { storedCAtId } from "../../stored-cat";
  import Navigation from "../../Navigation.svelte";
  import Footer from "../../Footer.svelte";
  import Container from "./Container.svelte";
  let parentDiv;
</script>
<svelte:head>
  <title>Bag</title>
</svelte:head>
<Navigation />

<h1 class="mx-10 mb-3 rounded-lg p-3 text-center">
  Here lies all the catnapped cat
</h1>

<!-- <div class="my-10 mx-10 inline-block bg-orange-400 px-3 py-2">
  <p>Bag:</p>
</div> -->

<!-- display images like masonry -->

<div
  bind:this={parentDiv}
  class="relative mx-10 columns-2 md:mx-20 md:columns-3 lg:mx-[20vw] lg:columns-4"
>
  <!-- display all stored cats -->

  <!-- star of for each -->

  {#each $storedCAtId.reverse() as cat}
    <!-- pass the id in the Container see Container.svelte File -->
    <Container {cat} />
  {:else}
    <p class="absolute top-1/2 mt-10">No Cats</p>
  {/each}

  <!-- end of for each -->
</div>

<!-- <Footer /> -->
