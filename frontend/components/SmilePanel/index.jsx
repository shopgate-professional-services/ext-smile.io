/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { CheckIcon } from '@shopgate/engage/components';
import BaseSmileLink from '../BaseSmileLink';
import { WAYS_TO_EARN_ROUTE } from '../../constants';
import styles from './style';
/**
 * Panel information for waysToEarn and waysToSpend routes
 * @param {Object} header header info
 * @param {Object} options card options
 * @returns {JSX}
 */
const SmilePanel = ({ header, options, location }) => {
  const cards = location === WAYS_TO_EARN_ROUTE ? (
    options.map((option, index) => {
      const { is_available, activity_rule } = option || {};
      const cta = is_available ? null : (<CheckIcon className={styles.check} />);
      return (
        <BaseSmileLink
          key={index.toString()}
          muted={!is_available}
          iconImage={activity_rule.image_url}
          headline={activity_rule.name}
          description={activity_rule.value_description}
          CallToAction={cta}
        />
      );
    })
  ) :
    (
      options.map((option, index) => (
        <BaseSmileLink
          key={index.toString()}
          iconImage={option.reward.image_url}
          headline={option.reward.name}
          description={option.exchange_description}
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
