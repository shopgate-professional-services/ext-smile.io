import { PipelineRequest, logger, LoadingProvider } from '@shopgate/engage/core';
import {
  GET_SMILE_POINTS_PRODUCTS,
  GET_SMILE_CUSTOMER,
  GET_SMILE_YOUR_REWARDS,
  GET_SMILE_WAYS_TO_EARN,
  PURCHASE_SMILE_REWARDS,
  SMILE_DIGEST_PIPELINE,
  WAYS_TO_SPEND_ROUTE,
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
  requestSmileDigestData,
  receiveSmileDigestData,
  errorSmileDigestData,
  clearSmileDigestData,
} from '../action-creators';

/**
 * Fetches PointsProducts from smile
 * @returns {Function}
 */
export const fetchPointsProducts = () => (dispatch, getState) => {
  const pointsProductsState = getSmilePointsProductsState(getState());

  if (pointsProductsState.isFetching) {
    LoadingProvider.setLoading(WAYS_TO_SPEND_ROUTE);
  }

  if (pointsProductsState.pointsProducts) {
    return;
  }

  dispatch(requestPointsProducts());
  new PipelineRequest(GET_SMILE_POINTS_PRODUCTS)
    .dispatch()
    .then((response) => {
      const { pointsProducts } = response || {};
      dispatch(receivePointsProducts(pointsProducts));
      LoadingProvider.unsetLoading(WAYS_TO_SPEND_ROUTE);
    })
    .catch((err) => {
      logger.error(err);
      dispatch(errorPointsProducts());
      LoadingProvider.unsetLoading(WAYS_TO_SPEND_ROUTE);
    });
};

/**
 * Fetches Smile Customer from smile
 * @returns {Function}
 */
export const fetchSmileCustomer = () => (dispatch, getState) => {
  const smileCustomerState = getSmileCustomerState(getState()) || {};

  if (smileCustomerState.isFetching) {
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
 * @return {Function}
 */
export const fetchSmileYourRewards = () => (dispatch, getState) => {
  const yourRewardsState = getSmileYourRewardsState(getState());

  if (yourRewardsState.isFetching) {
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

  if (smileWaysToEarnState.isFetching) {
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


