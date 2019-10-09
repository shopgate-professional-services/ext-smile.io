import React from 'react';
import PropTypes from 'prop-types';
import { themeConfig } from '@shopgate/pwa-common/helpers/config';
import { fixedDashboardButtonStyling } from '../../config';

const { colors } = themeConfig;

/**
 * DashboardIcon
 * @param {Object} props props
 * @return {JSX}
 */
const DashboardIcon = ({ isHighlighted, isTabBar, className }) => {
  const color = isTabBar ? '#a1a1a1' : '#747474';
  const iconColor = encodeURIComponent(isHighlighted ? colors.accent : color);
  const iconUrl = `${fixedDashboardButtonStyling.iconUrl}${iconColor}`;

  return (<img src={iconUrl} alt="" className={className} />);
};

DashboardIcon.propTypes = {
  className: PropTypes.string,
  isHighlighted: PropTypes.bool,
  isTabBar: PropTypes.bool,
};

DashboardIcon.defaultProps = {
  className: '',
  isHighlighted: false,
  isTabBar: false,
};

export default DashboardIcon;
