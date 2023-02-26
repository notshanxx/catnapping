<script>
import GetRandomAnimal from "./GetRandomAnimal.svelte";
</script>


<header>
    <h1>Catnapping</h1>
</header>

<main>
    <GetRandomAnimal />
</main>

<i>no cats harmed!!!</i>


<style>
    i{
        position: absolute;
        top: .5rem;
        right: .5rem;
        font-size: medium;
        font-family: 'Courier New', Courier, monospace;
        color: brown;
    }
    header{
        background-color: rgb(255, 175, 37);
        padding: 2rem 0;
    }
</style>
