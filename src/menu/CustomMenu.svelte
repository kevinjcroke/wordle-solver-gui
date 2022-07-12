<script type="ts">
  import Menu from "./Menu.svelte";
  import MenuOption from "./MenuOption.svelte";
  import { LetterState } from "../word/Letter";
  import { letters } from "../stores";

  let pos = { x: 0, y: 0 };
  let showMenu = false;

  export async function ShowMenu(e: { clientX: any; clientY: any }) {
    if (showMenu) {
      showMenu = false;
      await new Promise((res) => setTimeout(res, 100));
    }

    pos = { x: e.clientX, y: e.clientY };
    showMenu = true;
  }

  function closeMenu() {
    showMenu = false;
  }

  function SetState(state: LetterState) {
    letters.defineLetterState(state);
    return true;
  }
</script>

{#if showMenu}
  <Menu {...pos} on:click={closeMenu} on:clickoutside={closeMenu}>
    <MenuOption on:click={() => SetState(LetterState.Absent)} text="Absent" />
    <MenuOption on:click={() => SetState(LetterState.Present)} text="Present" />
    <MenuOption on:click={() => SetState(LetterState.Correct)} text="Correct" />
  </Menu>
{/if}
