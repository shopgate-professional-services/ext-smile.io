import React from 'react';
import { Route } from '@shopgate/pwa-common/components';
import { useTheme, i18n } from '@shopgate/engage/core';
import SmileJoinFooter from '../../components/SmileJoinFooter';
import YourRewardDetail from './components/YourRewardDetail';
import config from '../../config';
import { YOUR_REWARD_PATTERN } from '../../constants';

/**
 * @returns {JSX}
 */
const smileYourRewardsRoute = () => {
  const { colorConfig } = config;
  const { View, AppBar } = useTheme();

  return (
    <View>
      <AppBar
        title={i18n.text('smile.your_rewards')}
        backgroundColor={colorConfig.headerBackground}
        textColor={colorConfig.headerFontColor}
      />
      <YourRewardDetail />
      <SmileJoinFooter />
    </View>
  );
};

export default () => (
  <Route
    pattern={YOUR_REWARD_PATTERN}
    component={smileYourRewardsRoute}
  />
);

