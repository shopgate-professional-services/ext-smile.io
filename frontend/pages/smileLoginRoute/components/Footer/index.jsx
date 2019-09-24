import React from 'react';
import styles from './style';
import getConfig from '../../../../helpers/getConfig';

const { shopifyAlias } = getConfig();

/**
 * @returns {JSX}
 */
const Footer = () => (
  <div className={styles.containers}>
    <div className={styles.icon} />
    <a className={styles.text} href={`https://smile.io?utm_medium=smile-panel&utm_campaign=panel-referral&utm_source=https%3A%2F%2F${shopifyAlias}.myshopify.com`}>
      We reward with Smile
    </a>
  </div>
);

export default Footer;