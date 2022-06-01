<script lang="ts">
  import LetterHolder from "./LetterHolder.svelte";
  import type { Letter } from "./Letter";
  export let letters: Letter[] = [];
  export let wordPosition: number;
</script>

{#each letters as letter, letterPosition}
  <LetterHolder {letter} {wordPosition} {letterPosition} />
{/each}
