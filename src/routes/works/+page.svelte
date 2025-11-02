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
  <h1>My Works</h1>
  <p>Here are some of the projects I've worked on:</p>
</section>

<div class="container">
  {#each items as item}
    <div class="item">
      <div class="desc">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer">
        <img src={item.img} alt="">
      </a>
    </div>
  {/each}
</div>

<style>
  section {
    margin-bottom: 24px;
    text-align: center;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 300px;
    gap: 12px;
  }

  .item {
    background-color: var(--bm-color);
    border-radius: 12px;
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
  }

  .item > .desc > h2 {
    color: var(--bg-color);
  }

  .item > .desc > p {
    color: var(--bg-color);
  }

  .item > a {
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .item > a > img {
    display: block;
    width: 100%;
    height: 100%;
    background-color: var(--bg-color);
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .item > a > img:hover {
    transform: scale(1.1);
    transition: transform 0.5s ease;
  }

  @media (max-width: 1024px) {
    .container {
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: 260px;
      gap: 10px;
    }
  }

  @media (max-width: 768px) {
    .container {
      grid-template-columns: repeat(1, 1fr);
      grid-auto-rows: 220px;
      gap: 8px;
    }

    .item {
      padding: 8px 12px;
    }

    .item > .desc > h2 {
      font-size: 20px;
    }

    .item > .desc > p {
      font-size: 14px;
    }
  }
</style>
