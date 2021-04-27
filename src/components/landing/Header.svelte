<script>
  import Logo from '$components/Logo.svelte';
</script>

<nav>
  <div class="empty" />
  <a href="/"><Logo /></a>
  <a class="app-link" href="https://money.safeapps.io/" rel="external"
    ><span>Go to app</span><span class="icon"
      ><svg
        viewBox="0 0 11 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        ><path
          d="M8.5 9.5l2-2-2-2m-3 4l2-2-2-2"
          stroke="currentColor"
          stroke-linecap="square" /></svg
      ></span>
  </a>
</nav>

<style lang="scss">
  nav {
    display: flex;
    place-items: baseline;

    @include mq($until: tablet) {
      place-items: center;

      .empty {
        display: none;
      }
    }

    margin-top: 5em;

    & * {
      flex: 1;
    }
  }

  .app-link {
    font-size: 90%;
    text-transform: uppercase;
    text-align: right;
  }
</style>
