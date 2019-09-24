import { PipelineRequest, logger } from '@shopgate/engage/core';
import { SMILE_DIGEST_PIPELINE } from '../constants';
import {
  requestSmileDigestData,
  receiveSmileDigestData,
  errorSmileDigestData,
  clearSmileDigestData,
} from '../action-creators';

/**
 * Fetch Smile Data Digest
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

/**
 * Logout Smile user
 * @return {Function}
 */
export const logoutSmile = () => (dispatch) => {
  dispatch(clearSmileDigestData());

  if (window.SmileUI) {
    window.SmileUI.destroy();
  }
};

