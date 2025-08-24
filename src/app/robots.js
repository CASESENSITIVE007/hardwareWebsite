// robots.txt generator for Next.js App Router (served at /robots.txt)
// Adds sitemap reference automatically.

const BASE_URL = process.env.SITE_URL || 'https://www.theoriginaltraders.com';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/static/', '/_next/image'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
