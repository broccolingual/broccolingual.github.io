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
    },
    {
      title: "rcc",
      description: "Rust製のCコンパイラ",
      link: "https://github.com/broccolingual/rcc/",
      img: background,
    },
    {
      title: "VHDL Test Generator",
      description: "VHDLのテストベンチを自動生成するツール",
      link: "https://github.com/broccolingual/vhdl-test-generator/",
      img: background,
    },
    {
      title: "Turing Complete Guide",
      description: "Turing Completeの非公式ガイド",
      link: "https://rococo-brioche-c96086.netlify.app/",
      img: sc_turing_complete,
    },
    {
      title: "Twitch Watchparty",
      description: "Twitchの配信を2窓で楽しむためのアプリ",
      link: "https://naughty-mccarthy-e6ef3c.netlify.app/",
      img: sc_twitch_watchparty,
    },
  ];
</script>

<svelte:head>
  <title>Broccolingual | Works</title>
  <meta name="description" content="Broccolingual's works" />
</svelte:head>

<section>
  <h1>Works</h1>
  <p>Projects I've worked on.</p>
</section>

<div class="container">
  {#each items as item}
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
    border-color: rgba(255, 255, 255, 0.12);
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
