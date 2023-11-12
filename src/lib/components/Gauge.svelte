<script lang="ts">
  export let value = 0;
  export let name = "";

  export let style: string = "";
  export let unit: string = "%";
  export let max: number = 5;
</script>

<div class="gauge" {style}>
  <h4>{name}</h4>
  <div class="gauge-body">
    <div class="gauge-fill" style={`transform: rotate(${value / max / 2}turn)`} />
    <div class="gauge-cover">{value}{unit}</div>
  </div>
</div>

<style>
  h4 {
    width: 100%;
    font-size: 2rem;
    height: 2rem;
    margin: 1rem;
  }

  .gauge {
    width: 100%;
    max-width: 250px;
    color: black;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }

  .gauge-body {
    width: 100%;
    height: 0;
    padding-bottom: 50%;
    background-color: #b4c0be;
    position: relative;
    border-top-left-radius: 100% 200%;
    border-top-right-radius: 100% 200%;
    overflow: hidden;
  }

  .gauge-fill {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(34, 193, 195);
    background: linear-gradient(0deg, rgba(34, 193, 195, 1) 0%, rgba(253, 187, 45, 1) 100%);
    transform-origin: 50% 0%;
    transform: rotate(0.1turn);
    transition: transform 200ms ease-out;
  }

  .gauge-cover {
    color: white;
    width: 75%;
    height: 150%;
    background-color: rgb(30, 30, 30);
    position: absolute;
    border-radius: 50%;
    top: 25%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 25%;
    box-sizing: border-box;
    font-weight: bold;
    font-size: 32px;
  }
</style>
