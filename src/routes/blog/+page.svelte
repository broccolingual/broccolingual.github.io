<script>
  export let data;
  const { posts } = data;
</script>

<svelte:head>
  <title>Broccolingual | Blog</title>
  <meta name="description" content="Broccolingual's tech blog" />
</svelte:head>

<section>
  <h1>Blog</h1>
  <p>Insights and tutorials on various topics.</p>
</section>

<ul class="articles">
  {#each posts as post}
    <li>
      <a href={`/blog/${post.slug}`} class="item">
        <div class="item-header">
          <h3>{post.title}</h3>
          <span class="arrow">&#8594;</span>
        </div>
        <p class="date">{post.date}</p>
        <ul class="tags">
          {#each post.tags as tag}
            <li>{tag}</li>
          {/each}
        </ul>
      </a>
    </li>
  {/each}
</ul>

<style>
  section {
    margin-bottom: var(--space-2xl);
  }

  section h1 {
    font-size: 28px;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--space-sm);
  }

  section p {
    color: var(--text-muted);
    font-size: 14px;
  }

  ul.articles {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }

  .item {
    display: block;
    padding: var(--space-lg) var(--space-xl);
    border-radius: var(--radius-md);
    border: 1px solid var(--glass-border);
    background: transparent;
    transition: background var(--transition-base), border-color var(--transition-base);
  }

  .item:hover {
    background: var(--surface);
    border-color: rgba(255, 255, 255, 0.12);
  }

  .item-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--space-xs);
  }

  .item-header h3 {
    font-size: 16px;
    font-weight: 500;
    color: var(--text-primary);
    transition: color var(--transition-base);
  }

  .item-header .arrow {
    color: var(--text-muted);
    font-size: 16px;
    opacity: 0;
    transform: translateX(-8px);
    transition: opacity var(--transition-base), transform var(--transition-base);
  }

  .item:hover .item-header .arrow {
    opacity: 1;
    transform: translateX(0);
  }

  .date {
    font-size: 12px;
    color: var(--text-muted);
    margin-bottom: var(--space-sm);
  }

  ul.tags {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-sm);
  }

  ul.tags > li {
    font-size: 11px;
    font-weight: 400;
    color: var(--text-muted);
    padding: 2px var(--space-sm);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-sm);
  }

  @media (max-width: 768px) {
    section {
      margin-bottom: var(--space-xl);
    }

    section h1 {
      font-size: 24px;
    }

    section p {
      font-size: 13px;
    }

    ul.articles {
      gap: var(--space-sm);
    }

    .item {
      padding: var(--space-md) var(--space-lg);
    }

    .item-header h3 {
      font-size: 15px;
    }

    .date {
      font-size: 11px;
    }

    ul.tags > li {
      font-size: 10px;
    }
  }
</style>
