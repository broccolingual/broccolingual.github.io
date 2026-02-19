<script>
  import logo from "$lib/assets/logo.png";
</script>

<svelte:head>
  <title>Broccolingual | Profile</title>
  <meta name="description" content="Broccolingual — Embedded Software Engineer based in Osaka. Portfolio & tech blog covering embedded systems, digital circuits, machine learning, and more." />
  <link rel="canonical" href="https://www.broccolingual.com/" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Broccolingual | Profile" />
  <meta property="og:description" content="Broccolingual — Embedded Software Engineer based in Osaka. Portfolio & tech blog covering embedded systems, digital circuits, machine learning, and more." />
  <meta property="og:url" content="https://www.broccolingual.com/" />
  <meta property="og:image" content="https://www.broccolingual.com/favicon.png" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Broccolingual | Profile" />
  <meta name="twitter:description" content="Broccolingual — Embedded Software Engineer based in Osaka. Portfolio & tech blog covering embedded systems, digital circuits, machine learning, and more." />
  <meta name="twitter:image" content="https://www.broccolingual.com/favicon.png" />
  {@html `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Broccolingual",
    "url": "https://www.broccolingual.com",
    "jobTitle": "Software Engineer",
    "address": { "@type": "PostalAddress", "addressLocality": "Osaka", "addressCountry": "JP" },
    "sameAs": [
      "https://github.com/broccolingual",
      "https://qiita.com/Broccolingual"
    ]
  })}</script>`}
</svelte:head>

<div class="container">
  <div class="main-content">
    <div class="left-column">
      <div class="left-inner">
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
              <span class="material-icons">person</span>Embedded Systems / Digital Circuit Design / Machine Learning
            </p>
          </div>
        </div>
      </div>

      <div class="now-learning">
        <h3>Now Learning</h3>
        <ul>
          <li>Rust</li>
        </ul>
      </div>

      <div class="skills-setup">
        <div class="skills">
          <div class="skill-group">
            <h3>Languages</h3>
            <p>Python, Rust, Go, C, C#, Java, TypeScript, Vue.js, Svelte</p>
          </div>
          <div class="skill-group">
            <h3>Tools / Services</h3>
            <p>Git, Docker, Supabase, Heroku, Firebase, Github Actions</p>
          </div>
        </div>

        <div class="dev-setup">
          <h3>Dev Setup</h3>
          <dl>
            <div class="setup-row">
              <dt>OS</dt>
              <dd>Ubuntu</dd>
            </div>
            <div class="setup-row">
              <dt>Editor</dt>
              <dd>VS Code</dd>
            </div>
            <div class="setup-row">
              <dt>Shell</dt>
              <dd>zsh</dd>
            </div>
          </dl>
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
      </div>
    </div>

    <div class="right-column">
      <div class="background">
        <h3>Background</h3>
        <div class="timeline">
        <div class="timeline-item current">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="year">2026 -<span class="badge-now">Now</span></span>
            <h4>Software Engineer</h4>
            <p>Embedded Software Development</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="year">2024 - 2026</span>
            <h4>Graduate School</h4>
            <p>Digital Circuit Design / Image Processing</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="year">2020 - 2024</span>
            <h4>University</h4>
            <p>Computer Science</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="year">2000</span>
            <h4>Born</h4>
            <p>Osaka, Japan</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>

  <div class="bottom-content">
    <div class="social">
      <a href="mailto:broccolingual@gmail.com" class="social-link">
        <i class="fas fa-envelope"></i><span>Mail</span>
      </a>
      <a href="https://github.com/broccolingual" class="social-link" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-github"></i><span>GitHub</span>
      </a>
      <a href="https://qiita.com/Broccolingual" class="social-link" target="_blank" rel="noopener noreferrer">
        <i class="icon-qiita"></i><span>Qiita</span>
      </a>
      <a href="https://github.com/broccolingual/dotfiles" class="social-link" target="_blank" rel="noopener noreferrer">
        <i class="fas fa-code"></i><span>dotfiles</span>
      </a>
    </div>
  </div>
</div>

