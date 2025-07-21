import { useEffect } from 'react';

/**
 * Simple Meta component for SEO
 * @param {Object} props - Component props
 * @param {string} props.title - Page title
 * @param {string} props.description - Page description
 * @param {string} props.keywords - Page keywords
 * @param {string} props.ogImage - Open Graph image URL
 */
const Meta = ({ 
  title = 'Pratik Mali - Web Developer & MERN Stack Portfolio',
  description = 'Web Developer, MERN Stack Freelancer, UI Designer, IoT Enthusiast and Microprocessor Aficionado',
  keywords = 'Pratik Mali, Web Developer, MERN Stack, UI Designer, IoT, Portfolio, React Developer',
  ogImage = '/src/assets/images/mypic2.png'
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    const metaTags = {
      'description': description,
      'keywords': keywords,
      'og:title': title,
      'og:description': description,
      'og:image': ogImage,
      'og:type': 'website',
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': ogImage
    };
    
    // Update or create meta tags
    Object.entries(metaTags).forEach(([name, content]) => {
      let meta = document.querySelector(`meta[name="${name}"]`) || 
                 document.querySelector(`meta[property="${name}"]`);
      
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        if (name.startsWith('og:')) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    });
    
    return () => {
      // No cleanup needed as we want the meta tags to persist
    };
  }, [title, description, keywords, ogImage]);
  
  return null; // This component doesn't render anything
};

export default Meta;