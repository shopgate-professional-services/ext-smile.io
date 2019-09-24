import {
  REQUEST_SMILE_POINTS_PRODUCTS,
  RECEIVE_SMILE_POINTS_PRODUCTS,
  ERROR_SMILE_POINTS_PRODUCTS,
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
