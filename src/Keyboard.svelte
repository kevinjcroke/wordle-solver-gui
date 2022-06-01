<script lang="ts">
  import { words } from "./stores";
  const onKeyDown = (e: { key: string }) => {
    if (e.key.match(/\b[a-z]\b/i)) {
      words.addLetter(e.key);
    } else if (e.key === "Backspace") {
      words.backSpace();
    } else if (e.key === "Enter") {
      words.nextWord();
    }
  };
</script>

<svelte:window on:keydown={onKeyDown} />
