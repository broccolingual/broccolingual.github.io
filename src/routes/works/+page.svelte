<script>
  import sc_turing_complete from "$lib/assets/works/turing-complete.png";
  import sc_twitch_watchparty from "$lib/assets/works/twitch-watchparty.png";
  import sc_rustui from "$lib/assets/works/rustui.png";
  import background from "$lib/assets/background.png";

  const items = [
    {
      title: "Rustui",
      description: "Rust製のLinux向けTUIライブラリ",
      link: "https://crates.io/crates/rustui/",
      img: sc_rustui,
      tags: ["Rust"],
    },
    {
      title: "rcc",
      description: "Rust製のCコンパイラ",
      link: "https://github.com/broccolingual/rcc/",
      img: background,
      tags: ["Rust", "C"],
    },
    {
      title: "VHDL Test Generator",
      description: "VHDLのテストベンチを自動生成するツール",
      link: "https://github.com/broccolingual/vhdl-test-generator/",
      img: background,
      tags: ["Golang", "VHDL"],
    },
    {
      title: "Turing Complete Guide",
      description: "Turing Completeの非公式ガイド",
      link: "https://rococo-brioche-c96086.netlify.app/",
      img: sc_turing_complete,
      tags: ["JavaScript"],
    },
    {
      title: "Twitch Watchparty",
      description: "Twitchの配信を2窓で楽しむためのアプリ",
      link: "https://naughty-mccarthy-e6ef3c.netlify.app/",
      img: sc_twitch_watchparty,
      tags: ["JavaScript"],
    },
  ];

  let selectedTags = [];

  $: allTags = [...new Set(items.flatMap(i => i.tags))];

  $: filteredItems = items.filter(item => {
    return selectedTags.length === 0 ||
      selectedTags.every(tag => item.tags.includes(tag));
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
  <title>Broccolingual | Works</title>
  <meta name="description" content="Broccolingual's works" />
</svelte:head>

<section>
  <h1>Works</h1>
  <p>Projects I've worked on.</p>
  <div class="stats">
    <span class="stat">{filteredItems.length} / {items.length} projects</span>
    <span class="stat-divider"></span>
    <span class="stat">{allTags.length} tags</span>
  </div>
</section>

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

{#if filteredItems.length === 0}
  <p class="no-results">No projects found.</p>
{/if}

<div class="container">
  {#each filteredItems as item}
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      class="item">
      <div class="thumbnail">
        <img src={item.img} alt={item.title}>
      </div>
      <div class="desc">
        <h2>{item.title}<span class="arrow">&#8599;</span></h2>
        <p>{item.description}</p>
        <ul class="tags">
          {#each item.tags as tag}
            <li>{tag}</li>
          {/each}
        </ul>
      </div>
    </a>
  {/each}
</div>

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

  ul.tag-filters {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-sm);
    margin-bottom: var(--space-xl);
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

  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 280px;
    gap: var(--space-md);
  }

  .item {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-lg);
    overflow: hidden;
    background: var(--surface);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    transition: border-color var(--transition-base), transform var(--transition-base);
  }

  .item:hover {
    border-color: rgba(255, 255, 255, 0.18);
    transform: translateY(-2px);
  }

  .thumbnail {
    flex: 1;
    overflow: hidden;
  }

  .thumbnail img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-slow), opacity var(--transition-base);
  }

  .item:hover .thumbnail img {
    transform: scale(1.03);
    opacity: 0.85;
  }

  .desc {
    padding: var(--space-lg);
    border-top: 1px solid var(--glass-border);
  }

  .desc h2 {
    font-size: 15px;
    font-weight: 500;
    color: var(--text-primary);
    margin-bottom: var(--space-xs);
    display: flex;
    align-items: center;
    gap: var(--space-sm);
  }

  .desc h2 .arrow {
    font-size: 13px;
    color: var(--text-muted);
    opacity: 0;
    transform: translate(-4px, 4px);
    transition: opacity var(--transition-base), transform var(--transition-base);
  }

  .item:hover .desc h2 .arrow {
    opacity: 1;
    transform: translate(0, 0);
  }

  .desc p {
    font-size: 12px;
    color: var(--text-muted);
    line-height: 1.5;
  }

  ul.tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-xs);
    margin-top: var(--space-sm);
  }

  ul.tags > li {
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
    padding: 1px var(--space-sm);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-sm);
  }

  @media (max-width: 1024px) {
    .container {
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: 260px;
    }

    section h1 {
      font-size: 24px;
    }
  }

  @media (max-width: 768px) {
    section {
      margin-bottom: var(--space-xl);
    }

    section h1 {
      font-size: 22px;
    }

    section p {
      font-size: 13px;
    }

    .stat {
      font-size: 11px;
    }

    ul.tag-filters {
      margin-bottom: var(--space-lg);
    }

    .tag-btn {
      font-size: 10px;
    }

    .no-results {
      font-size: 12px;
    }

    .container {
      grid-template-columns: 1fr;
      grid-auto-rows: 240px;
      gap: var(--space-md);
    }

    .item {
      border-radius: var(--radius-md);
    }

    .desc {
      padding: var(--space-md);
    }

    .desc h2 {
      font-size: 14px;
    }

    .desc p {
      font-size: 11px;
    }
  }
</style>
