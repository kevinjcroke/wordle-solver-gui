<script lang="ts">
  import { board } from "./stores";
  import WordHolder from "./word/WordHolder.svelte";
</script>

{#each $board as word, wordPosition}
  <WordHolder letters={word} {wordPosition} />
{/each}
