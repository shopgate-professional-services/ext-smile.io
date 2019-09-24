import { createSelector } from 'reselect';
import { REDUX_NAMESPACE_SMILE_POINTS_PRODUCTS } from '../constants';

/**
 * Gets info from pointsProducts extension reducer
 * @param {Object} state state
 * @returns {Object}
 */
export const getSmilePointsProductsState = state =>
  state.extensions[REDUX_NAMESPACE_SMILE_POINTS_PRODUCTS];

export const getSmilePointsProducts = createSelector(
  getSmilePointsProductsState,
  (pointsProductsState) => {

    return pointsProductsState.pointsProducts;
  }
);

