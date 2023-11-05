<script lang="ts">
  import BackButton from "../components/BackButton.svelte";
  import { getLeds } from "../api/led";
  import PinButtons from "../components/PinButtons.svelte";
</script>

<div class="control">
  <h1>Control</h1>
  <BackButton />
  <h2>LEDS</h2>
  <div class="leds">
    {#await getLeds()}
      <h4>CARGANDO...</h4>
    {:then leds}
      <PinButtons {leds} />
    {:catch _}
      <li>Hubo un error consiguiendo los leds</li>
    {/await}
  </div>
</div>

<style>
  .control {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
