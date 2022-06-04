<script lang="ts">
  import { letters } from "./stores";
  const onKeyDown = (e: { key: string }) => {
    if (e.key.match(/\b[a-z]\b/i)) {
      letters.addLetter(e.key);
    } else if (e.key === "Backspace") {
      letters.backSpace();
    }
  };
</script>

<svelte:window on:keydown={onKeyDown} />
