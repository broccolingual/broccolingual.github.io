<script>
</script>

<svelte:head>
  <title>Broccolingual | 404 Not Found</title>
  <meta name="description" content="404" />
</svelte:head>

<div class="container">
  <div class="message">
    <span class="error-code">404</span>
    <h1>Page Not Found</h1>
    <p>Sorry, the page you're looking for doesn't exist or has been moved.</p>
    <a href="/" class="home-link">
      <span class="arrow">&#8592;</span>
      Back to Home
    </a>
  </div>
</div>

<style>
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .message {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: var(--space-2xl);
  }

  .error-code {
    font-size: 80px;
    font-weight: 300;
    color: var(--text-muted);
    line-height: 1;
    margin-bottom: var(--space-lg);
    letter-spacing: 0.1em;
  }

  .message h1 {
    font-size: 24px;
    font-weight: 500;
    color: var(--text-primary);
    margin-bottom: var(--space-md);
  }

  .message p {
    font-size: 14px;
    color: var(--text-muted);
    max-width: 360px;
    line-height: 1.6;
    margin-bottom: var(--space-2xl);
  }

  .home-link {
    display: inline-flex;
    align-items: center;
    gap: var(--space-sm);
    color: var(--text-muted);
    font-size: 13px;
    padding: var(--space-sm) var(--space-lg);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-md);
    transition: color var(--transition-base), border-color var(--transition-base), transform var(--transition-fast);
  }

  .home-link:hover {
    color: var(--text-primary);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateX(-2px);
  }

  .home-link:active {
    transform: translateX(-2px) scale(0.98);
  }

  .home-link .arrow {
    transition: transform var(--transition-base);
  }

  .home-link:hover .arrow {
    transform: translateX(-3px);
  }

  @media (max-width: 768px) {
    .error-code {
      font-size: 60px;
    }

    .message h1 {
      font-size: 20px;
    }

    .message p {
      font-size: 13px;
    }

    .home-link {
      font-size: 12px;
    }
  }
</style>
