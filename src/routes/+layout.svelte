<script>
  import { page } from '$app/stores';
  import '../app.css';

  const menuItems = [
    { name: 'Profile', link: '/' },
    { name: 'Works', link: '/works' },
    { name: 'Blog', link: '/blog' },
  ];
</script>

<main>
  <div class="container">
    <nav>
      <ul>
        {#each menuItems as item}
          <li class="{ $page.url.pathname === item.link ? 'selected' : '' }">
            <a href={item.link}>
              <span class="label">{item.name}</span>
              <span class="line"></span>
            </a>
          </li>
        {/each}
      </ul>
    </nav>
    <div class="content-wrapper">
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");

  :global(*) {
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(:root) {
    --bg: #0a0a0a;
    --surface: rgba(14, 14, 14, 0.75);
    --surface-solid: #0e0e0e;
    --surface-hover: rgba(20, 20, 20, 0.8);
    --glass: rgba(10, 10, 10, 0.65);
    --glass-border: rgba(255, 255, 255, 0.06);
    --text-primary: #e0e0e0;
    --text-secondary: #999;
    --text-muted: #5a5a5a;
    --accent: #c8b8a0;
    --border-color: rgba(255, 255, 255, 0.08);
    --border-subtle: rgba(255, 255, 255, 0.04);

    --space-xs: 4px;
    --space-sm: 8px;
    --space-md: 12px;
    --space-lg: 16px;
    --space-xl: 24px;
    --space-2xl: 32px;
    --space-3xl: 48px;

    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-full: 50%;

    --transition-fast: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-base: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  :global(body) {
    background-color: var(--bg);
    overflow: hidden;
  }

  :global(body)::before {
    content: "";
    position: fixed;
    inset: 0;
    background-image: url("../lib/assets/background.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -10;
    filter: blur(4px) brightness(0.35) saturate(0.6);
    transform: scale(1.03);
    pointer-events: none;
  }

  :global(li) {
    list-style: none;
  }

  :global(a) {
    text-decoration: none;
    color: var(--text-primary);
  }

  :global(p) {
    color: var(--text-secondary);
  }

  :global(h1), :global(h2), :global(h3) {
    letter-spacing: -0.02em;
    color: var(--text-primary);
  }

  :global(span.material-icons) {
    vertical-align: middle;
  }

  :global(::selection) {
    background: rgba(200, 184, 160, 0.2);
    color: var(--text-primary);
  }

  main {
    width: 100%;
    height: 100vh;
    padding: var(--space-xl);
    overflow: hidden;
  }

  main .container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  nav {
    width: 260px;
    height: 100%;
    padding: var(--space-lg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex-shrink: 0;
  }

  nav ul {
    width: 100%;
    padding-left: var(--space-2xl);
  }

  nav ul li {
    margin-bottom: var(--space-3xl);
  }

  nav ul li a {
    display: flex;
    align-items: center;
    gap: var(--space-lg);
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
    transition: color var(--transition-base);
    position: relative;
    padding: var(--space-xs) 0;
  }

  nav ul li a .line {
    display: block;
    width: 0;
    height: 1px;
    background: var(--text-primary);
    transition: width var(--transition-slow);
    flex-shrink: 0;
  }

  nav ul li a:hover {
    color: var(--text-primary);
  }

  nav ul li a:hover .line {
    width: 40px;
  }

  nav ul li.selected a {
    color: var(--text-primary);
    font-weight: 500;
  }

  nav ul li.selected a .line {
    width: 40px;
    background: var(--accent);
  }

  .content-wrapper {
    width: 100%;
    height: 100%;
    background: var(--glass);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-lg);
    overflow: hidden;
  }

  .content {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: var(--space-xl) var(--space-3xl);
  }

  .content::-webkit-scrollbar {
    width: 4px;
  }

  .content::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-sm);
  }

  .content::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255, 255, 0.18);
  }

  .content::-webkit-scrollbar-track {
    background-color: transparent;
  }

  @media (max-width: 768px) {
    main {
      padding: var(--space-sm);
    }

    main .container {
      flex-direction: column;
      gap: var(--space-sm);
    }

    nav {
      width: 100%;
      height: auto;
      padding: var(--space-sm) var(--space-lg);
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    nav ul {
      padding-left: 0;
      display: flex;
      gap: var(--space-xl);
      justify-content: center;
    }

    nav ul li {
      margin-bottom: 0;
    }

    nav ul li a {
      font-size: 13px;
      letter-spacing: 0.06em;
      flex-direction: column;
      gap: var(--space-xs);
    }

    nav ul li a .line {
      width: 0;
    }

    nav ul li a:hover .line {
      width: 24px;
    }

    nav ul li.selected a .line {
      width: 24px;
    }

    .content-wrapper {
      border-radius: var(--radius-md);
    }

    .content {
      padding: var(--space-md);
    }

    .content::-webkit-scrollbar {
      width: 3px;
    }
  }
</style>
