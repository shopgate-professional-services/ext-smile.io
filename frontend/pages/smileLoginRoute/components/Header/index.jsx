import React from 'react';
import PropTypes from 'prop-types';
import styles from './style';

/**
 * Header component for Smile Login Route
 * @param {Object} headerText Object containing header info
 * @return {JSX}
 */
const Header = ({ headerText }) => {
  if (!headerText) {
    return null;
  }
  return (
    <div className={styles.headerContainer}>
      <div className={styles.wrapper}>
        <div className={styles.secondary}>
          {headerText.secondaryText}
        </div>
        <div className={styles.primary}>
          {headerText.primaryText}
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  headerText: PropTypes.shape().isRequired,
};

export default Header;
