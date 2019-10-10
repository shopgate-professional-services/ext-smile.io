import React from 'react';
import I18n from '@shopgate/pwa-common/components/I18n';
import Link from '@shopgate/pwa-common/components/Link';
import { REGISTER_PATH, LOGIN_PATH } from '@shopgate/pwa-common/constants/RoutePaths';
import styles from './style';

/**
 * Smile Footer for ways to earn and ways to spend routes
 * @returns {JSX}
 */
const SmileJoinFooter = () => (
  <div className={styles.container}>
    <Link
      href={REGISTER_PATH}
      className={styles.button}
    >
      <I18n.Text string="smile.join_button" />
    </Link>
    <div className={styles.signIn}>
      <I18n.Text className={styles.haveAccount} string="smile.have_account" />
      <Link
        href={LOGIN_PATH}
        className={styles.underline}
      >
        <I18n.Text string="smile.sign_in_link" />
      </Link>
    </div>
  </div>
);

export default SmileJoinFooter;
