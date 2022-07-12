<script lang="ts">
  import { possibilities, letters } from "./stores";
  let selectedSuggestion: string;

  function selectionChanged(event: Event) {
    letters.useSuggestion(selectedSuggestion);
    (event.target as HTMLSelectElement).blur();
  }
</script>

<select
  bind:value={selectedSuggestion}
  on:change={(event) => selectionChanged(event)}
>
  {#each $possibilities as posibility}
    <option>{posibility}</option>
  {/each}
</select>
