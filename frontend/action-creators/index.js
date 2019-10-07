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
  REQUEST_SMILE_WAYS_TO_EARN,
  RECEIVE_SMILE_WAYS_TO_EARN,
  ERROR_SMILE_WAYS_TO_EARN,
  REQUEST_PURCHASE_SMILE_REWARD,
  RECEIVE_PURCHASE_SMILE_REWARD_RESPONSE,
  ERROR_PURCHASE_SMILE_REWARD,
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

/**
 * Request smile ways to earn
 * @return {Object}
 */
export const requestSmileWaysToEarn = () => ({
  type: REQUEST_SMILE_WAYS_TO_EARN,
});

/**
 * Receive smile ways to earn
 * @param {Object[]} waysToEarn Array of ways to earn objects
 * @return {Object}
 */
export const receiveSmileWaysToEarn = waysToEarn => ({
  type: RECEIVE_SMILE_WAYS_TO_EARN,
  waysToEarn,
});

/**
 * Error smile ways to earn
 * @return {Object}
 */
export const errorSmileWaysToEarn = () => ({
  type: ERROR_SMILE_WAYS_TO_EARN,
});

/**
 * Request purchase smile reward
 * @param {number|string} rewardId Reward Id
 * @return {Object}
 */
export const requestPurchaseSmileReward = rewardId => ({
  type: REQUEST_PURCHASE_SMILE_REWARD,
  rewardId,
});

/**
 * Receive purchase smile reward response
 * @param {number|string} rewardId Reward Id
 * @param {Object} pointsPurchase Record of pointsPurchase
 * @return {Object}
 */
export const receivePurchaseSmileRewardResponse = (rewardId, pointsPurchase) => ({
  type: RECEIVE_PURCHASE_SMILE_REWARD_RESPONSE,
  rewardId,
  pointsPurchase,
});

/**
 * Error purchase smile reward
 * @param {number|string} rewardId Reward Id
 * @return {Object}
 */
export const errorPurchaseSmileReward = rewardId => ({
  type: ERROR_PURCHASE_SMILE_REWARD,
  rewardId,
});
/**
 * Create requestSmileDigestData action object
 * @return { Object }
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
