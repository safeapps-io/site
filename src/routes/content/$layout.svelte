<div class="content">
  <slot />
</div>

<style lang="scss">
  .content {
    width: 80%;
    margin: 3em auto;

    font-size: 120%;

    @include mq($until: tablet) {
      width: 95%;
    }
  }
</style>
