import React from 'react';
import PropTypes from 'prop-types';
import { Route } from '@shopgate/pwa-common/components';
import { useTheme } from '@shopgate/engage/core';
import LoadingIndicator from '@shopgate/pwa-ui-shared/LoadingIndicator';
import I18n from '@shopgate/pwa-common/components/I18n';
import SmilePanel from '../../components/SmilePanel';
import SmileJoinFooter from '../../components/SmileJoinFooter';
import config from '../../config';
import { WAYS_TO_SPEND_ROUTE } from '../../constants';
import styles from './style';
import connect from './connector';

/**
 * @returns {JSX}
 */
const WaysToSpendRoute = ({ options, isFetching }) => {
  if (isFetching) {
    return <LoadingIndicator />;
  }

  const { waysToSpend, colorConfig } = config;
  const { View, AppBar } = useTheme();

  if (!options || options.length < 1) {
    return (
      <View>
        <AppBar
          title={waysToSpend.appBarTitle}
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
        title={waysToSpend.appBarTitle}
        backgroundColor={colorConfig.headerBackground}
        textColor={colorConfig.headerFontColor}
      />
      <SmilePanel header={waysToSpend.header} options={options} location={WAYS_TO_SPEND_ROUTE} />
      <SmileJoinFooter />
    </View>
  );
};

WaysToSpendRoute.propTypes = {
  isFetching: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape()),
};

WaysToSpendRoute.defaultProps = {
  isFetching: true,
  options: null,
};

export default () => (
  <Route
    pattern={WAYS_TO_SPEND_ROUTE}
    component={connect(WaysToSpendRoute)}
  />
);

