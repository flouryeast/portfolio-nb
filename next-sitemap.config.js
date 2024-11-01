const projectSlugs = require('./lib/projectSlugs')

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://noe-bernard.vercel.app',
  generateRobotsTxt: true,
  additionalPaths: async (config) => {
    const result = []
    
    // Add dynamic project routes
    for (const slug of projectSlugs) {
      result.push({
        loc: `/projects/${slug}`,
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      })
    }

    return result
  },
}