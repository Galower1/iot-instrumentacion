<script lang="ts">
  import BackButton from "../components/BackButton.svelte";
  import { getLeds } from "../api/led";
  import GeneralModel from "../components/GeneralModel.svelte";
</script>

<div class="control">
  <h1>Control</h1>
  <BackButton />
  <div class="leds">
    {#await getLeds()}
      <h4>CARGANDO...</h4>
    {:then leds}
      <GeneralModel context="CONTROL" {leds} />
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
