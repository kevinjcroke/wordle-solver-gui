<script lang="ts">
  import type { Letter } from "./Letter";
  import { menuContext } from "../stores";
  export let letter: Letter;
  export let wordPosition: number;
  export let letterPosition: number;

  const setMenuContext = () => {
    menuContext.set({ wordPosition, letterPosition });
  };
</script>

<div
  class="holder"
  on:contextmenu={setMenuContext}
  on:click|preventDefault={setMenuContext}
>
  <div class={letter.state}>
    {letter.letter}
  </div>
</div>

<style>
  .holder {
    width: 60px;
    height: 60px;
    display: inline-block;
    border: 1px #3a3a3c solid;
    line-height: 60px;
    font-size: 55px;
  }

  .present {
    background-color: #b59f3b;
  }
  .correct {
    background-color: #538d4e;
  }
  .absent {
    background-color: #3a3a3c;
  }
</style>
