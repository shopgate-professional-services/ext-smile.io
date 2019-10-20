import { appDidStart$, main$, historyPush, routeWillEnter$ } from '@shopgate/engage/core';
import { userDidLogin$, userDidLogout$ } from '@shopgate/engage/user';
import {
  ITEM_PATTERN,
  ITEM_GALLERY_PATTERN,
  ITEM_REVIEWS_PATTERN,
  ITEM_WRITE_REVIEW_PATTERN,
} from '@shopgate/pwa-common-commerce/product/constants';
import { LOGIN_PATH, CHECKOUT_PATH } from '@shopgate/pwa-common/constants/RoutePaths';
import { SCANNER_PATH } from '@shopgate/pwa-common-commerce/scanner/constants';
import { CATEGORY_FILTER_PATTERN } from '@shopgate/pwa-common-commerce/category/constants';
import { SEARCH_FILTER_PATTERN } from '@shopgate/pwa-common-commerce/search/constants';
import { appWillStart$ } from '@shopgate/pwa-common/streams';
import { configuration } from '@shopgate/pwa-common/collections';
import { TAB_BAR_PATTERNS_BLACK_LIST } from '@shopgate/pwa-common/constants/Configuration';
import {
  fetchPointsProducts,
  fetchSmileWaysToEarn,
  fetchSmileCustomer,
  fetchSmileYourRewards,
} from '../actions';
import { clearSmileCustomer, clearSmileYourRewards } from '../action-creators';
import {
  RECEIVE_PURCHASE_SMILE_REWARD_RESPONSE,
  TAB_BAR_BLACKLIST,
  YOUR_REWARD_ROUTE,
  SMILE_DASHBOARD_ROUTE,
} from '../constants';

const smilePurchaseRewardReceived$ = main$
  .filter(({ action }) => action.type === RECEIVE_PURCHASE_SMILE_REWARD_RESPONSE);

const smileWillEnter$ = routeWillEnter$.filter(({ action }) =>
  action.route.pathname === SMILE_DASHBOARD_ROUTE);

const copiedBlacklist = [
  ITEM_PATTERN,
  ITEM_GALLERY_PATTERN,
  ITEM_REVIEWS_PATTERN,
  ITEM_WRITE_REVIEW_PATTERN,
  CATEGORY_FILTER_PATTERN,
  SEARCH_FILTER_PATTERN,
  LOGIN_PATH,
  CHECKOUT_PATH,
  SCANNER_PATH,
];

export default (subscribe) => {
  subscribe(appWillStart$, () => {
    // Set a blacklist where tab bar is hidden
    configuration.set(TAB_BAR_PATTERNS_BLACK_LIST, copiedBlacklist.concat(TAB_BAR_BLACKLIST));
  });

  subscribe(appDidStart$, ({ dispatch }) => {
    dispatch(fetchPointsProducts());
    dispatch(fetchSmileWaysToEarn());
  });

  subscribe(userDidLogin$, ({ dispatch }) => {
    dispatch(fetchSmileCustomer(true));
    dispatch(fetchSmileYourRewards(true));
    dispatch(fetchSmileWaysToEarn(true));
  });

  subscribe(userDidLogout$, ({ dispatch }) => {
    dispatch(clearSmileCustomer());
    dispatch(clearSmileYourRewards());
    dispatch(fetchSmileWaysToEarn(true));
  });

  subscribe(smilePurchaseRewardReceived$, ({ dispatch, action }) => {
    dispatch(fetchSmileCustomer(true));
    dispatch(fetchSmileYourRewards(true));
    const { pointsPurchase } = action || {};
    if (!pointsPurchase) { return; }
    dispatch(historyPush({ pathname: `${YOUR_REWARD_ROUTE}${pointsPurchase.fulfilled_reward.id}` }));
  });

  subscribe(smileWillEnter$, ({ dispatch }) => {
    dispatch(fetchSmileCustomer());
    dispatch(fetchSmileYourRewards());
  });
};
