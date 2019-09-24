import React from 'react';
import { Route } from '@shopgate/pwa-common/components';
import { useTheme } from '@shopgate/engage/core';
import getConfig from '../../helpers/getConfig';
import Header from './components/Header';
import MemberPanel from './components/MemberPanel';
import PointsPanel from './components/PointsPanel';
import Footer from './components/Footer';
import { SMILE_LOGIN_ROUTE } from '../../constants';
import styles from './style';

/**
 * @returns {JSX}
 */
const smileLoginRoute = () => {
  const { colorConfig, loginPageText, imageSrcs } = getConfig();
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
          <div className={styles.footerContainer}>
            <div className={styles.pannelContainer}>
              <div className={styles.becomeContainer}>
                <MemberPanel memberText={memberText} />
              </div>
              <div className={styles.pointsContainer}>
                <PointsPanel
                  pointsText={pointsText}
                  imgSrcs={imageSrcs}
                />
              </div>
            </div>
            <div className={styles.footer}>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </View>
  );
};

export default () => (
  <Route
    pattern={SMILE_LOGIN_ROUTE}
    component={smileLoginRoute}
  />
);

