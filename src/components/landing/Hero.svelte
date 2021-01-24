<script>
  import screenshot from 'static/img/screenshot.png';

  import cssVars from 'svelte-css-vars';
  import { generateRandomColorsForVars } from '@/utils/color';
  import { pricing } from '@/core/routes';

  /**
   * 1-3 back figure #1 gradients
   * 4 back figure #1 shadow
   * 5-7 back figure #2 gradients
   * 8 back figure #2 shadow
   *
   * 1-8 button border gradient
   * 1 text emphasis color
   */
  const colors = generateRandomColorsForVars(8);
</script>

<div class="wrapper" use:cssVars={colors}>
  <figure class="wide" />
  <figure class="narrow" />

  <div class="text fake-transform">
    <p use:cssVars={{ multiplier: 0 }}>
      <span class="back">Get out of <span class="mark">debt</span></span>
    </p>
    <p use:cssVars={{ multiplier: 1 }}>
      <span class="back">Save more <span class="mark">money</span></span>
    </p>
    <p use:cssVars={{ multiplier: 2 }}>
      <span class="back">Plan for <span class="mark">future</span></span>
    </p>
    <p use:cssVars={{ multiplier: 3 }}>
      <span class="back">Preserve your <span class="mark">privacy</span></span>
    </p>

    <div class="cta" use:cssVars={{ multiplier: 4 }}>
      <a href="https://money.safeapps.io/" class="button is-warn is-large">Try for free</a>
      <p class="below-cta">
        It's free during public beta.<br />See <a href={pricing}>pricing</a> for details.
      </p>
    </div>
  </div>

  <div class="screenshot fake-transform">
    <img src={screenshot} alt="App screenshot" height="998" width="1384" />
  </div>
</div>

<style lang="scss">
  .wrapper {
    position: relative;

    display: flex;
    place-items: center;
  }

  figure {
    position: absolute;
    top: 40%;
    bottom: 40%;
    left: 40%;
    right: 40%;

    filter: blur(1px);

    @keyframes fig-anim {
      0% {
        transform: rotate(var(--start-transform)) scale(5) translateX(var(--translate));
      }
      50% {
        transform: rotate(var(--end-transform)) scale(5) translateX(var(--translate));
      }
      100% {
        transform: rotate(var(--start-transform)) scale(5) translateX(var(--translate));
      }
    }
    animation: fig-anim 12s ease-in-out infinite;

    &.wide {
      --start-transform: 19deg;
      --end-transform: 11deg;
      --translate: 10%;

      border-radius: 50% 0.2em 0.2em 0.2em;

      @include back-gradient(var(--color1), var(--color2), var(--color3));
      box-shadow: 0 0 0.5em 0.2em var(--color4);
    }

    &.narrow {
      --start-transform: -40deg;
      --end-transform: -49deg;
      --translate: -10%;

      right: 50%;

      @include back-gradient(var(--color5), var(--color6), var(--color7));
      box-shadow: 0 0 0.4em 0.2em var(--color8);

      mix-blend-mode: difference;
      border-radius: 0.2em;

      animation-duration: 7s;
    }
  }

  .text {
    flex: 2;
    padding-left: 2em;

    @include mq($from: tablet) {
      margin-right: 1em;
    }
    @include mq($until: tablet) {
      text-align: center;
    }

    > p {
      font-size: 1.4rem;
      padding-bottom: 2px;
      margin-bottom: 2px;

      .back {
        box-shadow: 0px 0px 0px 10px hsl(0, 0%, 98%);
        background: hsl(0, 0%, 98%);
      }
    }

    :global(.mark) {
      text-emphasis: filled var(--color1);
      text-emphasis-position: under;
      font-weight: bold;
    }
  }

  .text > p,
  .cta {
    @include mq($from: tablet) {
      padding-left: calc(var(--multiplier) * 20px);
    }
  }

  .cta {
    margin-top: 2em;

    .button {
      font-weight: bold;

      border-image-slice: 1;
      border-width: 8px;
      border-image-source: repeating-linear-gradient(
        45deg,
        var(--color3) 10%,
        var(--color4) 20%,
        var(--color7) 30%,
        var(--color8) 40%
      );

      &:hover {
        border-image-source: repeating-linear-gradient(
          45deg,
          var(--color1) 10%,
          var(--color2) 20%,
          var(--color5) 30%,
          var(--color6) 40%
        );
      }
    }

    .below-cta {
      font-size: 80%;
      color: white;
      text-shadow: 0 0 4px black;

      a {
        color: white;
        text-decoration: underline;

        &:hover {
          text-decoration: none;
        }
      }
    }
  }

  .screenshot {
    @include mq($until: tablet) {
      display: none;
    }

    flex: 4;

    img {
      min-width: 540px;
      border-radius: 1em;

      filter: drop-shadow(0px 0px 9px rgba(255, 255, 255, 0.5));
    }
  }
</style>
