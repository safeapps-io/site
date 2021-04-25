<script>
  import SingleFeature from '$components/landing/SingleFeature.svelte';
</script>

<SingleFeature picText="upload">
  <span slot="title">Tracking expenses sucks</span>

  <svelte:fragment slot="p">
    <p>
      Managing finances is <span class="boring">SO BORING</span>, but tracking expenses is just
      <span class="worst">THE WORST</span>.
    </p>
    <p>We help you with it:</p>
  </svelte:fragment>

  <p>upload your banking statement</p>
  <p>edit those transactions that need this</p>
  <p>there's no step 3, you're done</p>
</SingleFeature>

<hr />

<SingleFeature picText="balance">
  <span slot="title">Know your net worth</span>
  <svelte:fragment slot="p">
    <p>
      You money (hopefully) are spread across multiple assets in a few banks and
      (crypto?-)currencies.
    </p>
    <p>It's a nightmare to manage and remember. But not with us.</p>
  </svelte:fragment>

  <p>add all your assets</p>
  <p>
    <strong>see your net worth</strong><br />
    At every point in time — even future. The forecast will be based on your expenses and assets performance
  </p>
  <p>again, there's no step 3, it's so easy</p>
</SingleFeature>

<hr />

<SingleFeature picText="privacy">
  <span slot="title">Privacy meets features</span>
  <svelte:fragment slot="p">
    <p>We don't believe in selling data, so we will not do this.</p>
    <p>But please don't take our word for it. We have proof:</p>
  </svelte:fragment>

  <p>
    <strong>math guards you.</strong><br />
    Every bit of your data is encrypted on the device — the server only sees ciphertext that cannot be
    cracked by all the computers in the world before heat death of the universe
  </p>
  <p>
    <strong>community guards you.</strong><br />
    Everyone can check the product for backdoors (there's none, really) because the code is open for
    all of you to see.
  </p>
</SingleFeature>

<hr />

<SingleFeature picText="control">
  <span slot="title">(soon) Loans may attract the sharks</span>

  <svelte:fragment slot="p">
    <p>We all take loans. They help us progress.</p>
    <p>
      But if you have an active loan, you must be extra careful with your cash flow. This river can
      go wild and make you a bankrupt.
    </p>
    <p>We help here too:</p>
  </svelte:fragment>

  <p>save all your loans in the app</p>
  <p>get full payment calendar mapped on your net worth to be super-calm about tomorrow</p>
  <p>… you get the idea. No step 3</p>
</SingleFeature>

<hr />

<div class="last">
  <SingleFeature picText="control">
    <span slot="title">(soon) You have goals and dreams — but not time </span>
    <svelte:fragment slot="p">
      <p>In the end we work to live, not the other way around.</p>
      <p>
        And we all have high hopes for the future. Money is not the goal, it a mere building block.
      </p>
      <p>But you still need them, so we help your dreams come true:</p>
    </svelte:fragment>

    <p>
      <strong>add your goals.</strong><br />
      They can be specific like "buy a house", or more sophisticated like "save for the retirement".
    </p>
    <p>
      <strong>get an ETA.</strong><br />
      Get actionable recommendations for cutting expenses, getting a safe loan and other ideas — all
      to meet your goal.
    </p>
    <p>we launch the confetti when the goal is finished. We really do.</p>
  </SingleFeature>
</div>

<style lang="scss">
  hr {
    margin: 4em 0;
    @include mq($until: tablet) {
      display: none;
    }
  }

  .last {
    margin-bottom: 4em;
  }

  .boring {
    text-emphasis: '😴';
  }
  .worst {
    text-emphasis: '😡';
  }
</style>
