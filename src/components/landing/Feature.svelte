<script>
  import cssVars from 'svelte-css-vars';
  import { fade } from 'svelte/transition';

  import { generateRandomColorsForVars, hslToRgb } from '@/utils/color';
  import { randBetween } from '@/utils/random';

  export let list: string[], posterText: string;

  const repeats = 20,
    getPosterVars = (index: number) => ({
      deg: `${(360 / repeats) * index}deg`,
      back: `${hslToRgb(((100 / repeats) * index) / 100, 0.5, 0.5)}`,
    });

  const figures = Math.round(randBetween(8, 16)),
    getRandPercent = () => `${randBetween(45, 50)}%`,
    getFiguresVars = () => {
      return {
        top: getRandPercent(),
        bottom: getRandPercent(),
        left: getRandPercent(),
        right: getRandPercent(),
        radius: `${randBetween(0, 4)}px ${randBetween(0, 4)}px ${randBetween(0, 4)}px ${randBetween(
          0,
          4,
        )}px`,
        rotate: `${randBetween(0, 360)}deg`,
        rotateX: `${randBetween(0, 45)}deg`,
        scale: `${Math.round(randBetween(7, 12))}`,
        skew: `${randBetween(0, 25)}deg`,
        blur: `${randBetween(0.5, 1)}px`,
        ...generateRandomColorsForVars(4),
      };
    };

  let show = false;
  setTimeout(() => (show = true), 500);
</script>

<div class="wrapper">
  <h2><slot name="title" /></h2>

  <div class="feature">
    <div class="text">
      <div class="slot-text">
        <slot name="p" />
      </div>

      <div class="list">
        {#each list as item}
          <div class="item">
            {item}
          </div>
        {/each}
      </div>
    </div>

    <div class="scene">
      {#if show}
        {#each Array(figures).fill(null) as _, i}
          <figure in:fade={{ delay: (1000 / figures) * (i + 1) }} use:cssVars={getFiguresVars()} />
        {/each}
      {/if}

      <!-- {#if show}
        <div class="cube" in:fade={{ delay: 1500 }}>
          {#each Array(repeats).fill(null) as _, i}
            <p class="face" use:cssVars={getPosterVars(i)}>
              <span>{posterText}</span>
            </p>
          {/each}
        </div>
      {/if} -->
    </div>
  </div>
</div>

<style lang="scss">
  .wrapper {
    width: 80%;
    margin: 0 auto;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: bold;

    margin: 2em 0;
  }

  .feature {
    display: flex;
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

    .item {
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

  .scene {
    position: relative;

    flex: 1;
    perspective: 8em;

    user-select: none;
  }

  figure {
    position: absolute;

    top: var(--top);
    bottom: var(--bottom);
    left: var(--left);
    right: var(--right);

    background: linear-gradient(217deg, var(--color1), rgba(255, 0, 0, 0) 70.71%),
      linear-gradient(127deg, var(--color2), rgba(0, 255, 0, 0) 70.71%),
      linear-gradient(336deg, var(--color3), rgba(0, 0, 255, 0) 70.71%);
    // box-shadow: 0 0 0.5em 0.5em var(--color4);
    border-radius: var(--radius);

    mix-blend-mode: hard-light;

    filter: blur(var(--blur));
    transform: rotate(var(--rotate)) scale(var(--scale)) rotateX(var(--rotateX)) skew(var(--skew));
  }

  .no-overflow {
    overflow: hidden;
  }

  .cube {
    @keyframes spinning {
      0% {
        transform: translateZ(-5em) rotateZ(-20deg) rotateY(0deg) scale(1);
      }
      50% {
        transform: translateZ(-5em) rotateZ(-10deg) rotateY(180deg) scale(1.2);
      }
      100% {
        transform: translateZ(-5em) rotateZ(-20deg) rotateY(360deg) scale(1);
      }
    }

    width: 100%;
    height: 100%;
    position: relative;
    animation: spinning 20s linear infinite;
    transform-style: preserve-3d;
  }

  .face {
    width: 100%;
    height: 100%;
    position: absolute;

    line-height: 10em;
    text-align: center;
    color: white;

    transform: rotateY(var(--deg)) rotateZ(90deg) translateZ(5em);

    span {
      background: var(--back);
      padding: 0.2em 3.3em;
      border-radius: 5px;
      font-weight: bold;
    }
  }
</style>
