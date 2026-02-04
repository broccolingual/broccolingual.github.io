<script>
  import { page } from '$app/stores';
  export let data
  const { Content, meta } = data
  $: slug = $page.params.slug;
  $: pageUrl = `https://www.broccolingual.com/blog/${slug}`;
  $: description = meta.description || `${meta.title} - broccolingual's tech blog`;
</script>

<svelte:head>
  <title>{meta.title} | Broccolingual</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={pageUrl} />
  <meta property="og:type" content="article" />
  <meta property="og:title" content="{meta.title} | Broccolingual" />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={pageUrl} />
  <meta property="og:image" content="https://www.broccolingual.com/favicon.png" />
  <meta property="article:published_time" content={meta.date} />
  {#each meta.tags as tag}
    <meta property="article:tag" content={tag} />
  {/each}
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="{meta.title} | Broccolingual" />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content="https://www.broccolingual.com/favicon.png" />
  {@html `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": meta.title,
    "datePublished": meta.date,
    "description": description,
    "url": pageUrl,
    "author": {
      "@type": "Person",
      "name": "Broccolingual",
      "url": "https://www.broccolingual.com"
    },
    "keywords": meta.tags.join(", ")
  })}</script>`}
</svelte:head>

<a class="go-back" href="/blog">
  <span class="arrow">&#8592;</span>
  <span>Back</span>
</a>

<article>
  <div class="meta">
    <h1>{meta.title}</h1>
    <p>{meta.date}</p>
    <ul class="tags">
      {#each meta.tags as tag}
        <li>{tag}</li>
      {/each}
    </ul>
  </div>
  <div class="article-content">
    <Content />
  </div>
</article>

<style>
  a.go-back {
    display: inline-flex;
    align-items: center;
    gap: var(--space-sm);
    margin-bottom: var(--space-lg);
    color: var(--text-muted);
    font-size: 13px;
    padding: var(--space-xs) 0;
    transition: color var(--transition-base);
  }

  a.go-back .arrow {
    transition: transform var(--transition-base);
  }

  a.go-back:hover {
    color: var(--text-primary);
  }

  a.go-back:hover .arrow {
    transform: translateX(-3px);
  }

  article {
    width: 100%;
    min-height: 100%;
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-lg);
    overflow: hidden;
    background: var(--surface);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }

  .meta {
    width: 100%;
    padding: var(--space-2xl);
    border-bottom: 1px solid var(--glass-border);
  }

  .article-content {
    width: 100%;
    padding: var(--space-2xl);
  }

  .meta h1 {
    font-size: 26px;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--space-sm);
    line-height: 1.4;
  }

  .meta p {
    font-size: 12px;
    color: var(--text-muted);
    margin-bottom: var(--space-md);
  }

  .meta ul.tags {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-sm);
  }

  .meta ul.tags > li {
    font-size: 11px;
    font-weight: 400;
    color: var(--text-muted);
    padding: 2px var(--space-sm);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-sm);
  }

  @media (max-width: 768px) {
    a.go-back {
      margin-bottom: var(--space-md);
      font-size: 12px;
    }

    article {
      border-radius: var(--radius-md);
    }

    .meta {
      padding: var(--space-lg);
    }

    .article-content {
      padding: var(--space-lg);
    }

    .meta h1 {
      font-size: 20px;
    }

    .meta p {
      font-size: 11px;
    }

    .meta ul.tags > li {
      font-size: 10px;
    }
  }
</style>
