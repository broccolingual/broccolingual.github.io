<script>
  import logo from "$lib/assets/logo.png";
</script>

<svelte:head>
  <title>Broccolingual | Profile</title>
  <meta name="description" content="Broccolingual's profile page" />
</svelte:head>

<div class="container">
  <div class="profile">
    <div class="logo">
      <img src={logo} alt="broccolingual's logo" />
    </div>
    <div class="info">
      <h1>Broccolingual</h1>
      <p class="bio">No curiosity, No life.</p>
      <div class="meta">
        <p>
          <span class="material-icons">location_on</span>Osaka, Japan
        </p>
        <p>
          <span class="material-icons">school</span>Graduate Student, Computer
          Science dept.
        </p>
        <p>
          <span class="material-icons">person</span>Embedded Systems / Digital Circuit Design / Machine Learning
        </p>
      </div>
    </div>
  </div>

  <div class="skills">
    <div class="skill-group">
      <h3>Languages</h3>
      <p>Python, Rust, Go, C, C#, Java, TypeScript, Vue.js, Svelte</p>
    </div>
    <div class="divider"></div>
    <div class="skill-group">
      <h3>Tools / Services</h3>
      <p>Git, Docker, Supabase, Heroku, Firebase, Github Actions</p>
    </div>
  </div>

  <div class="interests">
    <h3>Interests</h3>
    <ul>
      <li>ランニング</li>
      <li>UKロック</li>
      <li>自作キーボード</li>
      <li>旅行</li>
      <li>ストラテジーゲーム</li>
    </ul>
  </div>

  <div class="social">
    <ul>
      <li>
        <a
          href="https://github.com/broccolingual"
          target="_blank"
          rel="noopener noreferrer"
          ><i class="fab fa-github"></i><span>Github</span></a
        >
      </li>
      <li>
        <a
          href="https://qiita.com/Broccolingual"
          target="_blank"
          rel="noopener noreferrer"
          ><i class="icon-qiita"></i><span>Qiita</span></a
        >
      </li>
      <li>
        <a
          href="https://github.com/broccolingual/dotfiles"
          target="_blank"
          rel="noopener noreferrer"
          ><i class="fas fa-code"></i><span>dotfiles</span></a
        >
      </li>
    </ul>
  </div>
</div>

<style>
  .container {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--space-3xl);
  }

  .profile {
    display: flex;
    align-items: center;
    gap: var(--space-2xl);
  }

  .logo {
    width: 120px;
    height: 120px;
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-full);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    transition: border-color var(--transition-base), transform var(--transition-base);
  }

  .logo > img {
    width: 80%;
    height: 80%;
    border-radius: var(--radius-full);
  }

  .logo:hover {
    border-color: var(--accent);
    transform: scale(1.05);
  }

  .info h1 {
    font-size: 36px;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--space-sm);
    letter-spacing: -0.02em;
  }

  .info .bio {
    font-size: 13px;
    color: var(--text-muted);
    line-height: 1.6;
    margin-bottom: var(--space-lg);
  }

  .meta p {
    font-size: 14px;
    color: var(--text-secondary);
    margin-bottom: var(--space-xs);
    display: flex;
    align-items: center;
  }

  .meta p > span.material-icons {
    margin-right: var(--space-md);
    color: var(--text-muted);
    font-size: 16px;
  }

  .skills {
    display: flex;
    align-items: center;
    gap: var(--space-2xl);
    padding: var(--space-xl) var(--space-2xl);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-lg);
    background: var(--surface);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    transition: border-color var(--transition-base);
  }

  .skills:hover {
    border-color: rgba(255, 255, 255, 0.18);
  }

  .divider {
    width: 1px;
    height: 48px;
    background: var(--glass-border);
    flex-shrink: 0;
  }

  .skill-group h3 {
    font-size: 11px;
    font-weight: 500;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: var(--space-sm);
  }

  .skill-group p {
    font-size: 14px;
    color: var(--text-secondary);
    line-height: 1.6;
  }

  .interests {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-md);
  }

  .interests h3 {
    font-size: 11px;
    font-weight: 500;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .interests ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--space-sm);
  }

  .interests ul li {
    font-size: 12px;
    color: var(--text-secondary);
    padding: var(--space-xs) var(--space-md);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-md);
    transition: border-color var(--transition-base), color var(--transition-base);
  }

  .interests ul li:hover {
    border-color: rgba(255, 255, 255, 0.2);
    color: var(--text-primary);
  }

  .social ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--space-xs);
  }

  .social ul li a {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    color: var(--text-muted);
    font-size: 13px;
    padding: var(--space-sm) var(--space-lg);
    border-radius: var(--radius-md);
    transition: color var(--transition-base), background var(--transition-base);
  }

  .social ul li a:hover {
    color: var(--text-primary);
    background: rgba(255, 255, 255, 0.08);
  }

  .social ul li a i {
    font-size: 16px;
  }

  .social ul li a i.icon-qiita::before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    background-image: url("../lib/assets/qiita-white-icon.png");
    background-size: contain;
    background-repeat: no-repeat;
    vertical-align: middle;
    opacity: 0.65;
    transition: opacity var(--transition-base);
  }

  .social ul li a:hover i.icon-qiita::before {
    opacity: 1;
  }

  @media (max-width: 768px) {
    .container {
      gap: var(--space-2xl);
    }

    .profile {
      flex-direction: column;
      text-align: center;
    }

    .logo {
      width: 100px;
      height: 100px;
    }

    .info h1 {
      font-size: 26px;
    }

    .meta p {
      font-size: 13px;
      justify-content: center;
    }

    .meta p > span.material-icons {
      margin-right: var(--space-sm);
      font-size: 15px;
    }

    .skills {
      flex-direction: column;
      gap: var(--space-lg);
      padding: var(--space-lg);
      text-align: center;
    }

    .divider {
      width: 48px;
      height: 1px;
    }

    .skill-group h3 {
      font-size: 11px;
    }

    .skill-group p {
      font-size: 12px;
    }

    .info .bio {
      font-size: 12px;
      text-align: center;
    }

    .interests ul li {
      font-size: 11px;
    }

    .social ul {
      flex-wrap: wrap;
      gap: var(--space-xs);
    }

    .social ul li a {
      font-size: 12px;
      padding: var(--space-sm) var(--space-md);
    }
  }
</style>
