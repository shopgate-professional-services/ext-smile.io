import React from 'react';
import { Route } from '@shopgate/pwa-common/components';
import { useTheme, i18n } from '@shopgate/engage/core';
import SmileJoinFooter from '../../components/SmileJoinFooter';
import YourRewardsList from './components/YourRwardsList';
import config from '../../config';
import { YOUR_REWARDS_ROUTE } from '../../constants';

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
      <YourRewardsList />
      <SmileJoinFooter />
    </View>
  );
};

export default () => (
  <Route
    pattern={YOUR_REWARDS_ROUTE}
    component={smileYourRewardsRoute}
  />
);

