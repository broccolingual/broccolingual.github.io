<script>
  import sc_turing_complete from "$lib/assets/works/turing-complete.png";
  import sc_twitch_watchparty from "$lib/assets/works/twitch-watchparty.png";
  import sc_rustui from "$lib/assets/works/rustui.png";
</script>

<svelte:head>
  <title>Broccolingual | Works</title>
  <meta name="description" content="Broccolingual's works" />
</svelte:head>

<div class="container">
  <div class="item">
    <div class="desc">
      <h2>Rustui</h2>
      <p>Rust製のLinux向けTUIライブラリ</p>
    </div>
    <a
      href="https://crates.io/crates/rustui/"
      target="_blank"
      rel="noopener noreferrer">
      <img src={sc_rustui} alt="">
    </a>
  </div>
  <div class="item">
    <div class="desc">
      <h2>Turing Complete Guide</h2>
      <p>Turing Completeの非公式ガイド</p>
    </div>
    <a
      href="https://rococo-brioche-c96086.netlify.app/"
      target="_blank"
      rel="noopener noreferrer">
      <img src={sc_turing_complete} alt="">
    </a>
  </div>
  <div class="item">
    <div class="desc">
      <h2>Twitch Watchparty</h2>
      <p>Twitchの配信を2窓で楽しむためのアプリ</p>
    </div>
    <a
      href="https://naughty-mccarthy-e6ef3c.netlify.app/"
      target="_blank"
      rel="noopener noreferrer">
      <img src={sc_twitch_watchparty} alt="">
    </a>
  </div>
  <div class="item">
    <div class="desc">
      <h2>VHDL Test Generator</h2>
      <p>VHDLのテストベンチを自動生成するツール</p>
    </div>
    <a
      href="https://github.com/broccolingual/vhdl-test-generator/"
      target="_blank"
      rel="noopener noreferrer">
      <img src="" alt="">
    </a>
  </div>
  <div class="item">
    <div class="desc">
      <h2>I'm working on...</h2>
      <p>...</p>
    </div>
    <a
      href="/"
      target="_blank"
      rel="noopener noreferrer">
      <img src="" alt="">
    </a>
  </div>
  <div class="item">
    <div class="desc">
      <h2>I'm working on...</h2>
      <p>...</p>
    </div>
    <a
      href="/"
      target="_blank"
      rel="noopener noreferrer">
      <img src="" alt="">
    </a>
  </div>
  <div class="item">
    <div class="desc">
      <h2>I'm working on...</h2>
      <p>...</p>
    </div>
    <a
      href="/"
      target="_blank"
      rel="noopener noreferrer">
      <img src="" alt="">
    </a>
  </div>
  <div class="item">
    <div class="desc">
      <h2>I'm working on...</h2>
      <p>...</p>
    </div>
    <a
      href="/"
      target="_blank"
      rel="noopener noreferrer">
      <img src="" alt="">
    </a>
  </div>
  <div class="item">
    <div class="desc">
      <h2>I'm working on...</h2>
      <p>...</p>
    </div>
    <a
      href="/"
      target="_blank"
      rel="noopener noreferrer">
      <img src="" alt="">
    </a>
  </div>
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 320px;
    gap: 16px;
  }

  .item {
    background-color: var(--bm-color);
    border-radius: 6px;
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
