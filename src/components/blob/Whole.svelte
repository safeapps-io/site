<script>
  import Blob from './Blob.svelte';
</script>

<div class="wrapper">
  <Blob />
  <div class="text">
    <h3 class="title">
      <span class="back">
        <slot name="title" />
      </span>
    </h3>
    <p class="description">
      <span class="back">
        <slot name="decription" />
      </span>
    </p>
  </div>
</div>

<style lang="scss">
  .wrapper {
    position: relative;
  }

  .text {
    position: absolute;
    top: 1em;
    width: 275px;
    @include mq($until: tablet) {
      left: 50%;
      transform: translate(-50%, 3em);
    }
    @include mq($from: tablet) {
      left: 0;
      transform: translate(3em, 3em);
    }

    z-index: 5;
  }

  .title {
    text-transform: lowercase;
    font-weight: bold;
    font-size: 24px;

    line-height: 1.3;
    margin-bottom: 1em;
  }

  .description {
    transform: translateX(1em);
  }

  .back {
    background-color: #fff;
    box-shadow: 0 0 0 5px #fff;
  }
</style>
