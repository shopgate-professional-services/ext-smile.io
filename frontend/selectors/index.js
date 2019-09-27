import { createSelector } from 'reselect';
import { REDUX_NAMESPACE_SMILE_POINTS_PRODUCTS, REDUX_NAMESPACE_SMILE_DIGEST_DATA } from '../constants';

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

export const getExternalCustomerId = createSelector(
  getSmileDigestDataState,
  (smileDigestDataState) => {
    if (!smileDigestDataState) {
      return null;
    }
    return smileDigestDataState.externalCustomerId || null;
  }
);
