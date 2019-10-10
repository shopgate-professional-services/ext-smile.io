import React from 'react';
import PropTypes from 'prop-types';
import { i18n } from '@shopgate/engage/core';
import YourRewardsLink from './components/YourRewardsLink';
import PanelContainer from '../../../../components/PanelContainer';
import YourRewardLink from '../../../../components/YourRewardLink';
import BaseSmileLink from '../../../../components/BaseSmileLink';
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
    <PanelContainer>
      {rewards.length > 1 && (
        <YourRewardsLink rewardCount={rewards.length} />
      )}
      <BaseSmileLink headline={i18n.text('smile.your_latest_reward')} />
      <YourRewardLink reward={rewards[0]} />
    </PanelContainer>
  );
};

YourRewardPanel.propTypes = {
  rewards: PropTypes.arrayOf(PropTypes.shape()),
};

YourRewardPanel.defaultProps = {
  rewards: [],
};

export default connect(YourRewardPanel);
