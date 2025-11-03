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
  <div class="details">
    <div class="skills">
      <div class="title">
        <h2>Skills</h2>
      </div>
      <div class="contents">
        <div class="content">
          <h3>Languages</h3>
          <p>Python, Rust, Go, C, C#, Java, TypeScript, Vue.js, Svelte</p>
        </div>
        <div class="content">
          <h3>Tools / Services</h3>
          <p>Git, Docker, Supabase, Heroku, Firebase, Github Actions</p>
        </div>
      </div>
    </div>
  </div>
  <div class="social">
    <ul>
      <li>
        <a
          href="https://github.com/broccolingual"
          target="_blank"
          rel="noopener noreferrer"
          ><i class="fab fa-github"></i>Github</a
        >
      </li>
      <li>
        <a
          href="https://qiita.com/Broccolingual"
          target="_blank"
          rel="noopener noreferrer"
          ><i class="icon-qiita"></i>Qiita</a
        >
      </li>
      <li>
        <a
          href="https://github.com/broccolingual/dotfiles"
          target="_blank"
          rel="noopener noreferrer"
          ><i class="fas fa-code"></i>dotfiles</a
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
    gap: 24px;
  }

  .container > div {
    min-width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .details {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 12px;
    padding: 12px 24px;
  }

  .details > .skills {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .details > .skills > .title {
    width: 20%;
    height: 100%;
    align-content: center;
    border-right: 1px solid var(--bm-color);
  }

  .details > .skills > .contents > .content {
    padding: 4px 0;
  }

  .details > .skills > .contents > .content > h3 {
    font-size: 16px;
  }

  .logo {
    width: 120px;
    height: 120px;
    border: 2px solid var(--bm-color);
    border-style: dashed;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .logo > img {
    width: 75%;
    height: 75%;
    border-radius: 50%;
  }

  .logo:hover {
    transform: scale(1.1);
    transition: transform 0.5s ease-out;
  }

  .info {
    margin-left: 24px;
    color: var(--paragraph-color);
  }

  .info h1 {
    font-size: 42px;
    letter-spacing: 4px;
  }

  .info p {
    font-size: 16px;
  }

  .info p > span.material-icons {
    margin-right: 12px;
  }

  .social {
    color: var(--bm-color);
  }

  .social ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .social ul li {
    margin: 0 24px;
  }

  .social ul li a i {
    margin-right: 8px;
  }

  .social ul li a i.icon-qiita::before {
    content: "";
    display: inline-block;
    width: 18px;
    height: 18px;
    background-image: url("../lib/assets/qiita-white-icon.png");
    background-size: contain;
    background-repeat: no-repeat;
    vertical-align: middle;
  }

  @media (max-width: 768px) {
    .container {
      gap: 8px;
    }

    .profile {
      flex-direction: column;
    }

    .details {
      padding: 6px 12px;
    }

    .details > .skills {
      flex-direction: column;
      gap: 0;
    }

    .details > .skills > .title {
      width: 100%;
      border-right: none;
    }

    .details > .skills > .title > h2 {
      font-size: 18px;
    }

    .details > .skills > .contents > .content > h3 {
      font-size: 14px;
    }

    .details > .skills > .contents > .content > p {
      font-size: 12px;
    }

    .logo {
      width: 100px;
      height: 100px;
      margin-bottom: 12px;
    }

    .logo:hover {
      transform: scale(1.1);
      transition: transform 0.5s ease-out;
    }

    .info {
      margin-left: 12px;
    }

    .info h1 {
      font-size: 32px;
      letter-spacing: 2px;
      text-align: center;
    }

    .info p {
      font-size: 14px;
    }

    .info p > span.material-icons {
      margin-right: 4px;
    }

    .social ul li {
      margin: 0 12px;
    }

    .social ul li a {
      font-size: 14px;
    }
  }
</style>
