<script>
  import screenshot from '$static/img/screenshot.png';

  import Cta from '$components/Cta.svelte';
  import HoverRotation from '$components/HoverRotation.svelte';

  let isVideoStarted = false,
    videoEl: HTMLVideoElement;
  const launchVideo = () => {
    isVideoStarted = true;
    videoEl.play();
  };
</script>

<div class="wrapper">
  <figure class="wide" />
  <figure class="narrow" />

  <div class="text fake-transform">
    <p style="--multiplier: 0">
      <span class="back">Save more <span class="mark">money</span></span>
    </p>
    <p style="--multiplier: 1">
      <span class="back">Plan for <span class="mark">future</span></span>
    </p>
    <p style="--multiplier: 2">
      <span class="back">Preserve your <span class="mark">privacy</span></span>
    </p>

    <div class="cta" style="--multiplier: 4">
      <Cta />
      <p>$59.99 a year. 30-day moneyback guarantee.</p>
    </div>
  </div>

  <HoverRotation className="video fake-transform" play={!isVideoStarted}>
    <!-- svelte-ignore a11y-media-has-caption -->
    <video
      poster={screenshot}
      controls={isVideoStarted}
      width="1080"
      height="1920"
      bind:this={videoEl}>
      <source src="https://safeapps.io/static/video/demo.490d3316.mp4" type="video/mp4" />
    </video>

    {#if !isVideoStarted}
      <div class="overlay" on:click={launchVideo}>
        <!-- © https://teenyicons.com/ play-circle (solid) -->
      </div>
      <svg
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="90"
        height="90"
        on:click={launchVideo}
        ><path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zm6.249-2.432a.5.5 0 01.5-.002l3.5 2a.5.5 0 010 .868l-3.5 2A.5.5 0 016 9.5v-4a.5.5 0 01.249-.432z"
          fill="currentColor" /></svg>
    {/if}
  </HoverRotation>
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

  :global(.video) {
    @include mq($until: tablet) {
      display: none;
    }

    flex: 4;

    &:hover svg {
      color: var(--color3);
      filter: drop-shadow(3px 3px 1px var(--color4));
    }
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    transition: color 0.3s, filter 0.3s;

    color: var(--color1);
    filter: drop-shadow(3px 3px 1px var(--color2));
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    cursor: pointer;
  }

  video {
    border-radius: 1em;

    filter: drop-shadow(0px 0px 9px rgba(255, 255, 255, 0.5));
  }
</style>
