import {
  REQUEST_SMILE_POINTS_PRODUCTS,
  RECEIVE_SMILE_POINTS_PRODUCTS,
  ERROR_SMILE_POINTS_PRODUCTS,
} from '../constants';
import { smileDataTTL } from '../config';

/**
 * Reducer to hold pointsProducts.
 * @param {Object} state State
 * @param {Object} action Action.
 * @returns {Object}
 */
const pointsProducts = (
  state = {
    pointsProducts: [],
    isFetching: false,
  },
  action
) => {
  switch (action.type) {
    case REQUEST_SMILE_POINTS_PRODUCTS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_SMILE_POINTS_PRODUCTS:
      return {
        ...state,
        pointsProducts: action.pointsProducts,
        isFetching: false,
        expires: Date.now() + smileDataTTL,
      };
    case ERROR_SMILE_POINTS_PRODUCTS:
      return {
        ...state,
        isFetching: false,
        expires: 0,
      };
    default:
      return state;
  }
};

export default pointsProducts;
