<script lang="ts">
  import { toggleLed, type LedsResponse } from "../api/led";

  export let leds: LedsResponse;

  let pinStates = leds?.states;

  const handleLed = async (pin: number, index: number) => {
    const currentState = pinStates[index];
    const newState = currentState === "on" ? "off" : "on";

    await toggleLed(pin, newState);
    pinStates[index] = newState;
    pinStates = pinStates;
  };

  const styleOne = `
    bottom: -1rem;
  `;

  const styleTwo = `
    top: 6.5rem;
    left: 5.5rem;
  `;

  const styleThree = `
    bottom: -1rem;
    left: 16rem;
  `;

  const styleFour = `
    left: 32.5rem;
    bottom: -1rem;
  `;

  const styleFive = `
    top: 6.5rem;
    right: 0.5rem;
  `;

  const styles = [styleOne, styleTwo, styleThree, styleFour, styleFive];
  const name = ["Motor 1", "Valvula 1", "Motor 2", "Motor 3", "Valvula 2"];
</script>

<div class="pin-buttons">
  {#each leds.pins as pin, i}
    <button
      style={styles[i]}
      class:active-pin={pinStates[i] === "on"}
      class:disabled-pin={pinStates[i] === "off"}
      on:click={() => handleLed(pin, i)}
      class="pin-button">{name[i]}</button
    >
  {/each}
</div>

<style>
  .pin-button {
    scale: 0.3;
    position: absolute;
    color: white;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    border: none;
    padding: 2rem;
    border-radius: 25px;
    font-size: 2rem;
    cursor: pointer;
    transition-duration: 0.5s;
  }

  .active-pin {
    background-color: rgb(0, 135, 0);
  }

  .pin-button:hover {
    scale: 0.4;
  }

  .active-pin:hover {
    background-color: rgb(0, 103, 0);
  }

  .disabled-pin {
    background-color: rgb(156, 0, 0);
  }

  .disabled-pin:hover {
    background-color: rgb(52, 0, 0);
  }
</style>
