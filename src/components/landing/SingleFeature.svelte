<script>
  import Mondrian from './Mondrian.svelte';

  export let picText: string;
</script>

<div class="columns is-vcentered">
  <div class="column is-3 modrian">
    <Mondrian text={picText} />
  </div>
  <div class="column text-column">
    <h2><slot name="title" /></h2>

    <div class="text">
      <div class="slot-text">
        <slot name="p" />
      </div>

      <div class="list">
        <slot />
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  @include mq($from: tablet) {
    .text-column {
      padding: 0 6em 0 4em;
    }
  }

  h2 {
    font-size: 1.8rem;
    font-weight: bold;

    margin: 1em 0;
  }

  .text {
    flex: 2;
  }

  .slot-text {
    margin-bottom: 2em;
    font-size: 1.2rem;

    :global(p) {
      margin-bottom: 1em;
    }
  }

  .list {
    counter-reset: list-number;

    > :global(*) {
      counter-increment: list-number;
      margin-bottom: 0.8em;

      &::before {
        $margin: 1em;

        display: inline-flex;
        align-items: center;
        justify-content: center;

        width: $margin * 2;
        height: $margin * 2;

        margin-right: $margin;

        border: 2px dotted black;

        font-size: 0.8rem;
        font-weight: bold;

        content: counter(list-number);
      }
    }
  }
</style>
