import {
  REQUEST_SMILE_POINTS_PRODUCTS,
  RECEIVE_SMILE_POINTS_PRODUCTS,
  ERROR_SMILE_POINTS_PRODUCTS,
  REQUEST_SMILE_CUSTOMER,
  RECEIVE_SMILE_CUSTOMER,
  ERROR_SMILE_CUSTOMER,
  CLEAR_SMILE_CUSTOMER,
  REQUEST_SMILE_YOUR_REWARDS,
  RECEIVE_SMILE_YOUR_REWARDS,
  ERROR_SMILE_YOUR_REWARDS,
  CLEAR_SMILE_YOUR_REWARDS,
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
 * Request smile customer
 * @return {Object}
 */
export const requestSmileCustomer = () => ({
  type: REQUEST_SMILE_CUSTOMER,
});

/**
 * Receive smile customer
 * @param {Object} customer Smile customer object
 * @return {Object}
 */
export const receiveSmileCustomer = customer => ({
  type: RECEIVE_SMILE_CUSTOMER,
  customer,
});

/**
 * Error requesting smile customer
 * @return {Object}
 */
export const errorSmileCustomer = () => ({
  type: ERROR_SMILE_CUSTOMER,
});

/**
 * Error requesting smile customer
 * @return {Object}
 */
export const clearSmileCustomer = () => ({
  type: CLEAR_SMILE_CUSTOMER,
});

/**
 * Request Smile Your Rewards
 * @return {Object}
 */
export const requestSmileYourRewards = () => ({
  type: REQUEST_SMILE_YOUR_REWARDS,
});

/**
 * Receive Smile Your Rewards
 * @param {Object[]} rewards Smile rewards that have been purchased
 * @return {Object}
 */
export const receiveSmileYourRewards = rewards => ({
  type: RECEIVE_SMILE_YOUR_REWARDS,
  rewards,
});

/**
 * Error Smile Your Rewards
 * @return {Object}
 */
export const errorSmileYourRewards = () => ({
  type: ERROR_SMILE_YOUR_REWARDS,
});

/**
 * Clear Smile Your Rewards
 * @return {Object}
 */
export const clearSmileYourRewards = () => ({
  type: CLEAR_SMILE_YOUR_REWARDS,
});
