const fs = require('fs');
const path = require('path');

// Your website URL
const WEBSITE_URL = 'https://yourdomain.com';

// Routes to include in sitemap
const routes = [
  {
    path: '/',
    priority: '1.0',
    changefreq: 'monthly'
  }
];

// Get current date in YYYY-MM-DD format
const getFormattedDate = () => {
  const date = new Date();
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
};

// Generate sitemap XML content
const generateSitemap = () => {
  const today = getFormattedDate();
  
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  routes.forEach(route => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${WEBSITE_URL}${route.path}</loc>\n`;
    sitemap += `    <lastmod>${today}</lastmod>\n`;
    sitemap += `    <changefreq>${route.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${route.priority}</priority>\n`;
    sitemap += '  </url>\n';
  });
  
  sitemap += '</urlset>';
  
  return sitemap;
};

// Write sitemap to file
const writeSitemap = () => {
  const sitemap = generateSitemap();
  const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
  
  fs.writeFileSync(outputPath, sitemap);
  console.log(`Sitemap generated at ${outputPath}`);
};

// Execute
writeSitemap();