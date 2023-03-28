<script lang="ts">
  import { hundredPosibilities, letters } from "./stores";
  let selectedSuggestion: string;

  hundredPosibilities.subscribe((x) => (selectedSuggestion = x[0]));

  function selectionChanged(event: Event) {
    letters.useSuggestion(selectedSuggestion);
    (event.target as HTMLSelectElement).blur();
  }
</script>

<select
  bind:value={selectedSuggestion}
  on:change={(event) => selectionChanged(event)}
>
  {#each $hundredPosibilities as posibility}
    <option>{posibility}</option>
  {/each}
</select>
