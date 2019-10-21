import React from 'react';
import PropTypes from 'prop-types';
import { i18n } from '@shopgate/engage/core';
import styles from './style';

/**
 * Header component for Smile Login Route
 * @param {Object} headerText Object containing header info
 * @param {boolean} haveSmileCustomer Smile Customer Exists
 * @param {number|null} points Smile points
 * @return {JSX}
 */
const Header = ({ headerText, haveSmileCustomer, points }) => {
  if (!headerText) {
    return null;
  }

  let { primaryText, secondaryText } = headerText;
  let primaryStyle = styles.primary;

  if (haveSmileCustomer) {
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
  haveSmileCustomer: PropTypes.bool,
  points: PropTypes.number,
};

Header.defaultProps = {
  haveSmileCustomer: false,
  points: 0,
};

export default Header;
