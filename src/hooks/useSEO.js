import { useEffect } from 'react';

/**
 * Custom hook for dynamically updating SEO meta tags
 * @param {Object} options - SEO options
 * @param {string} options.title - Page title
 * @param {string} options.description - Page description
 * @param {string} options.image - Page image URL
 * @param {string} options.url - Page URL
 */
const useSEO = ({ title, description, image, url }) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    const metaTags = {
      description,
      'og:title': title,
      'og:description': description,
      'og:image': image,
      'og:url': url || window.location.href,
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': image,
    };
    
    // Update each meta tag
    Object.entries(metaTags).forEach(([name, content]) => {
      if (!content) return;
      
      // Check if meta tag exists with name or property
      let metaTag = document.querySelector(`meta[name="${name}"]`) || 
                    document.querySelector(`meta[property="${name}"]`);
      
      if (metaTag) {
        // Update existing tag
        metaTag.setAttribute('content', content);
      } else {
        // Create new tag
        metaTag = document.createElement('meta');
        if (name.startsWith('og:')) {
          metaTag.setAttribute('property', name);
        } else {
          metaTag.setAttribute('name', name);
        }
        metaTag.setAttribute('content', content);
        document.head.appendChild(metaTag);
      }
    });
    
    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', url || window.location.href);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', url || window.location.href);
      document.head.appendChild(canonicalLink);
    }
  }, [title, description, image, url]);
};

export default useSEO;