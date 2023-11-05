<script lang="ts">
  import { pageStore, type PageStoreState } from "../stores/pageStore";

  export let title = "";
  export let icon: string;

  const routes: { [k: string]: PageStoreState } = {
    Graphs: "GRAPHS",
    Control: "CONTROL",
    Variables: "VARIABLES",
  };

  function navigate() {
    $pageStore = routes[title];
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:click={navigate} class="home-direction">
  <h1>{title}</h1>
  <img src={icon} alt="home direction" />
</div>

<style>
  .home-direction {
    background-color: rgb(63, 63, 63);
    padding: 2rem;
    border-radius: 25px;
    transition-duration: 0.5s;
    cursor: pointer;
    width: 10rem;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  .home-direction > img {
    width: 5rem;
    pointer-events: none;
  }

  .home-direction > h1 {
    pointer-events: none;
  }

  .home-direction:hover {
    scale: 1.2;
  }
</style>
