<script>
</script>

<svelte:head>
  <title>Broccolingual | History</title>
  <meta name="description" content="Broccolingual's history page" />
</svelte:head>

<div class="container">
  <h1>HISTORY</h1>
  <p>Coming soon...</p>
</div>

<style>
  .container {
    width: 100%;
    min-height: 100%;
    background-color: var(--bm-color);
    border-radius: 6px;
    padding: 16px 24px;
  }

  .container > h1 {
    color: var(--highlight-color);
    font-size: 36px;
    letter-spacing: 2px;
  }

  .container > p {
    color: var(--bg-color);
  }

  @media (max-width: 768px) {
    .container {
      padding: 12px 16px;
    }

    .container > h1 {
      font-size: 28px;
    }
  }
</style>
