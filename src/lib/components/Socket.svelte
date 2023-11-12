<script lang="ts">
  import { onMount } from "svelte";
  import { initWebSocket } from "../socket";
  import { updatePowerBI } from "../api/powerBI";
  import { modulesStore } from "../stores/modulesStore";

  const PORT = 81;
  const HOST = window.location.hostname;

  onMount(() => {
    const close = initWebSocket(HOST, PORT);
    const interval = setInterval(() => {
      updatePowerBI({
        Temperatura_1: $modulesStore.temperatures[0],
        Temperatura_2: $modulesStore.temperatures[1],
        Temperatura_3: $modulesStore.temperatures[2],
        Humedad: $modulesStore.Humidity,
        Presion: $modulesStore.Pressure,
        Peso_1: $modulesStore.Weights[0],
        Peso_2: $modulesStore.Weights[1],
        Peso_3: $modulesStore.Weights[2],
        Nivel: $modulesStore.Water_Level,
      });
    }, 1000);
    return () => {
      close();
      clearInterval(interval);
    };
  });
</script>
