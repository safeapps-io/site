<script>
  import { fade } from 'svelte/transition';

  export let showTooltip = true;

  const enter = () => (show = true),
    leave = () => (show = false);

  let show = false;
</script>

<div on:mouseenter={enter} on:touchstart={enter} on:mouseleave={leave} on:touchend={leave}>
  <slot name="trigger" />
  <div class="tooltip-content-wrapper">
    {#if showTooltip && show}
      <div class="tooltip-content" transition:fade|local={{ duration: 300 }}>
        <div class="content">
          <slot />
        </div>
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  $width: 350px;

  .tooltip-content-wrapper {
    position: relative;
  }

  .tooltip-content {
    position: absolute;
    top: 100%;

    @include mq($until: tablet) {
      left: 1em;
      right: 1em;
    }

    @include mq($from: tablet) {
      max-width: $width;
      left: 0;
      right: 0;
    }

    @include z(tooltip-content);
  }

  .content {
    display: inline-block;
    left: 0;
    right: 0;

    padding: 0.3em 0.4em;
    font-size: 80%;

    background-color: $scheme-main;

    box-shadow: 0 1em 1em -0.6em change-color($turquoise, $alpha: 0.3);
    background-color: rgb(250, 250, 250);
  }
</style>
