<script lang="ts">
  import { pageStore } from "../stores/pageStore";

  const goBack = () => ($pageStore = "HOME");
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="back-button" on:click={goBack}>
  <img src="https://cdn1.iconfinder.com/data/icons/material-core/20/home-512.png" alt="back" />
</div>

<style>
  .back-button {
    cursor: pointer;
    background-color: rgb(185, 185, 182);
    padding: 1rem 4rem;
    border-radius: 25px;
  }

  .back-button:hover {
    opacity: 0.6;
  }

  img {
    width: 2rem;
  }
</style>
