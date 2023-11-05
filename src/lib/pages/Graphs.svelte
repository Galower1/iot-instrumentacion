<script lang="ts">
  import BackButton from "../components/BackButton.svelte";
  import Gauge from "../components/Gauge.svelte";
  import Thermometer from "../components/Thermometer.svelte";
  import Humidity from "../components/Humidity.svelte";

  import { modulesStore } from "../stores/modulesStore";
</script>

<div class="graphs">
  <h1>Modulos</h1>
  <BackButton />
  <div class="modules">
    <div class="temperature module">
      <h2>Temperatura</h2>
      <div class="temperature-modules">
        {#each $modulesStore.temperatures as temperature, i}
          <Thermometer value={temperature} index={i} />
        {:else}
          <li>No se detectan datos de temperatura</li>
        {/each}
      </div>
    </div>
    <div class="weight module">
      <h2>Pesas</h2>
      <div class="weight-modules">
        {#each $modulesStore.Weights as weight, i}
          <Gauge value={weight} index={i} name="Weight" />
        {:else}
          <li>No se detectan datos de peso</li>
        {/each}
      </div>
    </div>
    <div class="humidity module">
      <h2>Humedad</h2>
      <Humidity value={$modulesStore.Humidity} />
    </div>
    <div class="water-level module">
      <h2>Nivel del Agua</h2>
      <Humidity value={$modulesStore.Water_Level} />
    </div>
    <div class="pressure module">
      <h2>Presion</h2>
      <Gauge name="Presion" value={$modulesStore.Pressure} />
    </div>
  </div>
</div>

<style>
  h1,
  h2 {
    text-align: center;
    padding: 1rem;
  }

  .graphs {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .module {
    min-width: 800px;
    margin: 1.5rem;
    background-color: rgb(23, 23, 23);
  }

  .temperature-modules {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .weight-modules {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .humidity,
  .pressure,
  .water-level {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
