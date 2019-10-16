import { PipelineRequest, logger } from '@shopgate/engage/core';
import {
  GET_SMILE_POINTS_PRODUCTS,
  GET_SMILE_CUSTOMER,
  GET_SMILE_YOUR_REWARDS,
  GET_SMILE_WAYS_TO_EARN,
  PURCHASE_SMILE_REWARDS,
} from '../constants';
import {
  getSmilePointsProductsState,
  getSmileCustomerState,
  getSmileYourRewardsState,
  getSmileWaysToEarnState,
  getPurchaseSmileReward,
} from '../selectors';
import {
  requestPointsProducts,
  receivePointsProducts,
  errorPointsProducts,
  requestSmileCustomer,
  receiveSmileCustomer,
  errorSmileCustomer,
  requestSmileYourRewards,
  receiveSmileYourRewards,
  errorSmileYourRewards,
  requestSmileWaysToEarn,
  receiveSmileWaysToEarn,
  errorSmileWaysToEarn,
  requestPurchaseSmileReward,
  receivePurchaseSmileRewardResponse,
  errorPurchaseSmileReward,
} from '../action-creators';

/**
 * Fetches PointsProducts from smile
 * @returns {Function}
 */
export const fetchPointsProducts = () => (dispatch, getState) => {
  const pointsProductsState = getSmilePointsProductsState(getState());

  if (pointsProductsState.isFetching || pointsProductsState.expires <= Date.now()) {
    return;
  }

  dispatch(requestPointsProducts());
  new PipelineRequest(GET_SMILE_POINTS_PRODUCTS)
    .dispatch()
    .then((response) => {
      const { pointsProducts } = response || {};
      dispatch(receivePointsProducts(pointsProducts));
    })
    .catch((err) => {
      logger.error(err);
      dispatch(errorPointsProducts());
    });
};

/**
 * Fetches Smile Customer from smile
 * @param {[boolean]} force Boolean to bypass TTL value
 * @returns {Function}
 */
export const fetchSmileCustomer = (force = false) => (dispatch, getState) => {
  const smileCustomerState = getSmileCustomerState(getState()) || {};

  if (!force && (
    smileCustomerState.isFetching ||
    (smileCustomerState.customer && smileCustomerState.expires >= Date.now())
  )) {
    return;
  }

  dispatch(requestSmileCustomer());
  new PipelineRequest(GET_SMILE_CUSTOMER)
    .dispatch()
    .then((response) => {
      const { customer } = response || {};
      dispatch(receiveSmileCustomer(customer));
    })
    .catch((err) => {
      logger.error(err);
      dispatch(errorSmileCustomer());
    });
};

/**
 * Fetches Smile Your Rewards
 * @param {[boolean]} force Boolean to bypass TTL value
 * @return {Function}
 */
export const fetchSmileYourRewards = (force = false) => (dispatch, getState) => {
  const yourRewardsState = getSmileYourRewardsState(getState());

  if (!force && (
    yourRewardsState.isFetching ||
    (yourRewardsState.rewards && yourRewardsState.expires >= Date.now())
  )) {
    return;
  }
  dispatch(requestSmileYourRewards());
  new PipelineRequest(GET_SMILE_YOUR_REWARDS)
    .dispatch()
    .then((response) => {
      const { yourRewards = [] } = response || {};
      dispatch(receiveSmileYourRewards(yourRewards));
    })
    .catch((err) => {
      logger.error(err);
      dispatch(errorSmileYourRewards());
    });
};

/**
 * Fetches Smile Ways to Earn
 * @return {Function}
 */
export const fetchSmileWaysToEarn = () => (dispatch, getState) => {
  const smileWaysToEarnState = getSmileWaysToEarnState(getState());

  if (smileWaysToEarnState.isFetching || smileWaysToEarnState.expires <= Date.now()) {
    return;
  }

  dispatch(requestSmileWaysToEarn());
  new PipelineRequest(GET_SMILE_WAYS_TO_EARN)
    .dispatch()
    .then((response) => {
      const { waysToEarn = [] } = response || {};
      dispatch(receiveSmileWaysToEarn(waysToEarn));
    })
    .catch((err) => {
      logger.error(err);
      dispatch(errorSmileWaysToEarn());
    });
};

/**
 * Purchase Smile Reward
 * @param {string|number} rewardId Reward Id
 * @return {Function}
 */
export const purchaseSmileRewards = rewardId => (dispatch, getState) => {
  const purchaseReward = getPurchaseSmileReward(getState(), { rewardId }) || {};

  if (purchaseReward.isFetching) {
    return;
  }

  dispatch(requestPurchaseSmileReward(rewardId));
  new PipelineRequest(PURCHASE_SMILE_REWARDS)
    .setInput({ rewardId })
    .dispatch()
    .then((response) => {
      const { pointsPurchase } = response || {};
      dispatch(receivePurchaseSmileRewardResponse(rewardId, pointsPurchase));
    })
    .catch((err) => {
      logger.error(err);
      dispatch(errorPurchaseSmileReward(rewardId));
    });
};

