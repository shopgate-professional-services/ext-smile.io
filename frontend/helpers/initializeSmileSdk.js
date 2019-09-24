import { logger } from '@shopgate/pwa-core';
import {
  smileJavascriptSdkSrc,
  smileChannelApiKey,
  sweettoothInitEndpoint,
} from '../config';

/**
 * Mount Smile script of reinitialize
 * @param {string} externalCustomerId External customer id
 * @param {string} digest Smile digest
 */
export default async (externalCustomerId, digest) => {
  if (!(window.Smile && window.SmileUI)) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = smileJavascriptSdkSrc;
    const parent = document.getElementsByTagName('head')[0];
    parent.appendChild(script);
    return;
  }

  try {
    const response = await fetch(`${sweettoothInitEndpoint}?external_customer_id=${externalCustomerId}&channel_api_key=${smileChannelApiKey}&customer_auth_digest=${digest}`);
    const jsonResponse = await response.json();

    window.Smile
      .setIdentifiedCustomer({
        auth_token: jsonResponse.customer_authentication_token,
        customer: jsonResponse.customer,
      });

    window.SmileUI.init({ channel_key: smileChannelApiKey });
  } catch (error) {
    logger.error(error);
  }
};
