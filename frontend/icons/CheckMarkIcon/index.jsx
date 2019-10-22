import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@shopgate/pwa-common/components/Icon';

/**
 * The check icon component.
 * @param {Object} props The icon component properties.
 * @returns {JSX}
 */
const CheckMark = (props) => {
  const stroke = props.strokeColor || '#000';
  const content = `<path d="M1 11.248L8.84 19 23 5" stroke=${stroke} stroke-width="2" fill="none" fill-rule="evenodd"/>`;
  return <Icon content={content} {...props} />;
};

CheckMark.propTypes = {
  strokeColor: PropTypes.string,
};

CheckMark.defaultProps = {
  strokeColor: null,
};
export default CheckMark;
