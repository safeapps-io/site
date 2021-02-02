<script>
  import cssVars from 'svelte-css-vars';
  import { generateRandomColorsForVars } from '@/utils/color';

  const count = Array(22).fill(null);

  export let text: string;
</script>

<div class="wrapper">
  <figure class="parent" use:cssVars={generateRandomColorsForVars(4)}>
    {#each count as _, i}
      <div class={`cell div${i + 1}`} use:cssVars={generateRandomColorsForVars(3)} />
    {/each}

    <div class="overlay" />
  </figure>
  <div class="text-overlay">
    <span>{text}</span>
  </div>
</div>

<style lang="scss">
  $transform: rotate(-18deg) scale(1.1);
  $transform-mobile: rotate(-18deg) scale(0.8);
  $transition: transform 0.2s ease-in-out;

  .wrapper {
    position: relative;
    user-select: none;
  }

  .parent {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: repeat(7, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    width: 100%;
    height: 150px;
    max-width: 340px;
    margin: 0 auto;

    filter: blur(7px);
    transition: $transition;
    @include mq($until: tablet) {
      transform: $transform-mobile;
    }
    @include mq($from: tablet) {
      transform: $transform;
    }

    box-shadow: -2em -2em 2.1em 0em var(--color1), 2em -2em 2.1em 0em var(--color2),
      -2em 2em 2.1em 0em var(--color3), 2em 2em 2.1em 0em var(--color4);

    .cell {
      @include back-gradient(var(--color1), var(--color2), var(--color3));
      border: 2px solid black;
    }

    .div1 {
      grid-area: 1 / 1 / 2 / 3;
    }
    .div2 {
      grid-area: 1 / 3 / 2 / 6;
    }
    .div3 {
      grid-area: 1 / 6 / 2 / 8;
    }
    .div4 {
      grid-area: 1 / 8 / 7 / 9;
    }
    .div5 {
      grid-area: 1 / 9 / 3 / 10;
    }
    .div6 {
      grid-area: 1 / 10 / 3 / 12;
    }
    .div7 {
      grid-area: 3 / 9 / 5 / 11;
    }
    .div8 {
      grid-area: 6 / 1 / 8 / 3;
    }
    .div9 {
      grid-area: 6 / 3 / 8 / 5;
    }
    .div10 {
      grid-area: 2 / 1 / 6 / 5;
    }
    .div11 {
      grid-area: 2 / 5 / 5 / 6;
    }
    .div12 {
      grid-area: 4 / 6 / 5 / 8;
    }
    .div13 {
      grid-area: 2 / 7 / 4 / 8;
    }
    .div14 {
      grid-area: 2 / 6 / 4 / 7;
    }
    .div15 {
      grid-area: 5 / 5 / 6 / 7;
    }
    .div16 {
      grid-area: 5 / 7 / 8 / 8;
    }
    .div17 {
      grid-area: 6 / 5 / 7 / 7;
    }
    .div18 {
      grid-area: 7 / 5 / 8 / 7;
    }
    .div19 {
      grid-area: 7 / 8 / 8 / 12;
    }
    .div20 {
      grid-area: 3 / 11 / 6 / 12;
    }
    .div21 {
      grid-area: 5 / 9 / 6 / 11;
    }
    .div22 {
      grid-area: 6 / 9 / 7 / 12;
    }
  }

  .text-overlay {
    position: absolute;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    place-items: center;
    place-content: center;

    color: white;
    font-weight: bold;
    font-size: 200%;

    span {
      padding: 0em 0.4em;
      border: 4px solid #fff;

      transition: $transition;
    }
  }
</style>
