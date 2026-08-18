const products = [
  {
    id: '1',
    slug: 'ceremonial-matcha',
    name: 'Ceremonial Grade Matcha',
    category: 'Matcha',
    price: 28.0,
    description: 'Stone-ground first-harvest matcha from Uji, whisked smooth with a naturally sweet, umami finish.',
  },
  {
    id: '2',
    slug: 'sencha-classic',
    name: 'Sencha, Classic Steep',
    category: 'Green Tea',
    price: 16.0,
    description: 'A bright, grassy everyday sencha, steamed and rolled the traditional way.',
  },
  {
    id: '3',
    slug: 'hojicha-roasted',
    name: 'Hojicha, Roasted',
    category: 'Roasted Tea',
    price: 14.0,
    description: 'Low-caffeine roasted green tea with a toasty, almost coffee-like warmth.',
  },
  {
    id: '4',
    slug: 'genmaicha-toasted-rice',
    name: 'Genmaicha, Toasted Rice',
    category: 'Green Tea',
    price: 13.0,
    description: 'Sencha blended with toasted rice for a nutty, comforting cup.',
  },
  {
    id: '5',
    slug: 'houjicha-latte-blend',
    name: 'Hojicha Latte Blend',
    category: 'Roasted Tea',
    price: 18.0,
    description: 'A finer-ground hojicha built for steaming into lattes at home.',
  },
  {
    id: '6',
    slug: 'gyokuro-shaded',
    name: 'Gyokuro, Shade-Grown',
    category: 'Green Tea',
    price: 34.0,
    description: 'Shaded for three weeks before harvest for a deep, sweet, low-astringency cup.',
  },
];

// Internal ops tooling data. Never meant to be reachable from the public
// storefront deployment -- see the note in schema.js.
const opsLog = [
  {
    id: '1',
    actor: 'deploy-bot',
    action: 'DEPLOY',
    detail: 'Storefront build a4f1c2 deployed to production.',
    at: '2026-07-28T09:03:00Z',
  },
  {
    id: '2',
    actor: 'ops-bot',
    action: 'CACHE_PURGE',
    detail: 'Purged product image CDN cache after catalog update.',
    at: '2026-07-29T11:47:00Z',
  },
  {
    id: '3',
    actor: 'r.hattori',
    action: 'NOTE',
    detail: 'Reminder to finish migrating the vendor pricing feed off the old FTP drop before it gets decommissioned end of quarter.',
    at: '2026-07-29T15:20:00Z',
  },
  {
    id: '4',
    actor: 'ops-bot',
    action: 'ROTATE_TEMP_TOKEN',
    detail: 'Temporary bypass token issued for the vendor API migration, expires after rotation: HACKVERSE{__typ3_sn34ks_p4st_th3_f1lt3r}',
    at: '2026-07-30T02:14:00Z',
  },
  {
    id: '5',
    actor: 'deploy-bot',
    action: 'DEPLOY',
    detail: 'Storefront build a4f2d0 deployed to production.',
    at: '2026-07-30T09:12:00Z',
  },
];

module.exports = { products, opsLog };
