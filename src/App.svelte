<script lang="ts">
  import { words, possibilities } from "./stores";
  import { onMount } from "svelte";
  import Suggestions from "./Suggestions.svelte";
  import WordHolder from "./word/WordHolder.svelte";

  export let firstWord: string;

  const onKeyDown = (e) => {
    if (e.key.match(/\b[a-z]\b/i)) {
      words.addLetter(e.key);
    } else if (e.key === "Backspace") {
      words.backSpace();
    } else if (e.key === "Enter") {
      words.nextWord();
    }
  };

  onMount(() => words.useSuggestion(firstWord));
</script>

<main>
  <boardArea>
    <board>
      {#each $words as word, wordPosition}
        <WordHolder letters={word} {wordPosition} />
      {/each}
    </board>
    <sugestions>
      <Suggestions />
    </sugestions>
  </boardArea>
  <footer>
    Possibilities={$possibilities.length}
  </footer>
</main>
<svelte:window on:keydown={onKeyDown} />

<style>
  main {
    justify-content: center;
    display: flex;
    width: 100%;
  }
  :global(body) {
    background-color: black;
    color: white;
    display: flex;
  }
  board {
    width: 310px;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    padding: 1em;
    margin: 0;
    padding: 0;
  }
  footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
  }
  boardArea {
    display: flex;
    width: 310px;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }
  sugestions {
    display: flex;
    justify-content: right;
    padding-top: 10px;
  }
</style>
