<script lang="ts">
  import { onMount } from "svelte";
  import { initWebSocket } from "../socket";
  import { modulesStore, type ModulesStoreState } from "../stores/modulesStore";

  const PORT = 81;
  const HOST = window.location.hostname;

  onMount(() => {
    const close = initWebSocket(HOST, PORT);
    return () => close();
  });
</script>
