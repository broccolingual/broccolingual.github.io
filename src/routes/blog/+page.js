export async function load() {
  const modules = import.meta.glob('./posts/*.md', { eager: true });
  const posts = Object.entries(modules).map(([path, module]) => {
    return {
      slug: path.replace('./posts/', '').replace('.md', ''),
      ...module.metadata
    };
  });
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  return { posts };
}