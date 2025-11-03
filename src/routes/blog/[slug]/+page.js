export async function load({ params }) {
  const post = await import(`../posts/${params.slug}.md`)
  return { 
    Content: post.default,
    meta: post.metadata
  }
}