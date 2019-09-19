import { createSelector } from 'reselect';
import { REDUX_NAMESPACE_SMILE_CUSTOMER_INFO } from '../constants';

/**
 * Gets info from smileCustomerInfo extension reducer
 * @param {Object} state state
 * @returns {Object}
 */
export const getSmileCustomerInfoState = state =>
  state.extensions[REDUX_NAMESPACE_SMILE_CUSTOMER_INFO];

export const getSmileCustomerInfo = createSelector(
  getSmileCustomerInfoState,
  (customerInfo) => {
    if (!customerInfo) {
      return null;
    }
    return customerInfo;
  }
);

