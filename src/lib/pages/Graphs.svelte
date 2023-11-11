<script lang="ts">
  import BackButton from "../components/BackButton.svelte";
  import GeneralModel from "../components/GeneralModel.svelte";
</script>

<div class="content">
  <BackButton />
  <GeneralModel />
</div>

<style>
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 1rem;
  }
</style>
