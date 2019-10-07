import React from 'react';
import PropTypes from 'prop-types';
import I18n from '@shopgate/pwa-common/components/I18n';
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
    return (
      <div className={styles.panelContainer}>
        <I18n.Text string="smile.smile_error" />
      </div>
    );
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
  options: PropTypes.arrayOf(PropTypes.shape()),
};

SmilePanel.defaultProps = {
  options: null,
};

export default SmilePanel;
