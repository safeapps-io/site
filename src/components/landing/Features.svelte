<script>
  import { Feature } from '$components/blob';
</script>

<div class="wrapper">
  <Feature>
    <svelte:fragment slot="title">End-to-end encryption</svelte:fragment>
    <svelte:fragment slot="decription"
      >No user data leaves the client in plaintext.</svelte:fragment>
  </Feature>

  <Feature>
    <svelte:fragment slot="title">Smart import</svelte:fragment>
    <svelte:fragment slot="decription"
      >Upload any OFX/CSV file from any bank in the world. Leave the rest to us.<br />
      Save up to 5 hours a month.</svelte:fragment>
  </Feature>
  <Feature>
    <svelte:fragment slot="title">Meaningful insights</svelte:fragment>
    <svelte:fragment slot="decription"
      >Break transactions into categories. Search in the data. Generate reports.</svelte:fragment>
  </Feature>
  <Feature>
    <svelte:fragment slot="title">Asset management</svelte:fragment>
    <svelte:fragment slot="decription"
      >Track your assets and incomes to see your net worth at any time.</svelte:fragment>
  </Feature>
  <Feature>
    <svelte:fragment slot="title">Open-sourced to the end</svelte:fragment>
    <svelte:fragment slot="decription"
      ><a href="https://github.com/safeapps-io">Check the code</a>. Run your own instance. Be sure
      we don’t cheat.</svelte:fragment>
  </Feature>
  <Feature>
    <svelte:fragment slot="title">Complete anonymity</svelte:fragment>
    <svelte:fragment slot="decription"
      >Sign up with a username, pay with crypto. No phone or email is required.</svelte:fragment>
  </Feature>
</div>

<style lang="scss">
  .wrapper {
    @include mq($until: tablet) {
      display: flex;
      flex-direction: column;
      place-items: center;
    }

    @include mq($from: tablet) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(7, 1fr);
      row-gap: 1em;
      column-gap: 1em;

      width: 70%;
      margin: 0 auto;
    }

    :global {
      &:nth-child(1) {
        grid-area: 1 / 1 / 3 / 2;
      }
      &:nth-child(2) {
        grid-area: 2 / 2 / 4 / 3;
      }
      &:nth-child(3) {
        grid-area: 3 / 1 / 6 / 2;
      }
      &:nth-child(4) {
        grid-area: 4 / 2 / 7 / 3;
      }
      &:nth-child(5) {
        grid-area: 5 / 1 / 9 / 2;
      }
      &:nth-child(6) {
        grid-area: 6 / 2 / 10 / 3;
      }
    }
  }
</style>
