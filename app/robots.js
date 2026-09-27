export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://themedihelp.com/sitemap.xml',
    host: 'https://themedihelp.com',
  }
}
