import React from 'react';
import YourRewardsLink from './components/YourRewardsLink';
import connect from './connector';

const YourRewardPanel = ({ rewards }) => {
  if (!rewards.length) {
    return null;
  }

  return (
    <div>
      <YourRewardsLink rewardCount={rewards.length} />
    </div>
  );
};

export default connect(YourRewardPanel);
