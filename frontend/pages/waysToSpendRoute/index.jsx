import React from 'react';
import PropTypes from 'prop-types';
import { Route } from '@shopgate/pwa-common/components';
import { useTheme } from '@shopgate/engage/core';
import SmilePanel from '../../components/SmilePanel';
import SmileJoinFooter from '../../components/SmileJoinFooter';
import config from '../../config';
import { WAYS_TO_SPEND_ROUTE } from '../../constants';
import connect from './connector';

/**
 * @returns {JSX}
 */
const WaysToSpendRoute = ({ options }) => {
  if (!options) {
    return null;
  }

  const { waysToSpend, colorConfig } = config;
  const { View, AppBar } = useTheme();

  return (
    <View>
      <AppBar
        title={waysToSpend.appBarTitle}
        backgroundColor={colorConfig.headerBackground}
        textColor={colorConfig.headerFontColor}
      />
      <SmilePanel header={waysToSpend.header} options={options} />
      <SmileJoinFooter />
    </View>
  );
};

WaysToSpendRoute.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape()),
};

WaysToSpendRoute.defaultProps = {
  options: null,
};

export default () => (
  <Route
    pattern={WAYS_TO_SPEND_ROUTE}
    component={connect(WaysToSpendRoute)}
  />
);

