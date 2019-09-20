import { PipelineRequest, logger } from '@shopgate/engage/core';
import { SMILE_DIGEST_PIPELINE } from '../constants';
import {
  requestSmileDigestData,
  receiveSmileDigestData,
  errorSmileDigestData,
} from '../action-creators';

export const fetchSmileDataDigest = () => (dispatch) => {
  dispatch(requestSmileDigestData());
  new PipelineRequest(SMILE_DIGEST_PIPELINE)
    .dispatch()
    .then(({ customerDigest, externalCustomerId }) => {
      dispatch(receiveSmileDigestData(customerDigest, externalCustomerId));
    })
    .catch((error) => {
      logger.error(error);
      dispatch(errorSmileDigestData());
    });
};
