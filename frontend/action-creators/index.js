import {
  REQUEST_SMILE_DIGEST_DATA,
  RECEIVE_SMILE_DIGEST_DATA,
  ERROR_SMILE_DIGEST_DATA,
  CLEAR_SMILE_DIGEST_DATA,
} from '../constants';

/**
 * Create requestSmileDigestData action object
 * @return {Object}
 */
export const requestSmileDigestData = () => ({
  type: REQUEST_SMILE_DIGEST_DATA,
});

/**
 * Create receiveSmileDigestData action objection
 * @param {string} digest Smile digest
 * @param {string} externalCustomerId External customer ID
 * @return {Object}
 */
export const receiveSmileDigestData = (digest, externalCustomerId) => ({
  type: RECEIVE_SMILE_DIGEST_DATA,
  digest,
  externalCustomerId,
});

/**
 * Create errorSmileDigestData action objection
 * @return {Object}
 */
export const errorSmileDigestData = () => ({
  type: ERROR_SMILE_DIGEST_DATA,
});

/**
 * Create clearSmileDigestData action objection
 * @return {Object}
 */
export const clearSmileDigestData = () => ({
  type: CLEAR_SMILE_DIGEST_DATA,
});
