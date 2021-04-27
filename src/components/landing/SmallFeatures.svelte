<script>
  const smallFeatures = [
    '∞ transactions and categories',
    '∞ wallets',
    '∞ wallet participants',
    'all the platforms: iOS, Android, Mac, Windows, Web',
  ];
</script>

<p class="also">what goes without saying:</p>
<ul>
  {#each smallFeatures as text}
    <li>{text}</li>
  {/each}
</ul>

<style lang="scss">
  .also {
    font-size: 80%;
    font-weight: bold;
    text-align: center;
    margin-bottom: 2em;
  }

  ul {
    display: flex;
    place-content: center;
    flex-wrap: wrap;

    font-size: 70%;
    text-align: center;

    li:not(:last-child):after {
      content: '·';
      margin: 0 1em;
    }
  }
</style>
