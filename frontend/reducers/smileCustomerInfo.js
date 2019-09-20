import {
  REQUEST_SMILE_CUSTOMER_INFO,
  RECEIVE_SMILE_CUSTOMER_INFO,
  ERROR_SMILE_CUSTOMER_INFO,
  CLEAR_SMILE_CUSTOMER_INFO,
} from '../constants';

/**
 * Reducer to hold currently logged in smile user info.
 * @param {Object} state State
 * @param {Object} action Action.
 * @returns {Object}
 */
const smileCustomerInfo = (
  state = {
    customerInfo: null,
    isFetching: false,
  },
  action
) => {
  switch (action.type) {
    case REQUEST_SMILE_CUSTOMER_INFO:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_SMILE_CUSTOMER_INFO:
      return {
        ...state,
        customerInfo: action.customerInfo,
        isFetching: false,
      };
    case ERROR_SMILE_CUSTOMER_INFO:
      return {
        ...state,
        isFetching: false,
      };
    case CLEAR_SMILE_CUSTOMER_INFO:
      return {
        ...state,
        customerInfo: null,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default smileCustomerInfo;
