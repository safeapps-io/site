<script>
  import { horizontalSlide } from '$utils/horizontalSlide';

  let hovered = false;
  const mouseover = () => (hovered = true),
    mouseleave = () => (hovered = false);
</script>

<div class="wrapper" on:mouseover={mouseover} on:mouseleave={mouseleave}>
  <div class="bracket">[</div>
  {#if hovered}
    <div class="safe" transition:horizontalSlide={{ duration: 1000 }}>safe</div>
  {/if}
  <div class="bracket">]</div>

  <div class="money">money</div>
</div>

<style lang="scss">
  .wrapper {
    display: flex;
    place-content: center;
    justify-content: center;

    font-size: 1.5em;
    text-align: center;
    color: $turquoise;

    user-select: none;
  }

  .bracket {
    font-weight: bold;
  }

  .safe {
    overflow: hidden;
  }

  .money {
    margin-left: 0.4em;
  }
</style>
