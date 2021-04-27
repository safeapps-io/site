<script>
  import Hero from '$components/landing/Hero.svelte';
  import Features from '$components/landing/Features.svelte';
  import Pricing from '$components/landing/Pricing.svelte';
  import SmallFeatures from '$components/landing/SmallFeatures.svelte';

  import cssVars from 'svelte-css-vars';

  import { generateRandomColorsForVars, hslToRgb, invertColor } from '$utils/color';
  import { randBetween } from '$utils/random';

  /**
   * 1-3 back figure #1 gradients
   * 4 back figure #1 shadow
   * 5-7 back figure #2 gradients
   * 8 back figure #2 shadow
   *
   * 1-8 button border gradient
   * 1 text emphasis color
   */
  const colors = generateRandomColorsForVars(7),
    hue = randBetween(0, 1),
    sat = randBetween(0.5, 0.8),
    color8 = hslToRgb(hue, sat, randBetween(0.8, 0.95)),
    // We need to lower the lightness, because otherwise the inverted color is just different
    // tones of black
    toInvert = hslToRgb(hue, sat, 0.5);

  colors['color8'] = color8;
  colors['color8-inverted'] = invertColor(toInvert);
</script>

<h1 class="fake-transform">
  World's first
  <span class="secure">100%&nbsp;secure</span> finance tracker
</h1>

<div class="hero" use:cssVars={colors}>
  <Hero />
</div>

<h2>What do we have</h2>
<Features />

<div class="small-feat">
  <SmallFeatures />
</div>

<div use:cssVars={colors}>
  <Pricing />
</div>

<style lang="scss">
  h1,
  h2 {
    font-weight: bold;
    text-align: center;

    margin: 2em 0 3em;
    @include mq($until: tablet) {
      margin: 1em 0 2em;
    }
  }

  h1 {
    font-size: 3rem;

    // Otherwise gradient backs overlay it
    z-index: 2;

    filter: drop-shadow(0 0 2px white);

    .secure {
      text-emphasis-position: under left;
      text-emphasis: '🔥';
    }
  }

  h2 {
    font-size: 2.5rem;
  }

  .hero {
    @include mq($until: tablet) {
      margin-bottom: 5em;
    }
    margin-bottom: 15em;
  }

  .small-feat {
    margin-top: 2em;
  }
</style>
