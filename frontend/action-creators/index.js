import {
  REQUEST_SMILE_POINTS_PRODUCTS,
  RECEIVE_SMILE_POINTS_PRODUCTS,
  ERROR_SMILE_POINTS_PRODUCTS,
  REQUEST_SMILE_DIGEST_DATA,
  RECEIVE_SMILE_DIGEST_DATA,
  ERROR_SMILE_DIGEST_DATA,
  CLEAR_SMILE_DIGEST_DATA,
} from '../constants';

/**
 * Request smile pointsProducts
 * @param {string} id customer id
 * @returns {Object}
 */
export const requestPointsProducts = () => ({
  type: REQUEST_SMILE_POINTS_PRODUCTS,
});

/**
 * Receives smile pointsProducts
 * @param {Array} pointsProducts pointsProducts
 * @returns {Object }
 */
export const receivePointsProducts = pointsProducts => ({
  type: RECEIVE_SMILE_POINTS_PRODUCTS,
  pointsProducts,
});

/**
 * Error requesting smile pointsProducts
 * @returns {Object}
 */
export const errorPointsProducts = () => ({
  type: ERROR_SMILE_POINTS_PRODUCTS,
});

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
