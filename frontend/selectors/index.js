import { createSelector } from 'reselect';
import { getCurrentParams, getCurrentRoute } from '@shopgate/engage/core';
import {
  REDUX_NAMESPACE_SMILE_POINTS_PRODUCTS,
  REDUX_NAMESPACE_SMILE_CUSTOMER,
  REDUX_NAMESPACE_SMILE_YOUR_REWARDS,
  REDUX_NAMESPACE_SMILE_WAYS_TO_EARN,
  REDUX_NAMESPACE_PURCHASE_SMILE_REWARDS,
  TAB_BAR_BLACKLIST,
} from '../constants';
import { fixedDashboardButtonUrlBlacklist, showFixedDashboardButton } from '../config';

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
 * Gets info for next pointsProduct
 * @param {Object} state state
 * @returns {Object}
 */
export const getNextPointsProduct = createSelector(
  getSmilePointsProducts,
  (pointsProducts) => {
    if (!(Array.isArray(pointsProducts) && pointsProducts.length)) {
      return null;
    }

    const sortedPointsProducts = pointsProducts
      .filter(pointsProduct => (
        !!pointsProduct && typeof pointsProduct === 'object' && pointsProduct.points_price
      ))
      .sort((first, second) => (
        first.points_price - second.points_price
      ));

    return sortedPointsProducts[0] || null;
  }
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
  (_, { rewardId }) => rewardId,
  (purchaseSmileRewardSate, rewardId) => purchaseSmileRewardSate[rewardId] || null
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
    return rewards.filter(reward => !reward.used_at);
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

/**
 * Determines if button should be shown
 * @param {Object} state Redux state
 * @returns {Object}
 */
export const shouldShowButton = createSelector(
  getCurrentRoute,
  route => (
    showFixedDashboardButton
    && ![...fixedDashboardButtonUrlBlacklist, ...TAB_BAR_BLACKLIST].includes(route.pattern)
  )
);
