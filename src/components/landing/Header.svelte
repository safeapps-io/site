<script>
  import Logo from '@/components/Logo.svelte';

  import { pricing, howItWorks } from '@/core/routes';
</script>

<nav>
  <a class="logo" href="/"><Logo /></a>

  <menu>
    <a href={pricing}>Pricing</a>
    <a href={howItWorks}>How it works</a>

    <div class="empty" />

    <a class="app-link" href="https://money.safeapps.io/app" rel="external"
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
  </menu>
</nav>

<style lang="scss">
  nav {
    @include mq($from: tablet) {
      display: flex;
    }

    place-items: baseline;
    margin-top: 3em;
  }

  .logo {
    flex: 1;
  }

  .empty {
    flex: 1;
    @include mq($until: tablet) {
      display: none;
    }
  }

  menu {
    flex: 5;

    display: flex;

    place-items: baseline;
    place-content: center;

    padding: 0;
    @include mq($from: tablet) {
      padding-left: 3em;
    }

    color: gray;

    > * {
      margin-right: 2em;
      font-size: 90%;

      text-transform: uppercase;
    }
  }

  .app-link {
    @include mq($until: tablet) {
      margin-right: 0;
    }

    &:hover {
      .icon {
        transform: translateX(3px);
      }
    }
    .icon {
      transition: transform 0.1s ease-in-out;
    }
  }
</style>
