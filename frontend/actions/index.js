import { PipelineRequest, logger, LoadingProvider } from '@shopgate/engage/core';
import { GET_SMILE_POINTS_PRODUCTS, SMILE_DIGEST_PIPELINE, WAYS_TO_SPEND_ROUTE } from '../constants';
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

