<script>
  import logo from "../lib/assets/logo.png";
</script>

<svelte:head>
  <title>Broccolingual | Profile</title>
  <meta name="description" content="404" />
</svelte:head>

<div class="container">
  <div class="saying">
    <div class="inner">
      <p class="context">"Stay hungry. Stay foolish."</p>
      <p class="author">- Steve Jobs</p>
    </div>
    <div class="inner">
      <p class="context">
        "Let's go invent tomorrow rather than worrying about what happened
        yesterday."
      </p>
      <p class="author">- Steve Jobs</p>
    </div>
    <div class="inner">
      <p class="context">"Don't study to earn. Study to learn."</p>
      <p class="author">- Bill Gates</p>
    </div>
    <div class="inner">
      <p class="context">
        "You don't choose your passions. Your passions choose you."
      </p>
      <p class="author">- Jeff Bezos</p>
    </div>
  </div>
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
        <span class="material-icons">person</span>FPGA Engineer (Image
        Processing)
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

  .saying {
    color: var(--paragraph-color);
  }

  .saying .inner {
    position: absolute;
    max-width: 480px;
    transform: translate(-50%, -50%);
    z-index: 1000;
  }

  .saying .inner:nth-child(1) {
    top: 15%;
    left: 20%;
  }

  .saying .inner:nth-child(2) {
    top: 80%;
    left: 80%;
  }

  .saying .inner:nth-child(3) {
    top: 25%;
    left: 75%;
  }

  .saying .inner:nth-child(4) {
    top: 75%;
    left: 25%;
  }

  .saying .inner p {
    font-family: "Playfair Display", sans-serif;
  }

  .saying .inner p.context {
    font-size: 24px;
    font-weight: 500;
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
    background-color: var(--point-color);
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
    color: var(--bm-color);
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
</style>
