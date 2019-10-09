import React from 'react';
import PropTypes from 'prop-types';
import { ActionButton } from '@shopgate/engage/components';
import I18n from '@shopgate/pwa-common/components/I18n';
import { useNavigation } from '@shopgate/engage/core';
import connect from './connector';
import styles from './style';
import { YOUR_REWARD_ROUTE } from '../../../../constants';

/**
 * @param {string} rewardId rewardId
 * @returns {JSX}
 */
const RedeemButton = ({ rewardId, redeemReward, reward }) => {
  const { isFetching } = reward || {};

  /**
   * Dispatches redemptions
   */
  const handleClick = () => {
    redeemReward(rewardId);
  };

  return (
    <ActionButton
      onClick={handleClick}
      className={styles.button}
      loading={isFetching}
    >
      <I18n.Text string="smile.redeem" />
    </ActionButton>
  );
};

RedeemButton.propTypes = {
  rewardId: PropTypes.number.isRequired,
  redeemReward: PropTypes.func,
  reward: PropTypes.shape(),
};

RedeemButton.defaultProps = {
  redeemReward: () => { },
  reward: null,
};

export default connect(RedeemButton);
