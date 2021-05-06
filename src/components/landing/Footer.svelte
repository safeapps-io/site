<script>
  import { about, terms, forum, privacy, cookie } from '$core/routes';

  const links = [
    [about, 'about'],
    [forum, 'forum'],
    [terms, 'terms of service'],
    [privacy, 'privacy policy'],
    [cookie, 'cookie policy'],
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

    a {
      padding: 1em;
    }

    li:not(:last-child):after {
      content: '·';
    }
  }
</style>
