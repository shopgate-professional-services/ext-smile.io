import React from 'react';
import styles from './style';
import getConfig from '../../helpers/getConfig';

const { shopifyAlias } = getConfig();

/**
 * Smile Footer for ways to earn and ways to spend routes
 * @returns {JSX}
 */
const SmileJoinFooter = () => (
  <div className={styles.container}>
    <a className={styles.button} href={`https://${shopifyAlias}.myshopify.com/account/register`}>Join now</a>
    <div className={styles.signIn}>
      {'Already have an account? '}
      <a style={{ textDecoration: 'underline' }} href={`https://${shopifyAlias}.myshopify.com/account/login`}>Sign In</a>
    </div>
  </div>
);

export default SmileJoinFooter;
