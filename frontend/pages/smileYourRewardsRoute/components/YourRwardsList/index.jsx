import React from 'react';
import PropTypes from 'prop-types';
import { i18n } from '@shopgate/engage/core';
import RewardLink from '../../../../components/YourRewards/RewardLink';
import connect from './connector';
import styles from './styles';

/**
 * YourRewardList component
 * @param {Object[]} rewards Reward objects
 * @return {JSX}
 */
const YourRewardList = ({ rewards }) => (
  <div className={styles.container}>
    <h1>{i18n.text('smile.your_rewards')}</h1>
    {
      rewards.map(reward => <RewardLink reward={reward} />)
    }
  </div>
);

YourRewardList.propTypes = {
  rewards: PropTypes.arrayOf(PropTypes.shape()),
};

YourRewardList.defaultProps = {
  rewards: [],
};

export default connect(YourRewardList);
