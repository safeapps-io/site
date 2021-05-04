<script>
  import screenshot from '$static/img/screenshot.png';

  import Cta from '$components/Cta.svelte';
</script>

<div class="wrapper">
  <figure class="wide" />
  <figure class="narrow" />

  <div class="text fake-transform">
    <p style="--multiplier: 0">
      <span class="back">Get out of <span class="mark">debt</span></span>
    </p>
    <p style="--multiplier: 1">
      <span class="back">Save more <span class="mark">money</span></span>
    </p>
    <p style="--multiplier: 2">
      <span class="back">Plan for <span class="mark">future</span></span>
    </p>
    <p style="--multiplier: 3">
      <span class="back">Preserve your <span class="mark">privacy</span></span>
    </p>

    <div class="cta" style="--multiplier: 4">
      <Cta />
      <p>$59.99 a year. 30-day moneyback guarantee.</p>
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
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    &.wide {
      border-radius: 50% 2em 2em 2em;

      @include back-gradient(var(--color1), var(--color2), var(--color3));
      box-shadow: 0 0 4em 2em var(--color4);

      transform: rotate(8deg);
    }

    &.narrow {
      right: 50%;

      @include back-gradient(var(--color5), var(--color6), var(--color7));
      box-shadow: 0 0 4em 2em var(--color8);

      mix-blend-mode: hard-light;
      border-radius: 4em;

      transform: rotate(-40deg);
    }
  }

  .text {
    flex: 2;

    @include mq($from: tablet) {
      margin-right: 1em;
      padding-left: 2em;
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
      text-emphasis-position: under left;
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

    p {
      font-size: 80%;
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
