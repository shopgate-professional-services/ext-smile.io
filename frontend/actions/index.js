import { PipelineRequest, logger } from '@shopgate/engage/core';
import { GET_SMILE_POINTS_PRODUCTS } from '../constants';
import { getSmilePointsProductsState } from '../selectors';
import {
  requestPointsProducts,
  receivePointsProducts,
  errorPointsProducts,
} from '../action-creators';

/**
 * Fetches PointsProducts from smile
 * @returns {Function}
 */
export const fetchPointsProducts = () => (dispatch, getState) => {
  const pointsProductsState = getSmilePointsProductsState(getState());

  if (pointsProductsState.isFetching || !pointsProductsState.pointsProducts) {
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

