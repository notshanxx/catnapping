<script>
  import { onMount } from "svelte";
  import { storedCAtId } from "../../stored-cat";
  export let cat;
  let img;
  let deleteButton;
  let imageLoaded = false;
  let imageDiv;
  // function showsvg() {
  //   imageLoaded = true;
  //   console.log("loaded" + imageLoaded);
  // }

  function remove() {
    console.log($storedCAtId);
    $storedCAtId.splice($storedCAtId.indexOf(cat), 1);
    console.log(cat);
    console.log($storedCAtId);
    localStorage.setItem(
      "cat-id-from-local-storage",
      JSON.stringify($storedCAtId)
    );
    imageDiv.remove()
  }

  onMount(async function waitImageToLoad() {
    const imageLoadPromise = new Promise((resolve) => {
      img.onload = resolve;
    });

    await imageLoadPromise;

    console.log("image loaded" + $storedCAtId.indexOf(cat));
    setTimeout(() => {
      imageLoaded = true;
    }, 1000);

    return;
  });
</script>

<div bind:this={imageDiv} class="relative">
  <img
    width="100"
    height="100"
    bind:this={img}
    loading="lazy"
    src="https://cataas.com/cat/{cat}"
    alt="cat-{cat}"
    class=" mb-4 w-full h-full bg-slate-600 rounded"
  />
  <button
    class="p-1 absolute  top-2 right-2  {imageLoaded === true ? 'block' : 'hidden'}"
    bind:this={deleteButton}
    on:click={remove}
    ><svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="blockh-6 w-6 fill-red-600 md:w-10"
    >
      <path
        d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
      />
    </svg></button
  >
</div>
