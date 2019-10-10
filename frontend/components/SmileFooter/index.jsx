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
const SmileFooter = ({ smileCustomer }) => {
  if (smileCustomer) {
    return <SmileDefaultFooter />;
  }

  return <SmileJoinFooter />;
};

SmileFooter.propTypes = {
  smileCustomer: PropTypes.shape(),
};

SmileFooter.defaultProps = {
  smileCustomer: null,
};

export default connect(SmileFooter);
