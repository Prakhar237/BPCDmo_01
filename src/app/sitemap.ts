import type { MetadataRoute } from 'next';
import { PRODUCTS, CATEGORIES } from '@/data/products';
import { SPECIALTIES } from '@/data/specialties';

const BASE = 'https://bloodpact.life';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/products',
    '/technology',
    '/ai',
    '/connect',
    '/hospital-solutions',
    '/specialties',
    '/research',
    '/insights',
    '/company',
    '/contact',
  ].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const categoryRoutes = CATEGORIES.filter((c) => c.id !== 'all').map((category) => ({
    url: `${BASE}/products/${category.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const productRoutes = PRODUCTS.map((product) => ({
    url: `${BASE}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: product.isFlagship ? 0.9 : 0.65,
  }));

  const specialtyRoutes = SPECIALTIES.map((specialty) => ({
    url: `${BASE}/specialties/${specialty.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes, ...specialtyRoutes];
}
