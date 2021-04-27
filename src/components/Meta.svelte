<script>
  import previewImagePath from '$static/img/preview.png';

  export let title = '',
    description = '',
    contentType = 'article',
    image = previewImagePath;

  const siteHost = 'https://safeapps.io';

  $: imageFullPath = siteHost + image;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="title" content={title} />
  <meta name="twitter:title" content={title} />
  <meta property="og:title" content={title} />

  <meta name="twitter:site" content={siteHost} />
  <meta property="og:site_name" content={siteHost} />
  <meta itemprop="name" content={siteHost} />

  <meta name="description" content={description} />
  <meta name="twitter:description" content={description} />
  <meta property="og:description" content={description} />
  <meta itemprop="description" content={description} />

  <meta name="twitter:image" content={imageFullPath} />
  <meta property="og:image" content={imageFullPath} />
  <meta itemprop="image" content={imageFullPath} />

  <meta property="og:type" content={contentType} />
  <meta property="og:locale" content="en" />
</svelte:head>
