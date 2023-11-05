<script>
  import HomeDirection from "../components/HomeDirection.svelte";
</script>

<h1 class="home-header">Produccion Cerveza Lagger</h1>
<div class="home-panel">
  <HomeDirection title="Graphs" icon="https://cdn-icons-png.flaticon.com/512/404/404621.png" />
  <HomeDirection title="Control" icon="https://cdn-icons-png.flaticon.com/512/2782/2782058.png" />
  <HomeDirection title="Variables" icon="https://cdn-icons-png.flaticon.com/512/3320/3320938.png" />
</div>

<style>
  .home-panel {
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    background-color: black;
    background-image: url(https://static.vecteezy.com/system/resources/previews/024/573/695/non_2x/frothy-beer-drop-refreshes-glass-in-dark-bar-establishment-generated-by-ai-free-photo.jpg);
    background-repeat: no-repeat;
    background-size: cover;
  }

  .home-header {
    text-align: center;
  }

  @media only screen and (max-width: 735px) {
    .home-panel {
      flex-direction: column;
    }
  }
</style>
