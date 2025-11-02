<script>
  export let data;
  const { posts } = data;
</script>

<svelte:head>
  <title>Broccolingual | Blog</title>
  <meta name="description" content="Broccolingual's tech blog" />
</svelte:head>

<section>
  <h1>Tech Blog</h1>
  <p>Welcome to my tech blog where I share insights and tutorials on various topics.</p>
</section>

<ul class="articles">
  {#each posts as post}
    <li>
      <div class="item">
        <a href={`/blog/${post.slug}`}>
          <h3>{post.title}<span>{post.date}</span></h3>
          <ul class="tags">
            {#each post.tags as tag}
              <li>{tag}</li>
            {/each}
          </ul>
        </a>
      </div>
    </li>
  {/each}
</ul>

<style>
  section {
    margin-bottom: 24px;
    text-align: center;
  }

  ul.articles {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .item {
    padding: 12px 32px 18px 32px;
    border-radius: 12px;
    background-color: #2b2b2b;
  }

  .item:hover {
    background-color: #444444;
  }

  .item > a > h3 {
    display: flex;
    align-items: center;
    font-size: 20px;
  }

  .item > a > h3 > span {
    font-size: 14px;
    color: #bbb;
    margin-left: 12px;
  }

  ul.tags {
    width: 100%;
    display: flex;
    margin-top: 6px;
    gap: 6px;
  }

  ul.tags > li {
    font-size: 14px;
    font-weight: bold;
    color: var(--bg-color);
    background-color: var(--bm-color);
    padding: 2px 8px;
    border-radius: 4px;
  }
</style>
