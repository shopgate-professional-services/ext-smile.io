import {
  REQUEST_SMILE_DIGEST_DATA,
  RECEIVE_SMILE_DIGEST_DATA,
  ERROR_SMILE_DIGEST_DATA,
  CLEAR_SMILE_DIGEST_DATA,
} from '../constants';

export const requestSmileDigestData = () => ({
  type: REQUEST_SMILE_DIGEST_DATA,
});

export const receiveSmileDigestData = (digest, externalCustomerId) => ({
  type: RECEIVE_SMILE_DIGEST_DATA,
  digest,
  externalCustomerId,
});

export const errorSmileDigestData = () => ({
  type: ERROR_SMILE_DIGEST_DATA,
});

export const clearSmileDigestData = () => ({
  type: CLEAR_SMILE_DIGEST_DATA,
});
