<script>
  import logo from "../lib/assets/logo.png";
</script>

<svelte:head>
  <title>Broccolingual | Profile</title>
  <meta name="description" content="404" />
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
  <div class="social">
    <ul>
      <li>
        <a
          href="https://github.com/broccolingual"
          target="_blank"
          rel="noopener noreferrer"
          ><span class="material-icons">link</span>Github</a
        >
      </li>
      <li>
        <a
          href="https://qiita.com/Broccolingual"
          target="_blank"
          rel="noopener noreferrer"
          ><span class="material-icons">link</span>Qiita</a
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
  }

  .profile {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background-color: var(--bg-color);
    display: flex;
    justify-content: center;
    align-items: center;
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
    font-size: 48px;
    letter-spacing: 2px;
  }

  .info p {
    font-size: 16px;
  }

  .info p > span.material-icons {
    margin-right: 8px;
  }

  .social {
    margin-top: 12px;
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

  .social ul li a span.material-icons {
    margin-right: 8px;
  }

  @media (max-width: 768px) {
    .profile {
      flex-direction: column;
    }

    .logo {
      width: 120px;
      height: 120px;
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
      font-size: 36px;
      letter-spacing: 2px;
      text-align: center;
    }

    .info p {
      font-size: 14px;
    }

    .social ul li {
      margin: 0 12px;
    }
  }
</style>
