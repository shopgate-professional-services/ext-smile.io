import React from 'react';
import PropTypes from 'prop-types';
import defaultStyle from './style';

/**
 * PanelContainer component
 * @param {Node} children Component children
 * @param {string} style Class name for style
 * @return {JSX}
 */
const PanelContainer = ({ children, style }) => (
  <div className={`${style} ${defaultStyle}`}>
    {children}
  </div>
);

PanelContainer.propTypes = {
  children: PropTypes.node,
  style: PropTypes.string,
};

PanelContainer.defaultProps = {
  children: null,
  style: null,
};

export default PanelContainer;
