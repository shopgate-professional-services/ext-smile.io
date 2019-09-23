import React from 'react';
import { Route } from '@shopgate/pwa-common/components';
import { useTheme } from '@shopgate/engage/core';
import SmilePanel from '../../components/SmilePanel';
import SmileJoinFooter from '../../components/SmileJoinFooter';
import getConfig from '../../helpers/getConfig';
import { WAYS_TO_EARN_ROUTE } from '../../constants';
import waysToSpendRoute from '../waysToSpendRoute';

/**
 * @returns {JSX}
 */
const waysToEarnRoute = () => {
  const { waysToEarn } = getConfig();
  const { View, AppBar } = useTheme();
  return (
    <View>
      <AppBar title={waysToEarn.appBarTitle} />
      <SmilePanel header={waysToEarn.header} options={waysToEarn.options} />
      <SmileJoinFooter />
    </View>
  );
};

export default () => (
  <Route
    pattern={WAYS_TO_EARN_ROUTE}
    component={waysToEarnRoute}
  />
);

