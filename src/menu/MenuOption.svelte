<script>
  import { getContext } from "svelte";
  import { key } from "./menu";

  export let text = "";

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  const { dispatchClick } = getContext(key);

  const handleClick = (e) => {
    dispatch("click");
    dispatchClick();
  };
</script>

<div on:click={handleClick}>
  {text}
</div>

<style>
  div {
    padding: 4px 15px;
    cursor: default;
    font-size: 14px;
    display: flex;
    align-items: center;
    grid-gap: 5px;
  }
  div:hover {
    background: #0002;
  }
</style>
