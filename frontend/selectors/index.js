import { createSelector } from 'reselect';
import {
  REDUX_NAMESPACE_SMILE_POINTS_PRODUCTS,
  REDUX_NAMESPACE_SMILE_CUSTOMER,
  REDUX_NAMESPACE_SMILE_WAYS_TO_EARN,
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
  (pointsProductsState) => {

    return pointsProductsState.pointsProducts;
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
 * Gets info from smileCustomer extension reducer
 * @param {Object} state state
 * @returns {Object}
 */
export const getSmileWaysToEarnState = state =>
  state.extensions[REDUX_NAMESPACE_SMILE_WAYS_TO_EARN];
