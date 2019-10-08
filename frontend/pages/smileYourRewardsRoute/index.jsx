import React from 'react';
import PropTypes from 'prop-types';
import { Route } from '@shopgate/pwa-common/components';
import { useTheme, i18n } from '@shopgate/engage/core';
import SmileFooter from '../../components/SmileFooter';
import YourRewardsList from './components/YourRwardsList';
import config from '../../config';
import { YOUR_REWARDS_ROUTE } from '../../constants';
import connect from '../connector';

/**
 * @param {number} points Smile points
 * @returns {JSX}
 */
const SmileYourRewardsRoute = ({ points }) => {
  const { colorConfig, loginPageText } = config;
  const { View, AppBar } = useTheme();
  const title = points
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
  points: PropTypes.number,
};

SmileYourRewardsRoute.defaultProps = {
  points: null,
};

export default () => (
  <Route
    pattern={YOUR_REWARDS_ROUTE}
    component={connect(SmileYourRewardsRoute)}
  />
);

