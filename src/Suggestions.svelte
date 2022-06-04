<script lang="ts">
  import { possibilities, letters } from "./stores";
  let selectedSuggestion: string;

  function selectionChanged() {
    letters.useSuggestion(selectedSuggestion);
  }
</script>

<select bind:value={selectedSuggestion} on:change={() => selectionChanged()}>
  {#each $possibilities as posibility}
    <option>{posibility}</option>
  {/each}
</select>
