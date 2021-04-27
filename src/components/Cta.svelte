<a href="https://money.safeapps.io/" class="button is-warn is-large">Try for free</a>
<p class="below-cta">No credit card required.</p>

<style lang="scss">
  .button {
    font-weight: bold;

    border-image-slice: 1;
    border-width: 8px;
    border-image-source: repeating-linear-gradient(
      45deg,
      var(--color3) 10%,
      var(--color4) 20%,
      var(--color7) 30%,
      var(--color8) 0
    );

    &:hover {
      border-image-source: repeating-linear-gradient(
        45deg,
        var(--color1) 10%,
        var(--color2) 20%,
        var(--color5) 30%,
        var(--color6) 0
      );
    }
  }

  $color: rgba(0, 0, 0, 0.5);
  .below-cta {
    font-size: 80%;
  }
</style>
