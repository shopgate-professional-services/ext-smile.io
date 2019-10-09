import { createSelector } from 'reselect';
import { getCurrentParams } from '@shopgate/engage/core';
import {
  REDUX_NAMESPACE_SMILE_POINTS_PRODUCTS,
  REDUX_NAMESPACE_SMILE_CUSTOMER,
  REDUX_NAMESPACE_SMILE_YOUR_REWARDS,
  REDUX_NAMESPACE_SMILE_WAYS_TO_EARN,
  REDUX_NAMESPACE_PURCHASE_SMILE_REWARDS,
} from '../constants';

/**
 * Gets info from pointsProducts state extension reducer
 * @param {Object} state state
 * @returns {Object}
 */
export const getSmilePointsProductsState = state =>
  state.extensions[REDUX_NAMESPACE_SMILE_POINTS_PRODUCTS];

/**
 * Gets info from pointsProducts extension reducer
 * @param {Object} state state
 * @returns {Object}
 */
export const getSmilePointsProducts = createSelector(
  getSmilePointsProductsState,
  pointsProductsState => pointsProductsState.pointsProducts
);

/**
 * Gets info from pointsProducts is fetching extension reducer
 * @param {Object} state state
 * @returns {Object}
 */
export const getSmilePointsIsFetching = createSelector(
  getSmilePointsProductsState,
  pointsProductsState => pointsProductsState.isFetching
);

/**
 * Gets info from smileCustomer state extension reducer
 * @param {Object} state state
 * @returns {Object}
 */
export const getSmileCustomerState = state =>
  state.extensions[REDUX_NAMESPACE_SMILE_CUSTOMER];

/**
 * Gets info from smileCustomer extension reducer
 * @param {Object} state state
 * @returns {Object}
 */
export const getSmileCustomer = createSelector(
  getSmileCustomerState,
  smileCustomerState => smileCustomerState.customer
);

/**
 * Gets info from smileCustomer is fetching extension reducer
 * @param {Object} state state
 * @returns {Object}
 */
export const getSmileCustomerIsFetching = createSelector(
  getSmileCustomerState,
  smileCustomerState => smileCustomerState.isFetching
);

/**
 * Gets info from smileCustomer points extension reducer
 * @param {Object} state state
 * @returns {number|null}
 */
export const getSmileCustomerPoints = createSelector(
  getSmileCustomer,
  (customer) => {
    const { points_balance: points = null } = customer || {};

    return points;
  }
);

/**
 * Gets info from smileYourRewards state extension reducer
 * @param {Object} state state
 * @returns {Object}
 */
export const getSmileYourRewardsState = state =>
  state.extensions[REDUX_NAMESPACE_SMILE_YOUR_REWARDS];

/**
 * Gets info from smileWaysToEarn extension reducer
 * @param {Object} state state
 * @returns {Object}
 */
export const getSmileWaysToEarnState = state =>
  state.extensions[REDUX_NAMESPACE_SMILE_WAYS_TO_EARN];

export const getSmileWaysToEarn = createSelector(
  getSmileWaysToEarnState,
  smileWayToEarnState => smileWayToEarnState.waysToEarn
);

export const getSmileWaysToEarnIsFetching = createSelector(
  getSmileWaysToEarnState,
  smileWayToEarnState => smileWayToEarnState.isFetching
);

/**
 * Gets info from purchaseSmileReward extension reducer
 * @param {Object} state state
 * @returns {Object}
 */
export const getPurchaseSmileRewardsState = state =>
  state.extensions[REDUX_NAMESPACE_PURCHASE_SMILE_REWARDS];

/**
 * Get Purchase smile reward
 * @param {Object} state Redux state
 * @param {Object} props Props object
 * @returns {Object}
 */
export const getPurchaseSmileReward = createSelector(
  getPurchaseSmileRewardsState,
  (_, props) => props,
  (purchaseSmileRewardSate, props) => {
    const { rewardId } = props || {};
    return purchaseSmileRewardSate[rewardId] || null;
  }
);

/**
 * Get your rewards
 * @param {Object} state Redux state
 * @returns {Object[]}
 */
export const getSmileYourRewards = createSelector(
  getSmileYourRewardsState,
  (yourRewardsState) => {
    const { rewards = [] } = yourRewardsState || {};

    return rewards;
  }
);

/**
 * Get rewardId from route params
 * @param {Object} state Redux state
 * @returns {Object[]}
 */
export const getRewardIdFromRoute = createSelector(
  getCurrentParams,
  (params) => {
    const { rewardId = null } = params || {};

    return rewardId;
  }
);

/**
 * Get reward using rewardId from route
 * @param {Object} state Redux state
 * @returns {Object[]}
 */
export const getRewardFromRoute = createSelector(
  getRewardIdFromRoute,
  getSmileYourRewards,
  (rewardId, rewards) => {
    if (!(rewardId && rewards.length)) {
      return null;
    }

    return rewards.find(reward => `${reward.id}` === `${rewardId}`) || null;
  }
);
