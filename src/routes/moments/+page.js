export function load() {
  const modules = /** @type {Record<string, {
    default: import('svelte').ComponentType,
    metadata: { image: string, alt: string, date: string, location?: string }
  }>} */ (
    import.meta.glob('./posts/*.md', { eager: true })
  );
  const images = /** @type {Record<string, string>} */ (
    import.meta.glob('/src/lib/assets/moments/*.{jpg,jpeg,png,webp,avif}', {
      eager: true,
      query: '?url',
      import: 'default'
    })
  );

  const posts = Object.entries(modules).map(([path, module]) => {
    const image = module.metadata.image;
    const assetPath = image?.startsWith('src/lib/assets/moments/') ? `/${image}` : image;
    if (assetPath?.startsWith('/src/lib/assets/moments/') && !images[assetPath]) {
      throw new Error(`Image not found for ${path}: ${image}`);
    }

    return {
      slug: path.replace('./posts/', '').replace('.md', ''),
      Content: module.default,
      ...module.metadata,
      image: images[assetPath] ?? image
    };
  });
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return { posts };
}
