<script>
  import { generateRandomColorsForVars } from '@/utils/color';
  import { randBetween } from '@/utils/random';
  import cssVars from 'svelte-css-vars';

  const list = [
    { cls: 'big', text: 'complete privacy with end-to-end encryption' },
    { cls: 'small', text: 'unlimited data: wallets, transactions, categories, etc.' },
    { cls: 'big', text: 'smart import from any bank in the world' },
    { text: 'unlimited users connected to your wallets' },
    { cls: 'small', text: 'webapp that supports all platforms and devices' },
    { text: 'no tracking in any way, be it your data or your behavior' },
    { text: 'in-depth analytics of your finances' },
    { text: 'asset management' },
    { cls: 'small', text: '(soon) loan tracking and balance forecasting' },
    { cls: 'small', text: '(soon) financial goals and long-term planning' },
  ];
</script>

<div class="beta">
  <h2>It's free during public beta</h2>

  <p>
    But it will not be once we ship the production product. We expect it to happen in late February
    2021.
  </p>
  <p>
    After that you'll be prompted to pay with a grace period of 30 days. You'll be able to export
    everything at any point in time even if you do not subscribe.
  </p>
</div>

<h1>Single plan for everybody</h1>

<p class="price">$<span class="numbers">29.99</span><span class="duration">/year</span></p>
<p class="trial">14 days trial, 30-day money back guarantee</p>

<h2>What you get</h2>

<ul>
  {#each list as {text, cls=''}}
    <li
      use:cssVars={{ ...generateRandomColorsForVars(3), radius: `${randBetween(0.2, 3.5)}em` }}
      class={cls}>
      {text}
    </li>
  {/each}
</ul>

<style lang="scss">
  h1,
  h2,
  .price {
    font-weight: bold;
    text-align: center;
  }

  h1 {
    @include mq($until: tablet) {
      margin: 1em 0 1em;
    }
    margin: 2em 0 1em;
    font-size: 2.5rem;
  }

  .price {
    font-size: 4rem;

    .numbers {
      text-emphasis-position: under;
      text-emphasis: filled rgb(0, 255, 21);
    }

    .duration {
      font-size: 1.5rem;
    }
  }

  .trial {
    text-align: center;
    font-size: 90%;
  }

  h2 {
    margin: 2em 0 1em;
    font-size: 1.8rem;
  }

  .beta {
    width: 50%;
    @include mq($until: tablet) {
      width: 90%;
    }

    margin: 0 auto;
    margin-bottom: 4em;
    padding: 1em 2em;

    border-radius: 0.3em;

    text-align: center;
    font-size: 90%;

    @include back-gradient(#b3282e, #9d1ed8, #cf95dc);
    color: white;

    p:not(:last-child) {
      margin-bottom: 1em;
    }

    h2 {
      margin-top: 0;
      font-size: 1.5rem;
    }
  }

  .bold {
    font-weight: bold;
  }

  .big {
    font-size: 1.3rem;
    font-weight: bold;
  }
  .small {
    font-size: 0.8rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    place-content: center;

    @include mq($from: tablet) {
      width: 65%;
    }
    margin: 0 auto;
    margin-bottom: 3em;

    text-align: center;
    color: white;

    li {
      display: flex;
      flex-direction: column;
      justify-content: center;

      max-width: 200px;
      @include mq($until: tablet) {
        max-width: 50%;
      }
      flex: 1 0 auto;

      padding: 0.5em 1em;
      border-radius: var(--radius);

      @include back-gradient(var(--color1), var(--color2), var(--color3));

      text-shadow: 0 0 5px #000000a3;
    }
  }
</style>
