<script>
  import { page } from '$app/stores';
  import '../app.css';

  const menuItems = [
    { name: 'PROFILE', link: '/' },
    { name: 'WORKS', link: '/works' },
    { name: 'BLOG', link: '/blog' },
  ];
</script>

<main>
  <div class="container">
    <nav>
      <ul>
        {#each menuItems as item}
          <li class="{ $page.url.pathname === item.link ? 'selected' : '' }">
            <a href={item.link}>{item.name}</a>
          </li>
        {/each}
      </ul>
    </nav>
    <div class="content">
      <slot />
    </div>
  </div>

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
  @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap");
  :global(*) {
    font-family: "Poppins", "Roboto", "Playfair Display", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(:root) {
    --bg-color: #141414;
    --bm-color: #dddddc;
    --paragraph-color: #cccccc;
    --highlight-color: #ff8906;
    --stroke-color: black;
    --secondary-color: #ff8906;
    --point-color: #e53170;
  }

  :global(body) {
    background-color: var(--bg-color);
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
    filter: blur(3px) brightness(0.65);
    transform: scale(1.02);
    pointer-events: none;
  }

  :global(li) {
    list-style: none;
  }

  :global(a) {
    text-decoration: none;
    color: var(--bm-color);
  }

  :global(p) {
    color: var(--paragraph-color);
  }

  :global(h1) {
    letter-spacing: 1px;
    color: var(--bm-color);
  }

  :global(h2) {
    letter-spacing: 1px;
    color: var(--bm-color);
  }

  :global(h3) {
    letter-spacing: 1px;
    color: var(--bm-color);
  }

  :global(span.material-icons) {
    vertical-align: middle;
  }

  main {
    width: 100%;
    height: 100vh;
    padding: 12px;
    overflow: hidden;
  }

  main .container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  main .container nav {
    width: 360px;
    height: 100%;
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  main .container nav ul {
    width: 100%;
    padding-left: 48px;
  }

  main .container nav ul li {
    width: 100%;
    margin-bottom: 24px;
    font-size: 24px;
    letter-spacing: 4px;
    border-bottom: 1px solid var(--bm-color);
  }

  main .container nav ul li:hover {
    letter-spacing: 6px;
    transform: scale(1.1);
    transition: transform 0.5s ease-out;
  }

  main .container nav ul li.selected {
    letter-spacing: 6px;
    transform: scale(1.1);
    font-weight: bold;
  }

  main .container nav ul li a {
    width: 100%;
  }

  main .container .content {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 24px;
  }

  /* scrollbar settings */
  main .container .content::-webkit-scrollbar {
    width: 12px;
  }

  main .container .content::-webkit-scrollbar-thumb {
    background-color: var(--bm-color);
    border-radius: 6px;
  }
  main .container .content::-webkit-scrollbar-track {
    background-color: var(--bg-color);
    border-radius: 6px;
  }
  
  .icons {
    color: var(--paragraph-color);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -5;
  }

  .icons > i {
    position: absolute;
    font-size: 56px;
    animation: icon-in 3s 1;
    filter: blur(3px) drop-shadow(10px 10px 0px rgba(0, 0, 0, 0.25));
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

  @media (max-width: 768px) {
    main {
      padding: 6px 18px;
    }

    main .container {
      flex-direction: column;
    }

    main .container nav {
      height: auto;
      padding: 6px 24px;
      justify-content: flex-start;
    }

    main .container nav ul {
      padding-left: 0px;
    }

    main .container nav ul li {
      width: 100%;
      margin-bottom: 12px;
      font-size: 20px;
      letter-spacing: 2px;
      border-bottom: 1px solid var(--bm-color);
    }

    main .container nav ul li:hover {
      letter-spacing: 4px;
      transform: scale(1.1);
    }

    main .container .content {
      padding: 12px;
    }

    .icons > i {
      transform: scale(0.5);
    }
  }
</style>
