import {
  REQUEST_SMILE_CUSTOMER_INFO,
  RECEIVE_SMILE_CUSTOMER_INFO,
  ERROR_SMILE_CUSTOMER_INFO,
  CLEAR_SMILE_CUSTOMER_INFO,
} from '../constants';

/**
 * Request smile customerInfo
 * @param {string} id customer id
 * @returns {Object}
 */
export const requestSmileCustomerInfo = id => ({
  type: REQUEST_SMILE_CUSTOMER_INFO,
  id,
});

/**
 * Receives smile customerInfo
 * @param {Object} customerInfo customerInfo
 * @returns {Object }
 */
export const receiveSmileCustomerInfo = customerInfo => ({
  type: RECEIVE_SMILE_CUSTOMER_INFO,
  customerInfo,
});

/**
 * Error requesting smile customerInfo
 * @returns {Object}
 */
export const errorSmileCustomerInfo = () => ({
  type: ERROR_SMILE_CUSTOMER_INFO,
});

/**
 * Reset smile customerInfo
 * @returns {Object}
 */
export const clearSmileCustomerInfo = () => ({
  type: CLEAR_SMILE_CUSTOMER_INFO,

});
