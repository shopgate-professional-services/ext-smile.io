import { PipelineRequest, logger } from '@shopgate/engage/core';
import { GET_SMILE_POINTS_PRODUCTS, GET_SMILE_CUSTOMER } from '../constants';
import { getSmilePointsProductsState, getSmileCustomerState } from '../selectors';
import {
  requestPointsProducts,
  receivePointsProducts,
  errorPointsProducts,
  requestSmileCustomer,
  receiveSmileCustomer,
  errorSmileCustomer,
} from '../action-creators';

/**
 * Fetches PointsProducts from smile
 * @returns {Function}
 */
export const fetchPointsProducts = () => (dispatch, getState) => {
  const pointsProductsState = getSmilePointsProductsState(getState());

  if (pointsProductsState.isFetching || pointsProductsState.pointsProducts) {
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
 * @returns {Function}
 */
export const fetchSmileCustomer = () => (dispatch, getState) => {
  const smileCustomerState = getSmileCustomerState(getState()) || {};

  if (smileCustomerState.isFetching || smileCustomerState.pointsProducts) {
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

