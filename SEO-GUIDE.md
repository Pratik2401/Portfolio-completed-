# SEO Implementation Guide for Portfolio Website

This document outlines the SEO implementation for the portfolio website.

## Implemented SEO Features

1. **Meta Tags**
   - Title tags for each page
   - Meta descriptions
   - Meta keywords
   - Open Graph tags for social sharing
   - Twitter card tags

2. **Structured Data**
   - JSON-LD for personal information
   - JSON-LD for projects list

3. **Technical SEO**
   - Sitemap.xml
   - Robots.txt
   - Canonical URLs

## How to Use the Meta Component

The `Meta` component in `src/components/Meta.jsx` can be used in any page component:

```jsx
import Meta from './components/Meta';

function YourComponent() {
  return (
    <>
      <Meta 
        title="Page Title - Pratik Mali Portfolio"
        description="Your page description here"
        keywords="keyword1, keyword2, keyword3"
      />
      {/* Rest of your component */}
    </>
  );
}
```

## Adding Structured Data

For adding structured data to a page:

```jsx
useEffect(() => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "YourType",
    // Your structured data properties
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.innerHTML = JSON.stringify(structuredData);
  document.head.appendChild(script);
  
  return () => {
    // Clean up
    const scripts = document.querySelectorAll('script[type="application/ld+json"]');
    scripts.forEach(s => s.remove());
  };
}, []);
```

## SEO Best Practices

1. **Keep titles under 60 characters**
   - Each page should have a unique, descriptive title

2. **Meta descriptions should be 150-160 characters**
   - Write compelling descriptions that encourage clicks

3. **Use relevant keywords naturally**
   - Don't keyword stuff

4. **Update sitemap when adding new pages**
   - The sitemap.xml file should include all public pages

5. **Test your structured data**
   - Use Google's Structured Data Testing Tool

6. **Ensure mobile responsiveness**
   - Google prioritizes mobile-friendly websites

7. **Optimize image alt text**
   - Include descriptive alt text for all images

## Deployment Checklist

- [ ] Update domain name in sitemap.xml and robots.txt
- [ ] Verify all meta tags are working
- [ ] Test structured data
- [ ] Check for any console errors
- [ ] Verify mobile responsiveness
- [ ] Submit sitemap to Google Search Console