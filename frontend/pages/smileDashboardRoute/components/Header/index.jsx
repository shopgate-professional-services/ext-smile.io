import React from 'react';
import PropTypes from 'prop-types';
import { i18n } from '@shopgate/engage/core';
import styles from './style';
import connect from '../../../connector';

/**
 * Header component for Smile Login Route
 * @param {Object} headerText Object containing header info
 * @param {number|null} points Smile points
 * @return {JSX}
 */
const Header = ({ headerText, points }) => {
  if (!headerText) {
    return null;
  }
  let { primaryText, secondaryText } = headerText;
  let primaryStyle = styles.primary;

  if (points) {
    primaryText = `${points}`;
    secondaryText = i18n.text('smile.your_points');
    primaryStyle = styles.primaryPoints;
  }
  return (
    <div className={styles.headerContainer}>
      <div className={styles.wrapper}>
        <div className={styles.secondary}>
          {secondaryText}
        </div>
        <div className={primaryStyle}>
          {primaryText}
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  headerText: PropTypes.shape().isRequired,
  points: PropTypes.number,
};

Header.defaultProps = {
  points: null,
};

export default Header;
