import React from 'react';
import PropTypes from 'prop-types';
import { i18n } from '@shopgate/engage/core';
import SmileChevron from '../../../../../../components/SmileChevron';
import BaseSmileLink from '../../../../../../components/BaseSmileLink';
import { YOUR_REWARDS_ROUTE } from '../../../../../../constants';

/**
 * Get reward or rewards based on number
 * @param {number} number Number of rewards
 * @return {string}
 */
const getRewardLabel = (number) => {
  if (number === 1) {
    return i18n.text('smile.reward');
  }
  return i18n.text('smile.rewards');
}

/**
 * YourRewardsLink component
 * @param {number} rewardCount Number of rewards
 * @return {JSX}
 */
const YourRewardsLink = ({ rewardCount }) => (
  <BaseSmileLink
    headline={i18n.text('smile.your_rewards')}
    description={`${i18n.text('smile.you_have')} ${rewardCount} ${getRewardLabel(rewardCount)} ${i18n.text('smile.available')}`}
    CallToAction={SmileChevron}
    href={YOUR_REWARDS_ROUTE}
  />
);

YourRewardsLink.propTypes = {
  rewardCount: PropTypes.number,
};

YourRewardsLink.defaultProps = {
  rewardCount: 0,
};

export default YourRewardsLink;
