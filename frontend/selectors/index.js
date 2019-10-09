import { createSelector } from 'reselect';
import { getCurrentRoute } from '@shopgate/pwa-common/selectors/router';
import {
  REDUX_NAMESPACE_SMILE_POINTS_PRODUCTS,
  REDUX_NAMESPACE_SMILE_CUSTOMER,
  REDUX_NAMESPACE_SMILE_YOUR_REWARDS,
  REDUX_NAMESPACE_SMILE_WAYS_TO_EARN,
  REDUX_NAMESPACE_PURCHASE_SMILE_REWARDS,
} from '../constants';
import { fixedDashboardButtonUrlBlacklist, showFixedDashboardButton } from '../config';

/**
 * Gets info from pointsProducts extension reducer
 * @param {Object} state state
 * @returns {Object}
 */
export const getSmilePointsProductsState = state =>
  state.extensions[REDUX_NAMESPACE_SMILE_POINTS_PRODUCTS];

export const getSmilePointsProducts = createSelector(
  getSmilePointsProductsState,
  pointsProductsState => pointsProductsState.pointsProducts
);

/**
 * Gets info from smileCustomer extension reducer
 * @param {Object} state state
 * @returns {Object}
 */
export const getSmileCustomerState = state =>
  state.extensions[REDUX_NAMESPACE_SMILE_CUSTOMER];

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
 * Determines if button should be shown
 * @param {Object} state Redux state
 * @returns {Object}
 */
export const shouldShowButton = createSelector(
  getCurrentRoute,
  route => showFixedDashboardButton && !fixedDashboardButtonUrlBlacklist.includes(route.pattern)
);
