import React from 'react';
import I18n from '@shopgate/pwa-common/components/I18n';
import styles from './style';
import getConfig from '../../../../helpers/getConfig';

const { shopifyAlias } = getConfig();

/**
 * TODO: <div className={styles.icon} /> get the svg icon
 * @returns {JSX}
 */
const Footer = () => (
  <div className={styles.container}>
    <a className={styles.text} href={`https://smile.io?utm_medium=smile-panel&utm_campaign=panel-referral&utm_source=https%3A%2F%2F${shopifyAlias}.myshopify.com`}>
      <I18n.Text string="smile.we_reward" />
    </a>
  </div>
);

export default Footer;
