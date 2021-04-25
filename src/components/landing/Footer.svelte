<script>
  import { about, pricing, terms, howItWorks, forum } from '$core/routes';

  const leftLinks = [
      [about, 'about'],
      [pricing, 'pricing'],
      [howItWorks, 'how it works'],
      [forum, 'forum'],
    ],
    rightLinks = [
      [terms, 'terms of use'],
      ['https://github.com/safeapps-io', 'open source'],
    ];
</script>

<footer>
  <div class="columns">
    <div class="column is-9">
      <div class="columns">
        <div class="column is-4">
          {#each leftLinks as [url, text]}
            <div>
              <a href={url}>{text}</a>
            </div>
          {/each}
        </div>
        <div class="column is-4">
          {#each rightLinks as [url, text]}
            <div>
              <a href={url}>{text}</a>
            </div>
          {/each}
        </div>
      </div>
    </div>
    <div class="column is-3 copy">
      <p>
        made by <a href="https://dkzlv.com/" target="_blank" rel="noopener">@dkzlv</a>
      </p>
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
</style>
