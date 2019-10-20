import React from 'react';
import PropTypes from 'prop-types';
import { Route } from '@shopgate/engage/components';
import { useTheme, i18n } from '@shopgate/engage/core';
import SmileFooter from '../../components/SmileFooter';
import YourRewardsList from './components/YourRewardsList';
import config from '../../config';
import { YOUR_REWARDS_ROUTE } from '../../constants';
import connect from '../connector';

/**
 * @param {boolean} haveSmileCustomer Smile customer exists
 * @param {number} points Smile points
 * @returns {JSX}
 */
const SmileYourRewardsRoute = ({ haveSmileCustomer, points = 0 }) => {
  const { colorConfig, loginPageText } = config;
  const { View, AppBar } = useTheme();
  const title = haveSmileCustomer
    ? `${points} ${i18n.text('smile.points')}`
    : loginPageText.headerText.primaryText;

  return (
    <View>
      <AppBar
        title={title}
        backgroundColor={colorConfig.headerBackground}
        textColor={colorConfig.headerFontColor}
        right={null}
      />
      <YourRewardsList />
      <SmileFooter />
    </View>
  );
};

SmileYourRewardsRoute.propTypes = {
  haveSmileCustomer: PropTypes.bool,
  points: PropTypes.number,
};

SmileYourRewardsRoute.defaultProps = {
  haveSmileCustomer: false,
  points: null,
};

export default () => (
  <Route
    pattern={YOUR_REWARDS_ROUTE}
    component={connect(SmileYourRewardsRoute)}
  />
);

