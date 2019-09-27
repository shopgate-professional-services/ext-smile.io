import { LOGIN_PATH, CHECKOUT_PATH } from '@shopgate/pwa-common/constants/RoutePaths';
import { SCANNER_PATH } from '@shopgate/pwa-common-commerce/scanner/constants';
import {
  ITEM_PATTERN,
  ITEM_GALLERY_PATTERN,
  ITEM_REVIEWS_PATTERN,
  ITEM_WRITE_REVIEW_PATTERN,
} from '@shopgate/pwa-common-commerce/product/constants';
import { CATEGORY_FILTER_PATTERN } from '@shopgate/pwa-common-commerce/category/constants';
import { SEARCH_FILTER_PATTERN } from '@shopgate/pwa-common-commerce/search/constants';
import { userDataReceived$, userDidLogout$ } from '@shopgate/engage/user';
import { appDidStart$ } from '@shopgate/engage/core';
import { appWillStart$ } from '@shopgate/pwa-common/streams';
import { configuration } from '@shopgate/pwa-common/collections';
import { TAB_BAR_PATTERNS_BLACK_LIST } from '@shopgate/pwa-common/constants/Configuration';
import { TAB_BAR_BLACKLIST } from '../constants';
import { fetchPointsProducts, fetchSmileDataDigest, logoutSmile } from '../actions';

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
  });

  subscribe(userDataReceived$, ({ dispatch }) => {
    dispatch(fetchSmileDataDigest());
  });

  subscribe(userDidLogout$, ({ dispatch }) => {
    dispatch(logoutSmile());
  });
};
