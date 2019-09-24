import React from 'react';
import PropTypes from 'prop-types';
import styles from './style';
import Card from './components/Card';
/**
 * Panel information for waysToEarn and waysToSpend routes
 * @param {Object} header header info
 * @param {Object} options card options
 * @returns {JSX}
 */
const SmilePanel = ({ header, options }) => {
  if (!header || !options) {
    return null;
  }
  return (
    <div className={styles.panelContainer}>
      <div className={styles.headerContainer}>{header}</div>
      <div className={styles.cardList}>
        {options.map(option => (
          <Card img={option.img} text={option.text} pointsText={option.pointsText} />
        ))}
      </div>
    </div>
  );
};

SmilePanel.propTypes = {
  header: PropTypes.shape().isRequired,
  options: PropTypes.shape().isRequired,
};

export default SmilePanel;
