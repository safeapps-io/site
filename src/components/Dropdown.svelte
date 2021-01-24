<script>
  import { fly } from 'svelte/transition';

  export let triggerText = '',
    show: boolean = false,
    centered: boolean = false,
    right: boolean = false,
    fullwidth: boolean = false;

  const id = Math.random().toString();
</script>

<div
  class="dropdown is-active"
  class:fullwidth
  class:is-right={right}
  on:mouseenter={() => (show = true)}
  on:mouseleave={() => (show = false)}>
  <div class="dropdown-trigger">
    <slot name="trigger" {id}>
      <span>{triggerText}</span><span class="icon">
        <!-- © teenyicons.com down-small -->
        <svg
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          ><path d="M4.5 6.5l3 3 3-3" stroke="currentColor" stroke-linecap="square" /></svg>
      </span>
    </slot>
  </div>
  {#if show}
    <div
      class="dropdown-menu"
      class:centered
      {id}
      role="menu"
      transition:fly|local={{ y: -10, duration: 200 }}>
      <div class="dropdown-content">
        <slot />
      </div>
    </div>
  {/if}
</div>

<style lang="scss">
  .dropdown-content {
    padding-top: 0.5em;
    min-width: var(--dropdown-min-width);
  }
</style>
