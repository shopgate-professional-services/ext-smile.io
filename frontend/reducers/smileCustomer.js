import {
  REQUEST_SMILE_CUSTOMER,
  RECEIVE_SMILE_CUSTOMER,
  ERROR_SMILE_CUSTOMER,
} from '../constants';

/**
 * Reducer to hold Smile Customer.
 * @param {Object} state State
 * @param {Object} action Action.
 * @returns {Object}
 */
const smileCustomer = (
  state = {
    customer: null,
    isFetching: false,
  },
  action
) => {
  switch (action.type) {
    case REQUEST_SMILE_CUSTOMER:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_SMILE_CUSTOMER:
      return {
        ...state,
        customer: action.customer,
        isFetching: false,
      };
    case ERROR_SMILE_CUSTOMER:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default smileCustomer;
