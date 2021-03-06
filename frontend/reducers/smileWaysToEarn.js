import {
  REQUEST_SMILE_WAYS_TO_EARN,
  RECEIVE_SMILE_WAYS_TO_EARN,
  ERROR_SMILE_WAYS_TO_EARN,
} from '../constants';
import { smileDataTTL } from '../config';

/**
 * Reducer to hold Smile Ways to Earn.
 * @param {Object} state State
 * @param {Object} action Action.
 * @returns {Object}
 */
const smileWaysToEarn = (
  state = {
    waysToEarn: [],
    isFetching: false,
  },
  action
) => {
  switch (action.type) {
    case REQUEST_SMILE_WAYS_TO_EARN:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_SMILE_WAYS_TO_EARN:
      return {
        ...state,
        waysToEarn: action.waysToEarn,
        isFetching: false,
        expires: Date.now() + smileDataTTL,
      };
    case ERROR_SMILE_WAYS_TO_EARN:
      return {
        ...state,
        isFetching: false,
        expires: 0,
      };
    default:
      return state;
  }
};

export default smileWaysToEarn;
