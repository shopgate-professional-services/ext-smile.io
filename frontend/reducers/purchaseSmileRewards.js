import {
  REQUEST_PURCHASE_SMILE_REWARD,
  RECEIVE_PURCHASE_SMILE_REWARD_RESPONSE,
  ERROR_PURCHASE_SMILE_REWARD,
} from '../constants';

/**
 * Reducer to hold Purchase Reward Points response.
 * @param {Object} state State
 * @param {Object} action Action.
 * @returns {Object}
 */
const purchaseSmileRewards = (
  state = {},
  action
) => {
  switch (action.type) {
    case REQUEST_PURCHASE_SMILE_REWARD:
      return {
        ...state,
        [action.rewardId]: {
          ...state[action.rewardId] || {},
          isFetching: true,
        },
      };
    case RECEIVE_PURCHASE_SMILE_REWARD_RESPONSE:
      return {
        ...state,
        [action.rewardId]: {
          ...state[action.rewardId] || {},
          pointsPurchase: action.pointsPurchase,
          isFetching: false,
        },
      };
    case ERROR_PURCHASE_SMILE_REWARD:
      return {
        ...state,
        [action.rewardId]: {
          ...state[action.rewardId] || {},
          isFetching: false,
        },
      };
    default:
      return state;
  }
};

export default purchaseSmileRewards;
