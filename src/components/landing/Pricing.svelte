<script>
  import Cta from '$components/Cta.svelte';
  import Tooltip from '$components/Tooltip.svelte';
</script>

<div class="wrapper">
  <div class="price-wrapper">
    <div class="free">
      <div>
        <Tooltip>
          <svelte:fragment slot="trigger">
            <span class="numbers">150 entities</span><br />
            for free
          </svelte:fragment>

          Since we encrypt every bit of data on the client side, we cannot differentiate
          transactions from categories. So entity is anything you create within the product.
        </Tooltip>
      </div>
    </div>
    <div class="delim">→</div>
    <div class="then">
      <div>
        <p class="price">$<span class="numbers">59.99</span><span class="duration">/year</span></p>
        <p class="moneyback">30-day money back guarantee</p>
      </div>
    </div>
  </div>

  <div class="cta">
    <Cta />
  </div>
</div>

<style lang="scss">
  .wrapper {
    position: relative;
    width: 100vw;
    left: 50%;
    right: 50%;
    margin: 3em -50vw;
    padding: 2em 0;

    background-color: var(--color8);

    &:before,
    &:after {
      background: inherit;
      content: '';
      display: block;
      height: 50%;
      left: 0;
      position: absolute;
      right: 0;
      z-index: -1;
      backface-visibility: hidden;
    }

    &:before {
      top: 0;
      transform: skewY(2deg);
      transform-origin: 100% 0;
    }

    &:after {
      bottom: 0;
      transform: skewY(-2deg);
      transform-origin: 100%;
    }
  }

  .price-wrapper {
    @include mq($from: tablet) {
      display: flex;
      place-content: center;
      place-items: center;

      .free,
      .then {
        flex: 1;

        display: flex;
      }
    }

    text-align: center;

    .free {
      justify-content: flex-end;

      .numbers {
        font-size: 1.5em;
      }
    }

    .delim {
      flex: none;
      margin: 0 1em;
      font-size: 2em;

      @include mq($until: tablet) {
        transform: rotate(90deg);
      }
    }

    .then {
      .price {
        font-size: 3rem;

        .duration {
          font-size: 1.2rem;
        }
      }

      .moneyback {
        font-size: 80%;
      }
    }
  }

  p {
    margin: 0 auto;
  }

  span.numbers {
    font-weight: bold;
    text-emphasis-position: under left;
    text-emphasis: filled var(--color8-inverted);
  }

  .cta {
    display: flex;
    flex-direction: column;
    place-items: center;
    margin-top: 3em;
  }
</style>
