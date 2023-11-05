<script lang="ts">
  const temperatureConfig = {
    min: -20,
    max: 50,
  };

  export let index = 0;
  export let value = 0;
  export let name = "Termometro";

  const temperaturePercentage = (amount: number) => {
    return ((amount - temperatureConfig.min) * 100) / (temperatureConfig.max - temperatureConfig.min);
  };
</script>

<div class="thermometer">
  <h4>{name} #{index}</h4>
  <div class="base-wrapper">
    <div
      class="thermometer-base"
      style={`height: ${temperaturePercentage(value) > 100 ? 100 : temperaturePercentage(value)}%`}
    />
  </div>
  <div class="thermometer-indicator">{value}°C</div>
</div>

<style>
  .thermometer {
    position: relative;
    width: 8rem;
    padding: 1rem;
    color: white;
  }

  .base-wrapper {
    position: relative;
    height: 15rem;
    width: 2rem;
  }

  .thermometer-indicator {
    position: absolute;
    top: 6rem;
    right: 0;
    font-size: 2rem;
    font-weight: bolder;
  }

  .thermometer-base {
    width: 100%;
    bottom: 0;
    transition-duration: 1s;
    position: absolute;
    border-radius: 20px;
    background: rgb(131, 58, 180);
    background: linear-gradient(0deg, rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%);
  }
</style>
