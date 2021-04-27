<script>
  import Footer from '$components/landing/Footer.svelte';
  import Header from '$components/landing/Header.svelte';
  import Meta from '$components/Meta.svelte';
</script>

<Meta
  title="[safe] money: 100% secure finance tracker"
  description="Safe, end-to-end encrypted app to track your finances, get out of debt and live the full life without a corporation trading your secrets." />

<div class="container">
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</div>

<style global lang="scss">
  @import 'src/styles/layouts/site';

  .container {
    display: flex;
    flex-direction: column;

    min-height: 100vh;
    padding: 0 1em;
  }

  main {
    flex: 1;
    margin: 2em 0;
  }
</style>
