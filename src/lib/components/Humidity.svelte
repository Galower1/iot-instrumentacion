<script lang="ts">
  export let value = 0;
</script>

<div class="humidity">
  <div class="dropplet" />
  <div class="dropplet-base">
    <div class="dropplet-indicator">{value}%</div>
  </div>
</div>

<style>
  .humidity {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    color: white;
    width: 13rem;
    height: 15rem;
  }

  .dropplet {
    width: 10rem;
    height: 10rem;
    border-radius: 0 50% 50% 50%;
    rotate: 45deg;
    position: absolute;
    top: 30px;
    background-color: #3c8198;
    box-shadow: 25px -15px 0px -6px rgba(0, 0, 0, 1);
  }

  .dropplet-base {
    position: relative;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    background-color: rgb(116, 163, 183);
  }

  .dropplet-indicator {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 2rem;
    font-weight: bolder;
    transform: translate(-50%, -50%);
  }
</style>
