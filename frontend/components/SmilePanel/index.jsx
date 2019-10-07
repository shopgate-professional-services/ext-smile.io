import React from 'react';
import PropTypes from 'prop-types';
import { WAYS_TO_EARN_ROUTE } from '../../constants';
import styles from './style';
import Card from './components/Card';
/**
 * Panel information for waysToEarn and waysToSpend routes
 * @param {Object} header header info
 * @param {Object} options card options
 * @returns {JSX}
 */
const SmilePanel = ({ header, options, location }) => {
  const cards = location === WAYS_TO_EARN_ROUTE ? (
    options.map((option, index) => {
      // eslint-disable-next-line camelcase
      const { activity_rule } = option || {};

      return (
        <Card
          key={index.toString()}
          img={activity_rule.image_url}
          text={activity_rule.name}
          pointsText={activity_rule.value_description}
        />
      );
    })
  ) :
    (
      options.map((option, index) => (
        <Card
          key={index.toString()}
          img={option.reward.image_url}
          text={option.reward.name}
          pointsText={option.exchange_description}
        />
      ))
    );

  return (
    <div className={styles.panelContainer}>
      <div className={styles.headerContainer}>{header}</div>
      <div className={styles.cardList}>
        {cards}
      </div>
    </div>
  );
};
SmilePanel.propTypes = {
  header: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  location: PropTypes.string,
};

SmilePanel.defaultProps = {
  location: null,
};

export default SmilePanel;
