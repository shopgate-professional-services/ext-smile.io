/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from '@shopgate/pwa-common/components';
import { useTheme } from '@shopgate/engage/core';
import LoadingIndicator from '@shopgate/pwa-ui-shared/LoadingIndicator';
import I18n from '@shopgate/pwa-common/components/I18n';
import SmilePanel from '../../components/SmilePanel';
import SmileFooter from '../../components/SmileFooter';
import config from '../../config';
import { WAYS_TO_EARN_ROUTE } from '../../constants';
import styles from './style';
import connect from './connector';

/**
 * @returns {JSX}
 */
const WaysToEarnRoute = ({
  customer,
  customerIsFetching,
  options,
  optionsIsFetching,
}) => {
  if (customerIsFetching || optionsIsFetching) {
    return <LoadingIndicator />;
  }

  const { points_balance } = customer || {};
  let title = '';

  if (points_balance) {
    const value = points_balance.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    title = `${value} Points`;
  }

  const { waysToEarn, colorConfig } = config;
  const { View, AppBar } = useTheme();

  if (!options || options.length < 1) {
    return (
      <View>
        <AppBar
          title={title}
          backgroundColor={colorConfig.headerBackground}
          textColor={colorConfig.headerFontColor}
        />
        <div className={styles.panelContainer}>
          <I18n.Text string="smile.smile_error" />
        </div>
      </View>
    );
  }

  return (
    <View>
      <AppBar
        title={title}
        backgroundColor={colorConfig.headerBackground}
        textColor={colorConfig.headerFontColor}
      />
      <SmilePanel header={waysToEarn.header} options={options} location={WAYS_TO_EARN_ROUTE} />
      <SmileFooter />
    </View>
  );
};

WaysToEarnRoute.propTypes = {
  customer: PropTypes.shape(),
  customerIsFetching: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape()),
  optionsIsFetching: PropTypes.bool,
};

WaysToEarnRoute.defaultProps = {
  customer: null,
  customerIsFetching: true,
  options: null,
  optionsIsFetching: true,
};

export default () => (
  <Route
    pattern={WAYS_TO_EARN_ROUTE}
    component={connect(WaysToEarnRoute)}
  />
);

