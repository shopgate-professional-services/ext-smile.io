import React from 'react';
import PropTypes from 'prop-types';
import { LoadingIndicator, Route } from '@shopgate/engage/components';
import { useTheme } from '@shopgate/engage/core';
import config from '../../config';
import Header from './components/Header';
import MemberPanel from './components/MemberPanel';
import PointsPanel from './components/PointsPanel';
import YourRewardPanel from './components/YourRewardsPanel';
import SmileDefaultFooter from '../../components/SmileFooter/components/SmileDefaultFooter';
import { SMILE_DASHBOARD_ROUTE } from '../../constants';
import styles from './style';
import connect from '../connector';

/**
 * @param {number|null} points Smile points
 * @param {boolean} haveSmileCustomer Smile customer exists
 * @param {boolean} smileCustomerIsFetching Smile customer is fetching
 * @returns {JSX}
 */
const SmileLoginRoute = ({ points, haveSmileCustomer, smileCustomerIsFetching }) => {
  const { colorConfig, loginPageText } = config;
  const { headerText, pointsText, memberText } = loginPageText || {};
  const { View, AppBar } = useTheme();

  return (
    <View>
      <AppBar
        backgroundColor={colorConfig.headerBackground}
        textColor={colorConfig.headerFontColor}
        right={null}
      />
      {smileCustomerIsFetching ? (<LoadingIndicator />) :
        (
          <div >
            <div className={styles.container}>
              <div className={styles.headerContainer}>
                <Header
                  headerText={headerText}
                  points={points}
                  haveSmileCustomer={haveSmileCustomer}
                />
              </div>
              <div className={styles.panelContainer}>
                <MemberPanel
                  memberText={memberText}
                  haveSmileCustomer={haveSmileCustomer}
                />
                <PointsPanel
                  pointsText={pointsText}
                  points={points}
                  haveSmileCustomer={haveSmileCustomer}
                />
                <YourRewardPanel />
              </div>
            </div>
            <SmileDefaultFooter />
          </div>
        )
      }
    </View>
  );
};

SmileLoginRoute.propTypes = {
  haveSmileCustomer: PropTypes.bool,
  points: PropTypes.number,
  smileCustomerIsFetching: PropTypes.bool,
};

SmileLoginRoute.defaultProps = {
  haveSmileCustomer: false,
  points: null,
  smileCustomerIsFetching: false,
};

export default () => (
  <Route
    pattern={SMILE_DASHBOARD_ROUTE}
    component={connect(SmileLoginRoute)}
  />
);

