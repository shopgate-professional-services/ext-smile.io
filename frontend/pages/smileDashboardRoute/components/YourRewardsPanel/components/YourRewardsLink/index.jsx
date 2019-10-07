import React from 'react';
import { ChevronIcon } from '@shopgate/engage/components';
import BaseSmileLink from '../../../../../../components/BaseSmileLink';

const YourRewardsLink = ({ rewardCount }) => (
  <BaseSmileLink
    headline={'Your Rewards'}
    description={`You have ${rewardCount} rewards available`}
    CallToAction={ChevronIcon}
  />
)

export default YourRewardsLink;
