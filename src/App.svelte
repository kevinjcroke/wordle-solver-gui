<script lang="ts">
  import { letters, possibilities } from "./stores";
  import { onMount } from "svelte";
  import Suggestions from "./Suggestions.svelte";
  import Board from "./Board.svelte";
  import Keyboard from "./Keyboard.svelte";

  export let firstWord: string;

  onMount(() => letters.useSuggestion(firstWord));
</script>

<main>
  <boardArea>
    <board>
      <Board />
    </board>
    <sugestions>
      <Suggestions />
    </sugestions>
  </boardArea>
  <footer>
    Possibilities={$possibilities.length}
  </footer>
</main>
<Keyboard />

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
