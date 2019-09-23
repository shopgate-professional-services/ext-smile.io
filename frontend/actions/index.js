import { PipelineRequest, logger } from '@shopgate/engage/core';
import { GET_SMILE_CUSTOMER_INFO } from '../constants';
import {
  requestSmileCustomerInfo,
  receiveSmileCustomerInfo,
  errorSmileCustomerInfo,
} from '../action-creators';

/**
 * Fetches customerInfo from smile
 * @param {string} id customer id
 * @returns {Function}
 */
export const fetchSmileCustomerInfo = id => (dispatch) => {
  dispatch(requestSmileCustomerInfo(id));
  new PipelineRequest(GET_SMILE_CUSTOMER_INFO)
    .setInput({ customerId: id })
    .dispatch()
    .then((response) => {
      const { customerInfo } = response || {};
      dispatch(receiveSmileCustomerInfo(customerInfo));
    })
    .catch((err) => {
      logger.error(err);
      dispatch(errorSmileCustomerInfo());
    });
};

