// Enhanced dynamic sitemap (Next.js App Router) served at /sitemap.xml
// Includes image metadata for richer search presentation.
// Add more routes here as you build out the site.

import { productCategories } from '@/app/products/productData';

const BASE_URL = process.env.SITE_URL || 'https://theoriginaltraders.com';

export default async function sitemap() {
  const now = new Date();
  const lastMod = now.toISOString().split('T')[0];


  const imageSet = new Map(); // key -> { loc, title }
  for (const cat of productCategories) {
    for (const prod of cat.products || []) {
      for (const img of prod.images || []) {
        if (!img?.src) continue;
        if (!imageSet.has(img.src)) {
          imageSet.set(img.src, {
            loc: `${BASE_URL}${img.src}`,
            title: `${prod.name} - ${cat.name}`.slice(0, 100),
          });
        }
        if (imageSet.size > 120) break; // safety cap
      }
      if (imageSet.size > 120) break;
    }
    if (imageSet.size > 120) break;
  }

  const productImages = Array.from(imageSet.values());

  // Base static pages
  const basePages = [
    {
      path: '',
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [
        { loc: `${BASE_URL}/logo.png`, title: 'The Original Traders Logo' },
      ],
    },
    {
      path: '/about',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      path: '/products',
      changeFrequency: 'weekly',
      priority: 0.9,
      images: productImages,
    },
  ];


  // const categoryPages = productCategories.map(cat => ({
  //   path: `/products/${cat.id}`,
  //   changeFrequency: 'weekly',
  //   priority: 0.8,
  //   images: (cat.products?.flatMap(p => p.images)?.slice(0,6) || []).map(img => ({
  //     loc: `${BASE_URL}${img.src}`,
  //     title: `${cat.name}`.slice(0, 80)
  //   }))
  // }));

  return basePages.map(entry => ({
    url: `${BASE_URL}${entry.path}`,
    lastModified: lastMod,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
    images: entry.images, // Next.js will emit <image:image> blocks when provided
  }));
}
