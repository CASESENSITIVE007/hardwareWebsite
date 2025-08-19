// Dynamic sitemap for Next.js App Router
// Served automatically at /sitemap.xml


const BASE_URL = process.env.SITE_URL || 'https://theoriginaltraders.com';

export default async function sitemap() {
  const now = new Date();
  const lastMod = now.toISOString().split('T')[0];

  // Static routes
  const routes = ['', '/about', '/products'];

  return routes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: lastMod,
    changeFrequency: 'weekly',
    priority: path === '' ? 1.0 : 0.7,
  }));
}
