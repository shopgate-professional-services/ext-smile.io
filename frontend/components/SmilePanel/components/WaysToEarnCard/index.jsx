/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { CheckIcon } from '@shopgate/engage/components';
import BaseSmileLink from '../../../BaseSmileLink';
import styles from './style';

/**
 * Ways to earn card
 * @param {Object} option option info
 * @returns {JSX}
 */
const WaysToEarnCard = ({ option }) => {
  const { is_available, activity_rule } = option || {};
  const cta = is_available ? null : (<CheckIcon className={styles.check} />);

  return (
    <BaseSmileLink
      muted={!is_available}
      iconImage={activity_rule.image_url}
      headline={activity_rule.name}
      description={activity_rule.value_description}
      CallToAction={cta}
    />
  );
};

WaysToEarnCard.propTypes = {
  option: PropTypes.shape().isRequired,
};

export default WaysToEarnCard;
