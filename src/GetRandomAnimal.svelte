<script>

    let fetching = false
    let currentCatImageUrl = ""
    let catJson = []
    const fetchCat = (async () => {
        fetching = true
		const response = await fetch("https://cataas.com/cat?json=true")
        const json = await response.json()
        currentCatImageUrl =`https://cataas.com${json.url}`
        catJson = [...catJson,json]
        fetching = false
	})
    // fetch on open
    fetchCat()


</script>


<div class="img-container">
    
    {#if fetching}
        loading.....
    {:else}
        <img loading="eager" src="{currentCatImageUrl}" alt="img">
    {/if }
    
       
</div>
<div class="button-container"> 
    <button disabled={fetching} on:click={fetchCat}>Click Me</button>
    <button on:click={() => alert("to be added ;}")}>Catnap!</button>
</div>






<style>
    
    button{
        padding: .5rem ;
        font-size: medium;
    }
    .img-container{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 65vh;
        margin: 1rem 2rem;
    }
    img{ 
        max-width: 100%;
        max-height: 100%;
    }
    .button-container{
        margin-bottom: 2rem;
    }
</style>