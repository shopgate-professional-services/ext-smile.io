import { appDidStart$, main$ } from '@shopgate/engage/core';
import { userDataReceived$, userDidLogout$ } from '@shopgate/engage/user';
import {
  fetchPointsProducts,
  fetchSmileWaysToEarn,
  fetchSmileCustomer,
  fetchSmileYourRewards,
} from '../actions';
import { clearSmileCustomer, clearSmileYourRewards } from '../action-creators';
import { RECEIVE_PURCHASE_SMILE_REWARD_RESPONSE } from '../constants';

const smilePurchaseRewardReceived$ = main$
  .filter(({ action }) => action.type === RECEIVE_PURCHASE_SMILE_REWARD_RESPONSE);

export default (subscribe) => {
  subscribe(appDidStart$, ({ dispatch }) => {
    dispatch(fetchPointsProducts());
    dispatch(fetchSmileWaysToEarn());
  });

  subscribe(userDataReceived$, ({ dispatch }) => {
    dispatch(fetchSmileCustomer());
    dispatch(fetchSmileYourRewards());
  });

  subscribe(userDidLogout$, ({ dispatch }) => {
    dispatch(clearSmileCustomer());
    dispatch(clearSmileYourRewards());
  });

  subscribe(smilePurchaseRewardReceived$, ({ dispatch }) => {
    dispatch(fetchSmileCustomer());
    dispatch(fetchSmileYourRewards());
  });
};
