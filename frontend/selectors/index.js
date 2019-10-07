import { createSelector } from 'reselect';
import {
  REDUX_NAMESPACE_SMILE_POINTS_PRODUCTS,
  REDUX_NAMESPACE_SMILE_CUSTOMER,
  REDUX_NAMESPACE_SMILE_YOUR_REWARDS,
  REDUX_NAMESPACE_SMILE_WAYS_TO_EARN,
  REDUX_NAMESPACE_PURCHASE_SMILE_REWARDS,
  REDUX_NAMESPACE_SMILE_DIGEST_DATA,
} from '../constants';

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

export const getSmilePointsIsFetching = createSelector(
  getSmilePointsProductsState,
  pointsProductsState => pointsProductsState.isFetching
);

/**
 * @param {Object} state state
 * @returns {Object}
 */
export const getSmileDigestDataState = state =>
  state.extensions[REDUX_NAMESPACE_SMILE_DIGEST_DATA];

export const getSmileDigest = createSelector(
  getSmileDigestDataState,
  (smileDigestDataState) => {
    if (!smileDigestDataState) {
      return null;
    }
    return smileDigestDataState.digest || null;
  }
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
)

export const getExternalCustomerId = createSelector(
  getSmileDigestDataState,
  (smileDigestDataState) => {
    if (!smileDigestDataState) {
      return null;
    }
    return smileDigestDataState.externalCustomerId || null;
  }
);
