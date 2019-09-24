import { PipelineRequest, logger } from '@shopgate/engage/core';
import { SMILE_DIGEST_PIPELINE, SWEETTOOTH_INIT_ENDPOINT } from '../constants';
import {
  requestSmileDigestData,
  receiveSmileDigestData,
  errorSmileDigestData,
  clearSmileDigestData,
} from '../action-creators';
import getConfig from '../helpers/getConfig';

const { smileJavascriptSdkSrc, smileChannelApiKey } = getConfig();

/**
 *
 * @return {Function}
 */
export const fetchSmileDataDigest = () => (dispatch) => {
  dispatch(requestSmileDigestData());

  new PipelineRequest(SMILE_DIGEST_PIPELINE)
    .dispatch()
    .then(({ customerDigest, customerId }) => {
      dispatch(receiveSmileDigestData(customerDigest, customerId));
    })
    .catch((error) => {
      logger.error(error);
      dispatch(errorSmileDigestData());
    });
};

export const logoutSmile = () => (dispatch) => {
  dispatch(clearSmileDigestData());

  if (window.SmileUI) {
    window.SmileUI.destroy();
  }
};

/**
 * Mount Smile script of reinitialize
 * @param {string} externalCustomerId External customer id
 * @param {string} digest Smile digest
 * @return {Function}
 */
export const mountSmileScript = (externalCustomerId, digest) => async () => {
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
    const response = await fetch(`${SWEETTOOTH_INIT_ENDPOINT}?external_customer_id=${externalCustomerId}&channel_api_key=${smileChannelApiKey}&customer_auth_digest=${digest}`);
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