<style>
  .container {
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: var(--space-lg) var(--space-2xl);
    gap: var(--space-lg);
  }

  .main-content {
    width: 100%;
    max-width: 1400px;
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: var(--space-xl);
    align-items: start;
  }

  .bottom-content {
    width: 100%;
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-md);
  }

  .left-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-xl);
  }

  .left-inner {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-lg);
  }

  .right-column {
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
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

  .skills-setup {
    display: flex;
    gap: var(--space-2xl);
    align-items: flex-start;
    width: 100%;
  }

  .skills {
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
    padding: var(--space-lg) var(--space-3xl);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-lg);
    background: var(--surface);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    transition: border-color var(--transition-base);
    align-self: flex-start;
    width: fit-content;
  }

  .skills:hover {
    border-color: rgba(255, 255, 255, 0.18);
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

  .background {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-lg);
    width: 100%;
  }

  .background > h3 {
    font-size: 11px;
    font-weight: 500;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .timeline {
    display: flex;
    flex-direction: column;
    gap: 0;
    align-items: flex-start;
    width: 100%;
  }

  .timeline-item {
    display: flex;
    align-items: flex-start;
    gap: var(--space-md);
    position: relative;
    padding-bottom: var(--space-xl);
  }

  .timeline-item:last-child {
    padding-bottom: 0;
  }

  .timeline-item:not(:last-child)::after {
    content: '';
    position: absolute;
    left: 4px;
    top: 18px;
    width: 2px;
    height: calc(100% - 10px);
    background: var(--glass-border);
    transition: background var(--transition-base);
  }

  .timeline-item:hover::after {
    background: rgba(255, 255, 255, 0.2);
  }

  .timeline-dot {
    width: 10px;
    height: 10px;
    border-radius: var(--radius-full);
    background: var(--accent);
    border: 2px solid var(--glass-border);
    transition: transform var(--transition-base), border-color var(--transition-base);
    flex-shrink: 0;
    margin-top: 4px;
    z-index: 1;
    position: relative;
  }

  .timeline-item.current .timeline-dot {
    background: var(--accent);
    border-color: var(--accent);
    box-shadow: 0 0 0 0 var(--accent);
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%   { box-shadow: 0 0 0 0 color-mix(in srgb, var(--accent) 60%, transparent); }
    70%  { box-shadow: 0 0 0 7px transparent; }
    100% { box-shadow: 0 0 0 0 transparent; }
  }

  .timeline-item:hover .timeline-dot {
    transform: scale(1.3);
    border-color: var(--accent);
  }

  .timeline-content {
    text-align: left;
    flex: 1;
  }

  .timeline-content .year {
    font-size: 10px;
    font-weight: 600;
    color: var(--accent);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    margin-bottom: var(--space-xs);
  }

  .badge-now {
    font-size: 9px;
    font-weight: 700;
    color: var(--bg-primary, #0a0a0a);
    background: var(--accent);
    padding: 1px 6px;
    border-radius: var(--radius-full);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .timeline-content h4 {
    font-size: 13px;
    font-weight: 500;
    color: var(--text-primary);
    margin-bottom: var(--space-xs);
    letter-spacing: -0.01em;
  }

  .timeline-content p {
    font-size: 12px;
    color: var(--text-secondary);
    line-height: 1.5;
  }

  .interests {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-md);
  }

  .interests h3 {
    font-size: 11px;
    font-weight: 500;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .now-learning {
    display: flex;
    align-items: center;
    gap: var(--space-lg);
    flex-wrap: wrap;
  }

  .now-learning h3 {
    font-size: 11px;
    font-weight: 500;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    flex-shrink: 0;
  }

  .now-learning ul {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-sm);
  }

  .now-learning ul li {
    font-size: 12px;
    color: var(--text-secondary);
    padding: var(--space-xs) var(--space-md);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-md);
    transition: border-color var(--transition-base), color var(--transition-base);
  }

  .now-learning ul li::before {
    content: '▸ ';
    color: var(--accent);
    font-size: 10px;
  }

  .now-learning ul li:hover {
    border-color: rgba(255, 255, 255, 0.2);
    color: var(--text-primary);
  }

  .dev-setup {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-md);
  }

  .dev-setup h3 {
    font-size: 11px;
    font-weight: 500;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .dev-setup dl {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
  }

  .setup-row {
    display: flex;
    align-items: baseline;
    gap: var(--space-lg);
  }

  .setup-row dt {
    font-size: 11px;
    color: var(--text-muted);
    width: 60px;
    flex-shrink: 0;
  }

  .setup-row dd {
    font-size: 13px;
    color: var(--text-secondary);
  }

  .interests ul {
    display: flex;
    flex-wrap: wrap;
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

  .bottom-content {
    width: 100%;
    max-width: 1400px;
    display: flex;
    justify-content: center;
  }

  .social {
    display: flex;
    gap: var(--space-xs);
    justify-content: center;
    flex-wrap: wrap;
  }

  .social-link {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    color: var(--text-muted);
    font-size: 13px;
    padding: var(--space-sm) var(--space-lg);
    border-radius: var(--radius-md);
    text-decoration: none;
    transition: color var(--transition-base), background var(--transition-base);
  }

  .social-link:hover {
    color: var(--text-primary);
    background: rgba(255, 255, 255, 0.06);
  }

  .social-link i {
    font-size: 16px;
  }

  .social-link i.icon-qiita::before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    background-image: url("../lib/assets/qiita-white-icon.png");
    background-size: contain;
    background-repeat: no-repeat;
    vertical-align: middle;
    opacity: 0.55;
    transition: opacity var(--transition-base);
  }

  .social-link:hover i.icon-qiita::before {
    opacity: 1;
  }

  @media (max-width: 1024px) {
    .main-content {
      grid-template-columns: 1fr;
      gap: var(--space-2xl);
    }
  }

  @media (max-width: 768px) {
    .container {
      gap: var(--space-md);
      padding: var(--space-md) var(--space-md);
    }

    .main-content {
      gap: var(--space-xl);
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
      justify-content: flex-start;
    }

    .meta p > span.material-icons {
      margin-right: var(--space-sm);
      font-size: 15px;
    }

    .skills-setup {
      flex-direction: column;
    }

    .skills {
      gap: var(--space-md);
      padding: var(--space-md);
      text-align: center;
      width: 100%;
    }

    .skill-group h3 {
      font-size: 11px;
    }

    .skill-group p {
      font-size: 12px;
    }

    .background {
      width: 100%;
      align-items: flex-start;
    }

    .timeline {
      width: 100%;
      align-items: flex-start;
    }

    .timeline-item {
      align-items: flex-start;
    }

    .timeline-content h4 {
      font-size: 12px;
    }

    .timeline-content p {
      font-size: 11px;
    }

    .timeline-content .year {
      font-size: 9px;
    }

    .info .bio {
      font-size: 12px;
      text-align: center;
    }

    .interests {
      width: 100%;
      align-items: flex-start;
    }

    .interests ul li {
      font-size: 11px;
    }
  }
</style>
