import { PipelineRequest, logger } from '@shopgate/engage/core';
import { GET_SMILE_POINTS_PRODUCTS, SMILE_DIGEST_PIPELINE } from '../constants';
import { getSmilePointsProductsState } from '../selectors';
import {
  requestPointsProducts,
  receivePointsProducts,
  errorPointsProducts,
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
 * Fetch Smile Data Digest
 * @return {Function}
 */
export const fetchSmileDataDigest = () => (dispatch) => {
  dispatch(requestSmileDigestData());

  new PipelineRequest(SMILE_DIGEST_PIPELINE)
    .dispatch()
    .then(({ customerDigest, customerId }) => {
      dispatch(receiveSmileDigestData(customerDigest, customerId));
    })
    .catch((error) => {
      logger.error(error);
      dispatch(errorSmileDigestData());
    });
};

/**
 * Logout Smile user
 * @return {Function}
 */
export const logoutSmile = () => (dispatch) => {
  dispatch(clearSmileDigestData());

  if (window.SmileUI) {
    window.SmileUI.destroy();
  }
};

