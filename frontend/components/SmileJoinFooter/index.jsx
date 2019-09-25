import React from 'react';
import I18n from '@shopgate/pwa-common/components/I18n';
import styles from './style';
import getConfig from '../../helpers/getConfig';

const { shopifyAlias } = getConfig();

/**
 * Smile Footer for ways to earn and ways to spend routes
 * @returns {JSX}
 */
const SmileJoinFooter = () => (
  <div className={styles.container}>
    <a className={styles.button} href={`https://${shopifyAlias}.myshopify.com/account/register`}>
      <I18n.Text string="smile.join_button" />
    </a>
    <div>
      <I18n.Text string="smile.have_account" />
      <a style={{ textDecoration: 'underline' }} href={`https://${shopifyAlias}.myshopify.com/account/login`}>
        <I18n.Text string="smile.sign_in_link" />
      </a>
    </div>
  </div>
);

export default SmileJoinFooter;
