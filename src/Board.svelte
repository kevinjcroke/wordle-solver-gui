<script lang="ts">
  import { words } from "./stores";
  import WordHolder from "./word/WordHolder.svelte";
</script>

{#each $words as word, wordPosition}
  <WordHolder letters={word} {wordPosition} />
{/each}
