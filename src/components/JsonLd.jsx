import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const JsonLd = ({ data }) => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Helmet>
  );
};

JsonLd.propTypes = {
  data: PropTypes.object.isRequired
};

export default JsonLd;