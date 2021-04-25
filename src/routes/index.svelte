<script>
  import Hero from '$components/landing/Hero.svelte';
</script>

<h1 class="fake-transform">
  World's first
  <span class="secure">100%&nbsp;secure</span> finance tracker
</h1>

<div class="hero">
  <Hero />
</div>

<style lang="scss">
  h1 {
    margin: 2em 0 3em;
    @include mq($until: tablet) {
      margin: 1em 0 2em;
    }

    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;

    // Otherwise gradient backs overlay it
    z-index: 2;

    filter: drop-shadow(0 0 2px white);

    .secure {
      text-emphasis-position: under left;
      text-emphasis: '🔥';
    }
  }

  .hero {
    @include mq($until: tablet) {
      margin-bottom: 5em;
    }
    margin-bottom: 15em;
  }
</style>
