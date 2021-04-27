<script>
  import { about, terms, forum } from '$core/routes';

  const links = [
    [about, 'about'],
    [forum, 'forum'],
    [terms, 'terms of use'],
    ['https://github.com/safeapps-io', 'github'],
  ];
</script>

<footer>
  <div class="columns">
    <ul class="column is-9">
      {#each links as [url, text]}
        <li><a href={url}>{text}</a></li>
      {/each}
    </ul>
    <div class="column is-3 copy">
      made by <a href="https://dkzlv.com/" target="_blank" rel="noopener">@dkzlv</a>
    </div>
  </div>
</footer>

<style lang="scss">
  footer {
    padding-bottom: 2em;
  }

  .copy {
    // .columns is just display:block on mobile devices, so we move the copy up by
    // setting negative order when .columns is flex — on desktops
    order: -1;
  }

  ul {
    display: flex;
    flex-wrap: wrap;

    li:not(:last-child):after {
      content: '·';
      margin: 0 1em;
    }
  }
</style>
