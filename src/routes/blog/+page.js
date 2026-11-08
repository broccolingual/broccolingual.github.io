export async function load() {
  const modules = /** @type {Record<string, { metadata: { title: string, date: string, tags: string[], description?: string } }>} */ (
    import.meta.glob('./posts/*.md', { eager: true })
  );
  const posts = Object.entries(modules).map(([path, module]) => {
    return {
      slug: path.replace('./posts/', '').replace('.md', ''),
      ...module.metadata
    };
  });
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return { posts };
}