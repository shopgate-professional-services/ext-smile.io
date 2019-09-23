import React from 'react';
import PropTypes from 'prop-types';
import connect from './connector';

/**
 * @returns {JSX}
 */
const Init = () => {

  return (
    <div>
      <script async src="https://cdn.sweettooth.io/assets/storefront.js" charset="utf-8"></script>

      {/* Only add all this here if the user is logged in */}
      {/* get digest from pipeline */}
      <div className="sweettooth-init"
           data-channel-api-key="pk_Z8AMWQF7riUYTSYyngeosAey"
           data-external-customer-id="1000">
      </div>
    </div>
  );
};

Init.propTypes = {
};

Init.defaultProps = {
};

export default Init;
