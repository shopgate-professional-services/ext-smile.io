import React from 'react';
import PropTypes from 'prop-types';
import { Route } from '@shopgate/pwa-common/components';
import { useTheme } from '@shopgate/engage/core';
import SmilePanel from '../../components/SmilePanel';
import SmileJoinFooter from '../../components/SmileJoinFooter';
import getConfig from '../../helpers/getConfig';
import { WAYS_TO_SPEND_ROUTE } from '../../constants';
import connect from './connector';

/**
 * @returns {JSX}
 */
const waysToSpendRoute = ({ options }) => {
  if (!options) {
    return null;
  }
  const { waysToSpend } = getConfig();
  const { View, AppBar } = useTheme();
  return (
    <View>
      <AppBar title={waysToSpend.appBarTitle} />
      <SmilePanel header={waysToSpend.header} options={options} />
      <SmileJoinFooter />
    </View>
  );
};

waysToSpendRoute.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape()),
};

waysToSpendRoute.defaultProps = {
  options: null,
};

export default () => (
  <Route
    pattern={WAYS_TO_SPEND_ROUTE}
    component={connect(waysToSpendRoute)}
  />
);

