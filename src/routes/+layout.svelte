<script>
</script>

<header>
  <div class="logo">
    <a href="/">Broccolingual</a>
  </div>
  <nav>
    <ul>
      <li><a href="/">PROFILE</a></li>
      <li><a href="/works">WORKS</a></li>
      <li><a href="/contact">CONTACT</a></li>
    </ul>
  </nav>
</header>

<main>
  <slot />
  <div class="icons">
    <i class="fas fa-microchip"></i>
    <i class="fas fa-code-branch"></i>
    <i class="fas fa-terminal"></i>
    <i class="fab fa-unity"></i>
    <i class="fab fa-ubuntu"></i>
    <i class="fab fa-raspberry-pi"></i>
    <i class="fab fa-python"></i>
    <i class="fab fa-node-js"></i>
    <i class="fab fa-java"></i>
    <i class="fab fa-github"></i>
    <i class="fab fa-docker"></i>
    <i class="fab fa-bluetooth-b"></i>
  </div>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
  :global(*) {
    font-family: "Poppins", "Roboto", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(:root) {
    --bg-color: #0f0e17;
    --bm-color: #fffffe;
    --paragraph-color: #a7a9be;
    --highlight-color: #ff8906;
    --stroke-color: black;
    --secondary-color: #ff8906;
    --point-color: #e53170;
  }

  :global(body) {
    background-image: linear-gradient(to bottom, #0f0e17, #0f0c29, #24243e);
  }

  :global(li) {
    list-style: none;
  }

  :global(a) {
    text-decoration: none;
    color: inherit;
  }

  :global(h1) {
    color: var(--bm-color);
  }

  header {
    width: 100%;
    height: 80px;
    padding: 0 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    font-weight: 700;
    color: var(--bm-color);
  }

  header > nav > ul {
    display: flex;
    justify-content: space-between;
  }
  header > nav > ul > li {
    margin: 0 24px;
  }

  header > nav > ul > li > a:hover {
    color: var(--paragraph-color);
  }

  main {
    width: 100%;
    height: calc(100vh - 80px);
    padding: 12px 36px;
  }

  .icons {
    color: var(--paragraph-color);
  }

  .icons > i {
    position: absolute;
    font-size: 56px;
    animation: icon-in 3s 1;
  }

  @keyframes icon-in {
    0% {
      transform: scale(0.25) rotate(-15deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  .icons > i:nth-child(1) {
    top: 30%;
    left: 15%;
    font-size: 78px;
  }

  .icons > i:nth-child(2) {
    top: 10%;
    left: 80%;
  }

  .icons > i:nth-child(3) {
    top: 60%;
    left: 20%;
  }

  .icons > i:nth-child(4) {
    top: 40%;
    left: 90%;
  }

  .icons > i:nth-child(5) {
    top: 10%;
    left: 40%;
    font-size: 78px;
  }

  .icons > i:nth-child(6) {
    top: 70%;
    left: 40%;
  }

  .icons > i:nth-child(7) {
    top: 80%;
    left: 60%;
    font-size: 78px;
  }

  .icons > i:nth-child(8) {
    top: 65%;
    left: 75%;
  }

  .icons > i:nth-child(9) {
    top: 85%;
    left: 5%;
  }

  .icons > i:nth-child(10) {
    top: 25%;
    left: 55%;
  }

  .icons > i:nth-child(11) {
    top: 5%;
    left: 20%;
  }

  .icons > i:nth-child(12) {
    top: 80%;
    left: 90%;
  }
</style>
