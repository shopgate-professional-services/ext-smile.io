import React from 'react';
import { Route } from '@shopgate/pwa-common/components';
import { useTheme } from '@shopgate/engage/core';
import SmilePanel from '../../components/SmilePanel';
import SmileJoinFooter from '../../components/SmileJoinFooter';
import config from '../../config';
import { WAYS_TO_EARN_ROUTE } from '../../constants';

/**
 * @returns {JSX}
 */
const WaysToEarnRoute = () => {
  const { waysToEarn, colorConfig } = config;
  const { View, AppBar } = useTheme();

  if (!waysToEarn) {
    return null;
  }

  return (
    <View>
      <AppBar
        title={waysToEarn.appBarTitle}
        backgroundColor={colorConfig.headerBackground}
        textColor={colorConfig.headerFontColor}
      />
      <SmilePanel header={waysToEarn.header} options={waysToEarn.options} />
      <SmileJoinFooter />
    </View>
  );
};

export default () => (
  <Route
    pattern={WAYS_TO_EARN_ROUTE}
    component={WaysToEarnRoute}
  />
);

