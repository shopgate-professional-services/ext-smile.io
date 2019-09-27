import {
  REQUEST_SMILE_POINTS_PRODUCTS,
  RECEIVE_SMILE_POINTS_PRODUCTS,
  ERROR_SMILE_POINTS_PRODUCTS,
} from '../constants';

/**
 * Reducer to hold pointsProducts.
 * @param {Object} state State
 * @param {Object} action Action.
 * @returns {Object}
 */
const pointsProducts = (
  state = {
    pointsProducts: null,
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
      };
    case ERROR_SMILE_POINTS_PRODUCTS:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default pointsProducts;
