<script>
  export let data;
  const { posts } = data;
</script>

<svelte:head>
  <title>Broccolingual | Moments</title>
  <meta name="description" content="Small moments, places, and things worth remembering." />
  <link rel="canonical" href="https://www.broccolingual.com/moments" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Broccolingual | Moments" />
  <meta property="og:description" content="Small moments, places, and things worth remembering." />
  <meta property="og:url" content="https://www.broccolingual.com/moments" />
</svelte:head>

<section class="page-heading">
  <div>
    <h1>Moments</h1>
    <p>Small moments, places, and things worth remembering.</p>
  </div>
  <span class="post-count">{posts.length} moments</span>
</section>

<ul class="moments-grid">
  {#each posts as post (post.slug)}
    <li>
      <article class="moment">
        <div class="photo">
          <img src={post.image} alt={post.alt} loading="lazy" />
        </div>
        <div class="caption">
          <div class="caption-meta">
            <time datetime={post.date}>{post.date}</time>
            {#if post.location}
              <span>{post.location}</span>
            {/if}
          </div>
          <div class="caption-content">
            <svelte:component this={post.Content} />
          </div>
        </div>
      </article>
    </li>
  {/each}
</ul>

<style>
  .page-heading {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: var(--space-lg);
    margin-bottom: var(--space-2xl);
  }

  h1 {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: var(--space-sm);
  }

  .page-heading p,
  .post-count {
    color: var(--text-muted);
    font-size: 14px;
  }

  .post-count {
    white-space: nowrap;
    font-size: 12px;
  }

  .moments-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--space-lg);
  }

  .moment {
    height: 100%;
    overflow: hidden;
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-md);
    background: var(--surface);
  }

  .photo {
    aspect-ratio: 1;
    overflow: hidden;
    background: var(--surface-solid);
  }

  .photo img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-slow);
  }

  .moment:hover .photo img {
    transform: scale(1.035);
  }

  .caption {
    padding: var(--space-lg);
  }

  .caption-meta {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-sm) var(--space-md);
    margin-bottom: var(--space-md);
    color: var(--text-muted);
    font-size: 11px;
    letter-spacing: 0.02em;
  }

  .caption-meta span {
    color: var(--accent);
  }

  .caption-content {
    color: var(--text-secondary);
    font-size: 14px;
    line-height: 1.65;
  }

  :global(.caption-content p) {
    color: var(--text-secondary);
  }

  :global(.caption-content p + p) {
    margin-top: var(--space-sm);
  }

  @media (max-width: 1000px) {
    .moments-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 600px) {
    .page-heading {
      align-items: flex-start;
      margin-bottom: var(--space-xl);
    }

    h1 {
      font-size: 24px;
    }

    .page-heading p {
      font-size: 13px;
    }

    .moments-grid {
      grid-template-columns: 1fr;
      gap: var(--space-lg);
    }
  }
</style>
