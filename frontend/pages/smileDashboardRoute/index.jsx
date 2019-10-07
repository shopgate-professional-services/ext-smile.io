import React from 'react';
import { Route } from '@shopgate/pwa-common/components';
import { useTheme } from '@shopgate/engage/core';
import config from '../../config';
import Header from './components/Header';
import MemberPanel from './components/MemberPanel';
import PointsPanel from './components/PointsPanel';
import YourRewardPanel from './components/YourRewardsPanel';
import Footer from './components/Footer';
import { SMILE_LOGIN_ROUTE } from '../../constants';
import styles from './style';

/**
 * @returns {JSX}
 */
const SmileLoginRoute = () => {
  const { colorConfig, loginPageText } = config;
  const { headerText, pointsText, memberText } = loginPageText || {};
  const { View, AppBar } = useTheme();

  return (
    <View>
      <AppBar
        backgroundColor={colorConfig.headerBackground}
        textColor={colorConfig.headerFontColor}
      />
      <div>
        <div className={styles.container}>
          <div className={styles.headerContainer}>
            <Header headerText={headerText} />
          </div>
          <div className={styles.pannelContainer}>
            <div className={styles.becomeContainer}>
              <MemberPanel memberText={memberText} />
            </div>
            <div className={styles.pointsContainer}>
              <PointsPanel
                pointsText={pointsText}
              />
            </div>
            <YourRewardPanel />
          </div>
          <div className={styles.footer}>
            <Footer />
          </div>
        </div>
      </div>
    </View>
  );
};

export default () => (
  <Route
    pattern={SMILE_LOGIN_ROUTE}
    component={SmileLoginRoute}
  />
);

