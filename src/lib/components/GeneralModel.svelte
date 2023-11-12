<script lang="ts">
  import Gauge from "./Gauge.svelte";
  import Thermometer from "./Thermometer.svelte";
  import Humidity from "./Humidity.svelte";
  import { modulesStore } from "../stores/modulesStore";
  import PinButtons from "./PinButtons.svelte";
  import type { LedsResponse } from "../api/led";

  export let context: "VARIABLES" | "CONTROL";
  export let leds: LedsResponse = {} as LedsResponse;

  const modelImage =
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaBudWC7pUMGjClqTUhgX9P0QncaRGOMuJW8mUTmnw550YAXP9k1WgMpEXpbPQ9hES55cz071rXvSdzuUnj8R2Ipek8HCQ=w2346-h1480";

  const weightStyleOne = `
        position: absolute;
        top: 6rem;
        left: -3rem;
        scale: 0.4;
    `;

  const weightStyleTwo = `
        position: absolute;
        scale: 0.4;
        top: 6.3rem;
        left: 13.7rem;
    `;

  const weightStyleThree = `
        position: absolute;
        scale: 0.4;
        top: 6rem;
        right: 5.3rem;
  `;

  const temperatureStyleOne = `
        position: absolute;
        scale: 0.25;
        top: -7rem;
        right: 11rem;
    `;

  const temperatureStyleTwo = `
        position: absolute;
        scale: 0.25;
        top: -0.5rem;
        right: 17.3rem;
    `;

  const temperatureStyleThree = `
        position: absolute;
        scale: 0.25;
        bottom: -7.54rem;
        right: -1.4rem;
    `;

  const humidityStyleOne = `
        position: absolute;
        scale: 0.3;
        left: 9rem;
        top: 7rem;
    `;

  const humidityStyleTwo = `
        position: absolute;
        scale: 0.3;
        right: 12rem;
        top: 4rem;
    `;

  const pressureStyleOne = `
        position: absolute;
        scale: 0.3;
        right: 0rem;
        top: 7.5rem;
    `;
</script>

<div class="general-model">
  <div class="wrapper">
    <img class="schema" src={modelImage} alt="general-model" />
    {#if context === "VARIABLES"}
      <Gauge unit="kg" value={$modulesStore.Weights[0]} name="W1 #001" style={weightStyleOne} />
      <Gauge unit="kg" value={$modulesStore.Weights[1]} name="W1 #003" style={weightStyleTwo} />
      <Gauge unit="kg" value={$modulesStore.Weights[2]} name="W1 #007" style={weightStyleThree} />
      <Gauge max={150} unit="PSI" value={$modulesStore.Pressure} name="PT #009" style={pressureStyleOne} />
      <Thermometer value={$modulesStore.temperatures[0]} name="TI #004" style={temperatureStyleOne} />
      <Thermometer value={$modulesStore.temperatures[1]} name="TI #005" style={temperatureStyleTwo} />
      <Thermometer value={$modulesStore.temperatures[2]} name="TI #008" style={temperatureStyleThree} />
      <Humidity value={$modulesStore.Water_Level} name="LS #002" style={humidityStyleOne} />
      <Humidity value={$modulesStore.Humidity} name="MI #006" style={humidityStyleTwo} />
    {/if}
    {#if context === "CONTROL"}
      <PinButtons {leds} />
    {/if}
  </div>
</div>

<style>
  .general-model {
    display: grid;
    place-content: center;
    height: 100vh;
    width: 100vw;
  }

  .wrapper {
    zoom: 175%;
    position: relative;
    width: 50rem;
  }

  img {
    width: 100%;
  }
</style>
