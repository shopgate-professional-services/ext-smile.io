/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from '@shopgate/pwa-common/components';
import { i18n, useTheme } from '@shopgate/engage/core';
import LoadingIndicator from '@shopgate/pwa-ui-shared/LoadingIndicator';
import I18n from '@shopgate/pwa-common/components/I18n';
import SmileFooter from '../../components/SmileFooter';
import SmilePanel from '../../components/SmilePanel';
import config from '../../config';
import { WAYS_TO_SPEND_ROUTE } from '../../constants';
import styles from './style';
import connect from './connector';

/**
 * @returns {JSX}
 */
const WaysToSpendRoute = ({
  points,
  customerIsFetching,
  options,
  optionsIsFetching,
}) => {
  if (customerIsFetching || optionsIsFetching) {
    return <LoadingIndicator />;
  }

  const { waysToSpend, colorConfig } = config;
  const { View, AppBar } = useTheme();

  const title = points
    ? `${points} ${i18n.text('smile.points')}`
    : '';

  const header = points
    ? `${i18n.text('smile.all_rewards')}`
    : waysToSpend.header;

  const body = options.length ? (
    <SmilePanel
      userPoints={points}
      header={header}
      options={options}
      location={WAYS_TO_SPEND_ROUTE}
    />
  ) :
    (
      <div className={styles.panelContainer}>
        <I18n.Text string="smile.smile_error" />
      </div>
    );

  return (
    <View>
      <AppBar
        title={title}
        backgroundColor={colorConfig.headerBackground}
        textColor={colorConfig.headerFontColor}
      />
      {body}
      <SmileFooter />
    </View>
  );
};

WaysToSpendRoute.propTypes = {
  customerIsFetching: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape()),
  optionsIsFetching: PropTypes.bool,
  points: PropTypes.number,
};

WaysToSpendRoute.defaultProps = {
  customerIsFetching: true,
  options: null,
  optionsIsFetching: true,
  points: null,
};

export default () => (
  <Route
    pattern={WAYS_TO_SPEND_ROUTE}
    component={connect(WaysToSpendRoute)}
  />
);

