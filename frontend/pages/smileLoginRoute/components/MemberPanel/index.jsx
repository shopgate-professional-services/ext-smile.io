import React from 'react';
import PropTypes from 'prop-types';
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
  const { header, paragraph } = memberText || {};
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {header}
      </div>
      <div className={styles.paragraph}>
        {paragraph}
      </div>
      <a className={styles.joinButton} href="https://merlins-magnificent-magic-shop.myshopify.com/account/register">Join now</a>
      <div className={styles.signIn}>
        Already have an account?&nbsp
        <a href="https://merlins-magnificent-magic-shop.myshopify.com/account/login">SignIn</a>
      </div>
    </div>
  );
};

MemberPanel.propTypes = {
  memberText: PropTypes.shape().isRequired,
};

export default MemberPanel;
