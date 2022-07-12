<script lang="ts">
  import CustomMenu from "../menu/CustomMenu.svelte";
  import type { Letter } from "./Letter";
  export let letter: Letter;
  export let wordPosition: number;
  export let letterPosition: number;
  let showMenu;
</script>

<div
  class="holder"
  on:contextmenu|preventDefault={showMenu}
  on:click|preventDefault|stopPropagation={showMenu}
>
  <div class={letter.state}>
    {letter.letter}
    <CustomMenu {wordPosition} {letterPosition} bind:ShowMenu={showMenu} />
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
