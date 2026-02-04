export const prerender = true;

const site = 'https://www.broccolingual.com';

const staticPages = ['/', '/works', '/blog'];

export async function GET() {
  const modules = import.meta.glob('/src/routes/blog/posts/*.md', { eager: true });
  const posts = Object.keys(modules).map((path) => {
    const slug = path.replace('/src/routes/blog/posts/', '').replace('.md', '');
    const { date } = modules[path].metadata;
    return { slug, date };
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.map((page) => `    <url>
        <loc>${site}${page}</loc>
    </url>`).join('\n')}
${posts.map((post) => `    <url>
        <loc>${site}/blog/${post.slug}</loc>
        <lastmod>${post.date}</lastmod>
    </url>`).join('\n')}
</urlset>`;

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
