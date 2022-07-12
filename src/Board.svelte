<script lang="ts">
  import CustomMenu from "./menu/CustomMenu.svelte";

  import { board } from "./stores";

  import WordHolder from "./word/WordHolder.svelte";
  let showMenu;
</script>

<div
  on:contextmenu|preventDefault={showMenu}
  on:click|preventDefault|stopPropagation={showMenu}
>
  {#each $board as word, wordPosition}
    <WordHolder letters={word} {wordPosition} />
    <CustomMenu bind:ShowMenu={showMenu} />
  {/each}
</div>
