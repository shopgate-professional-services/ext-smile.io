import React from 'react';
import PropTypes from 'prop-types';
import I18n from '@shopgate/pwa-common/components/I18n';
import Link from '@shopgate/pwa-common/components/Link';
import { REGISTER_PATH, LOGIN_PATH } from '@shopgate/pwa-common/constants/RoutePaths';
import styles from './style';

/**
 * Member component Smile Login Panel
 * @param {Object} memberText Object containing header info
 * @return {JSX}
 */
const MemberPanel = ({ memberText }) => {
  if (!memberText) {
    return null;
  }

  const { header, paragraph } = memberText;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {header}
      </div>
      <div className={styles.paragraph}>
        {paragraph}
      </div>
      <Link
        href={REGISTER_PATH}
        className={styles.joinButton}
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
};

MemberPanel.propTypes = {
  memberText: PropTypes.shape().isRequired,
};

export default MemberPanel;
