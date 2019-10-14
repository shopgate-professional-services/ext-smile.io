import React from 'react';
import PropTypes from 'prop-types';
import { i18n, useTheme } from '@shopgate/engage/core';
import { I18n, LoadingIndicator, Route } from '@shopgate/engage/components';
import SmilePanel from '../../components/SmilePanel';
import SmileFooter from '../../components/SmileFooter';
import config from '../../config';
import { WAYS_TO_EARN_ROUTE } from '../../constants';
import styles from './style';
import connect from './connector';

/**
 * @param {boolean} haveSmileCustomer Smile customer exists
 * @param {number|null} points Smile points
 * @param {boolean} customerIsFetching Is smile customer fetching
 * @param {Object[]} options Ways to earn objects
 * @param {boolean} optionsIsFetching Are options fetching
 * @returns {JSX}
 */
const WaysToEarnRoute = ({
  haveSmileCustomer,
  points,
  customerIsFetching,
  options,
  optionsIsFetching,
}) => {
  if (customerIsFetching || optionsIsFetching) {
    return <LoadingIndicator />;
  }

  const { colorConfig, loginPageText } = config;
  const { View, AppBar } = useTheme();
  const title = haveSmileCustomer
    ? `${points || 0} ${i18n.text('smile.points')}`
    : loginPageText.headerText.primaryText;

  const body = options.length ? (
    <SmilePanel
      header={`${i18n.text('smile.ways_to_earn')}`}
      options={options}
      location={WAYS_TO_EARN_ROUTE}
      haveSmileCustomer={haveSmileCustomer}
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

WaysToEarnRoute.propTypes = {
  customerIsFetching: PropTypes.bool,
  haveSmileCustomer: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape()),
  optionsIsFetching: PropTypes.bool,
  points: PropTypes.number,
};

WaysToEarnRoute.defaultProps = {
  customerIsFetching: true,
  haveSmileCustomer: false,
  options: null,
  optionsIsFetching: true,
  points: null,
};

export default () => (
  <Route
    pattern={WAYS_TO_EARN_ROUTE}
    component={connect(WaysToEarnRoute)}
  />
);

