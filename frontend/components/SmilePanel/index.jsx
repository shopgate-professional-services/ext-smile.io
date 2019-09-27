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
        {options.map((option, index) => (
          <Card
            key={index.toString()}
            img={option.reward.image_url}
            text={option.reward.name}
            pointsText={option.exchange_description}
          />
        ))}
      </div>
    </div>
  );
};

SmilePanel.propTypes = {
  header: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default SmilePanel;
