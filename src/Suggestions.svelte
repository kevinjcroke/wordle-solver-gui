<script lang="ts">
  import { possibilities, words } from "./stores";
  let selectedSuggestion: string;

  function selectionChanged() {
    words.useSuggestion(selectedSuggestion);
  }
</script>

<select bind:value={selectedSuggestion} on:change={() => selectionChanged()}>
  {#each $possibilities as posibility}
    <option>{posibility}</option>
  {/each}
</select>
