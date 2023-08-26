<script>
  import Status from "../../Status.svelte";
  // text that go inside status
  $: status = 'Scouting...'

  /*
  catArr = the array of cat id from the api
  currentIndex = index of the image displayed \\\ When clicked the catnap button it will get the id in the catArr using the currentIndex
  
  loader = binded in loading svg
  catImage = binded in the image displayed
  fetching = turn on and of when fetching

  */

  //IMPORTS

  import { storedCAtId } from "../../stored-cat";
  import Navigation from "../../Navigation.svelte";
  // array of jsons from the api
  import { catArr } from "../../stored-cat";
  // current index of image displayed
  import { currentIndex } from "../../stored-cat";

  //VARIABLES

  // state fetch default not
  let fetching = false;

  // the loading svg
  let loader;

  // the cat image element
  let catImage;

  // check status if owned or not
  // function checkStatus() {
  //   if ($storedCAtId.includes($catArr[$currentIndex])) {
  //     status = "Cat bagged"
  //   }else{
  //     setTimeout(() => {
  //       status = "Ready to be catnapped"
  //     }, 500);
      
  //   }
  // }


  //FETCH FUNCTION

  const fetchRandomCat = async () => {
    fetching = true;
    status = "Fetching Cat..."
    const response = await fetch("https://cataas.com/cat?json=true");
    const json = await response.json();
    // store in exported variable in stored-cat.js
    $catArr.push(json._id);
    console.log($catArr);
    fetching = false;
    
  };

  // fetch on open
  fetchRandomCat();

  //SAVE TO BAG FUNCTION

  function handleCatnapButton() {
    if ($storedCAtId.length === 100) {
      alert("full bag delete some");
      return;
    }

    if ($storedCAtId.includes($catArr[$currentIndex])) {
      status = "Already Owned"
      return;
    }

    if ($storedCAtId) {
      $storedCAtId = [...$storedCAtId, $catArr[$currentIndex]];
    } else {
      $storedCAtId.push($catArr[$currentIndex]);
    }

    localStorage.setItem(
      "cat-id-from-local-storage",
      JSON.stringify($storedCAtId)
    );

    // do this if new added
    status = "Added to bag!!!"

    console.log($storedCAtId);

    console.log(localStorage.getItem("cat-id-from-local-storage"));
  }

  //PREV AND NEXT FUNCTION

  // handle for prev btn
  function handlePrevBtn() {
    loader.style.display = "block";
    catImage.style.display = "none";
    console.log(catImage.style.display);

    $currentIndex--;
    status = "Scouting Back"
  }

  // handle for next btn
  function handleNextBtn() {
    loader.style.display = "block";
    console.log(loader.style.display);

    fetchRandomCat();

    $currentIndex++;
  }

  //LOADER

  function hideLoader() {
    loader.style.display = "none";
    catImage.style.display = "block";
  }
</script>

<svelte:head>
  <title>Catground</title>
</svelte:head>
<Navigation current={"catground"} />


<h1 class="mx-10 my-6 text-center">
  This is the catground where you can search cats
</h1>
<!-- 
<h2>Cat Rarity:</h2>
<div class="rarity">
    <div></div>
    common
    <div></div>
    rare
    <div></div>
    legend
    <div></div>
    myth
    <div></div>
    god


</div>


<div>  </div>



<button>Search Cat</button>
<button>Capture</button>

 -->

<div class="flex justify-center">
  <div
    class="relative m-5 flex h-[40vh] w-full items-center justify-center rounded-xl bg-slate-400 p-3 md:h-[50vh] md:w-[40vw] lg:w-[30vw]"
  >
    <!--      -->
    <!-- {#if fetching} -->
    <!-- start of loader element -->
    <!-- <div role="status" id="loader"> -->
    <!-- <svg aria-hidden="true" class="w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-orange-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"> -->
    <!-- <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/> -->
    <!-- <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/> -->
    <!-- </svg> -->
    <!-- <span class="sr-only">Loading...</span> -->
    <!-- </div> -->

    <!-- {:else} -->
    <!-- <img class="max-h-full max-w-full z-10" loading="lazy" src="https://cataas.com/cat/{catArr[currentIndex]._id}" alt="img"> -->
    <!-- {/if } -->
    <!--      -->

    <!-- Buttons -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
      role="status"
      bind:this={loader}
    >
      <svg
        aria-hidden="true"
        class="mr-2 h-10 w-10 animate-spin fill-orange-400 text-gray-200 dark:text-gray-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          bind:this={loader}
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span class="sr-only">Loading...</span>
    </div>

    {#if !fetching}
      <img
        bind:this={catImage}
        on:load={() => {status = "Cat Fetched"; hideLoader()}}
        class="z-10 max-h-full max-w-full"
        loading="lazy"
        src="https://cataas.com/cat/{$catArr[$currentIndex]}"
        alt="img"
      />
    {/if}
    <Status>
      {status}
    </Status>
  </div>

</div>

<div class="my-3 flex justify-center gap-8">
  <!-- prev button -->
  <button
    disabled={!$currentIndex}
    on:click={handlePrevBtn}
    class="disabled:opacity-50"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="h-6 w-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  </button>

  <!-- get/save buttton -->
  <button class="bg-orange-400 p-3" on:click={handleCatnapButton}
    >Catnap!</button
  >

  <!-- next button -->
  <button on:click={handleNextBtn}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="h-6 w-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  </button>
</div>

<!-- <style>
    .rarity div{
        height: 10px;
        width: 10px;
        margin: 2px 0;
    }

    .rarity div:nth-child(1){
        background-color: rgb(0, 255, 21);
    }
    .rarity div:nth-child(2){
        background-color: rgb(255, 170, 0);
    }.rarity div:nth-child(3){
        background-color: rgb(255, 196, 196);
    }.rarity div:nth-child(4){
        background-color: rgb(174, 0, 255);
    }.rarity div:nth-child(5){
        background-color: rgb(0, 251, 255);
    }

</style> -->


