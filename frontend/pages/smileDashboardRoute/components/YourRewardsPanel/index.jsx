import React from 'react';
import PropTypes from 'prop-types';
import { i18n } from '@shopgate/engage/core';
import YourRewardsLink from './components/YourRewardsLink';
import RewardLink from '../../../../components/YourRewards/RewardLink';
import BaseSmileLink from '../../../../components/BaseSmileLink';
import styles from './styles';
import connect from './connector';

/**
 * YourRewardPanel component
 * @param {Object[]} rewards Reward objects
 * @return {JSX}
 */
const YourRewardPanel = ({ rewards }) => {
  if (!rewards.length) {
    return null;
  }

  return (
    <div className={styles.yourPointsContainer}>
      <YourRewardsLink rewardCount={rewards.length} />
      <BaseSmileLink headline={i18n.text('smile.your_latest_reward')} />
      <RewardLink reward={rewards[0]} />
    </div>
  );
};

YourRewardPanel.propTypes = {
  rewards: PropTypes.arrayOf(PropTypes.shape()),
};

YourRewardsLink.defaultProps = {
  rewards: [],
};

export default connect(YourRewardPanel);
