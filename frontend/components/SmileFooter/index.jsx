import React from 'react';
import PropTypes from 'prop-types';
import SmileJoinFooter from './components/SmileJoinFooter';
import SmileDefaultFooter from './components/SmileDefaultFooter';
import connect from './connector';

/**
 * Smile footer component
 * @param {Object} smileCustomer Smile customer object
 * @return {JSX}
 */
const SmileFooter = ({ smileCustomerAvailable }) => {
  if (smileCustomerAvailable) {
    return <SmileDefaultFooter />;
  }

  return <SmileJoinFooter />;
};

SmileFooter.propTypes = {
  smileCustomerAvailable: PropTypes.bool,
};

SmileFooter.defaultProps = {
  smileCustomerAvailable: false,
};

export default connect(SmileFooter);
