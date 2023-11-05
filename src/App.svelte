<script lang="ts">
  import Home from "./lib/pages/Home.svelte";
  import Graphs from "./lib/pages/Variables.svelte";
  import Variables from "./lib/pages/Graphs.svelte";

  import { pageStore } from "./lib/stores/pageStore";
  import Socket from "./lib/components/Socket.svelte";
  import Control from "./lib/pages/Control.svelte";
</script>

<Socket />
{#if $pageStore === "HOME"}
  <Home />
{:else if $pageStore === "GRAPHS"}
  <Graphs />
{:else if $pageStore === "VARIABLES"}
  <Variables />
{:else if $pageStore === "CONTROL"}
  <Control />
{/if}
