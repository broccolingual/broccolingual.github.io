<script>
  export let data
  const { Content, meta } = data
</script>

<a class="go-back" href="/blog">← Go Back</a>

<article>
  <div class="meta">
    <h1>{meta.title}</h1>
    <p>{meta.date}</p>
    <ul class="tags">
      {#each meta.tags as tag}
        <li>{tag}</li>
      {/each}
    </ul>
  </div>
  <div class="article-content">
    <Content />
  </div>
</article>

<style>
  a.go-back {
    display: inline-block;
    margin-bottom: 12px;
    color: var(--bm-color);
    font-size: 20px;
  }

  a.go-back:hover {
    text-decoration: underline;
  }

  article {
    width: 100%;
    min-height: 100%;
    background-color: var(--bg-color);
    border-radius: 12px;
  }

  .meta {
    width: 100%;
    background-color: #2b2b2b;
    padding: 12px 36px 20px 36px;
    border-radius: 12px 12px 0 0;
  }

  .article-content {
    width: 100%;
    padding: 12px 36px;
  }

  .meta h1 {
    color: var(--bm-color);
  }

  .meta p {
    font-size: 12px;
    color: #bbb;
  }

  .meta ul.tags {
    width: 100%;
    display: flex;
    margin-top: 6px;
    gap: 6px;
  }

  .meta ul.tags > li {
    font-size: 14px;
    font-weight: bold;
    color: var(--bg-color);
    background-color: var(--bm-color);
    padding: 2px 8px;
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    a.go-back {
      margin-bottom: 8px;
      font-size: 16px;
    }

    article {
      border-radius: 8px;
    }

    .meta {
      padding: 6px 18px 10px 18px;
      border-radius: 8px 8px 0 0;
    }

    .article-content {
      padding: 6px 18px;
    }

    .meta h1 {
      font-size: 30px;
    }

    .meta p {
      font-size: 12px;
    }

    .meta ul.tags {
      margin-top: 6px;
      gap: 6px;
    }

    .meta ul.tags > li {
      font-size: 12px;
      padding: 2px 6px;
      border-radius: 4px;
    }
  }
</style>