import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({ 
  title, 
  description, 
  name = 'Pratik Mali', 
  type = 'website',
  image = '/src/assets/images/mypic2.png'
}) => {
  const siteUrl = window.location.origin;
  
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      
      {/* OpenGraph tags */}
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content={type} />
      <meta property='og:url' content={window.location.href} />
      <meta property='og:image' content={`${siteUrl}${image}`} />
      
      {/* Twitter tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content={name} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={`${siteUrl}${image}`} />
      
      {/* Canonical link */}
      <link rel='canonical' href={window.location.href} />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string
};

export default SEO;