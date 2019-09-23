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
  const { colorConfig, loginPageText, imgSrcs } = getConfig();
  const { headerText, pointsText, memberText } = loginPageText || {};
  const { View, AppBar } = useTheme();
  return (
    <View>
      <AppBar
        backGroundColor={colorConfig.headerBackground}
        textColor={colorConfig.headerFontColor}
      />
      <div>
        <div className={styles.container}>
          <Header headerText={headerText} />
          <div className={styles.footerContainer}>
            <div className={styles.pannelContainer}>
              <MemberPanel className={styles.memberContainer} memberText={memberText} />
              <PointsPanel
                className={styles.pointsContainer}
                pointsText={pointsText}
                imgSrcs={imgSrcs}
              />
            </div>
            <Footer className={styles.footer} />
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

