<script>
  export let data;
  const { posts } = data;

  let searchQuery = '';
  let selectedTags = [];

  $: allTags = [...new Set(posts.flatMap(p => p.tags))];

  $: filteredPosts = posts.filter(post => {
    const matchesSearch = !searchQuery ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.description && post.description.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesTags = selectedTags.length === 0 ||
      selectedTags.every(tag => post.tags.includes(tag));
    return matchesSearch && matchesTags;
  });

  function toggleTag(tag) {
    if (selectedTags.includes(tag)) {
      selectedTags = selectedTags.filter(t => t !== tag);
    } else {
      selectedTags = [...selectedTags, tag];
    }
  }
</script>

<svelte:head>
  <title>Broccolingual | Blog</title>
  <meta name="description" content="Tech blog by Broccolingual — articles and tutorials on embedded systems, Rust, machine learning, Linux, and developer tools." />
  <link rel="canonical" href="https://www.broccolingual.com/blog" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Broccolingual | Blog" />
  <meta property="og:description" content="Tech blog by Broccolingual — articles and tutorials on embedded systems, Rust, machine learning, Linux, and developer tools." />
  <meta property="og:url" content="https://www.broccolingual.com/blog" />
  <meta property="og:image" content="https://www.broccolingual.com/favicon.png" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Broccolingual | Blog" />
  <meta name="twitter:description" content="Tech blog by Broccolingual — articles and tutorials on embedded systems, Rust, machine learning, Linux, and developer tools." />
  <meta name="twitter:image" content="https://www.broccolingual.com/favicon.png" />
  {@html `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Broccolingual | Blog",
    "description": "Tech blog by Broccolingual — articles and tutorials on embedded systems, Rust, machine learning, Linux, and developer tools.",
    "url": "https://www.broccolingual.com/blog",
    "author": {
      "@type": "Person",
      "name": "Broccolingual",
      "url": "https://www.broccolingual.com"
    }
  })}</script>`}
</svelte:head>

<section>
  <h1>Blog</h1>
  <p>Insights and tutorials on various topics.</p>
  <div class="stats">
    <span class="stat">{filteredPosts.length} / {posts.length} posts</span>
    <span class="stat-divider"></span>
    <span class="stat">{allTags.length} tags</span>
  </div>
</section>

<div class="filters">
  <div class="search-bar">
    <span class="material-icons search-icon">search</span>
    <input type="text" bind:value={searchQuery} placeholder="Search posts..." />
  </div>
  <ul class="tag-filters">
    {#each allTags as tag}
      <li>
        <button
          class="tag-btn"
          class:active={selectedTags.includes(tag)}
          on:click={() => toggleTag(tag)}
        >{tag}</button>
      </li>
    {/each}
  </ul>
</div>

{#if filteredPosts.length === 0}
  <p class="no-results">No posts found.</p>
{/if}

<ul class="articles">
  {#each filteredPosts as post}
    <li>
      <a href={`/blog/${post.slug}`} class="item">
        <div class="item-header">
          <h3>{post.title}</h3>
          <span class="arrow">&#8594;</span>
        </div>
        <p class="date">{post.date}</p>
        {#if post.description}
          <p class="description">{post.description}</p>
        {/if}
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

  .stats {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    margin-top: var(--space-md);
  }

  .stat {
    font-size: 12px;
    color: var(--text-muted);
    letter-spacing: 0.02em;
  }

  .stat-divider {
    width: 1px;
    height: 12px;
    background: var(--glass-border);
  }

  .description {
    font-size: 13px;
    color: var(--text-muted);
    line-height: 1.5;
    margin-bottom: var(--space-sm);
  }

  .filters {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    margin-bottom: var(--space-xl);
  }

  .search-bar {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-sm) var(--space-lg);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-md);
    transition: border-color var(--transition-base);
  }

  .search-bar:focus-within {
    border-color: rgba(255, 255, 255, 0.2);
  }

  .search-icon {
    font-size: 16px;
    color: var(--text-muted);
  }

  .search-bar input {
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    color: var(--text-primary);
    font-size: 13px;
    font-family: inherit;
  }

  .search-bar input::placeholder {
    color: var(--text-muted);
  }

  ul.tag-filters {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-sm);
  }

  .tag-btn {
    font-size: 11px;
    font-weight: 400;
    font-family: inherit;
    color: var(--text-muted);
    padding: 2px var(--space-sm);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-sm);
    background: transparent;
    cursor: pointer;
    transition: color var(--transition-base), border-color var(--transition-base), background var(--transition-base);
  }

  .tag-btn:hover {
    color: var(--text-secondary);
    border-color: rgba(255, 255, 255, 0.18);
  }

  .tag-btn.active {
    color: var(--text-primary);
    border-color: var(--accent);
    background: rgba(212, 196, 168, 0.1);
  }

  .no-results {
    text-align: center;
    color: var(--text-muted);
    font-size: 13px;
    padding: var(--space-2xl) 0;
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
    border-color: rgba(255, 255, 255, 0.18);
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

    .stat {
      font-size: 11px;
    }

    .description {
      font-size: 12px;
    }

    .filters {
      gap: var(--space-sm);
      margin-bottom: var(--space-lg);
    }

    .search-bar input {
      font-size: 12px;
    }

    .tag-btn {
      font-size: 10px;
    }

    .no-results {
      font-size: 12px;
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
