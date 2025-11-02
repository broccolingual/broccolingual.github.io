<script>
  export let data
  const { Content, meta } = data
</script>

<a class="go-back" href="/blog">← Go Back</a>

<article>
  <div class="meta">
    <h1>{meta.title}<span>{meta.date}</span></h1>
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

  .meta h1 > span {
    font-size: 16px;
    color: #bbb;
    margin-left: 12px;
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
</style>