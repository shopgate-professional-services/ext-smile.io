import {
  REQUEST_SMILE_YOUR_REWARDS,
  RECEIVE_SMILE_YOUR_REWARDS,
  ERROR_SMILE_YOUR_REWARDS,
  CLEAR_SMILE_YOUR_REWARDS,
} from '../constants';

/**
 * Reducer to hold Smile Your Rewards.
 * @param {Object} state State
 * @param {Object} action Action.
 * @returns {Object}
 */
const smileYourRewards = (
  state = {
    rewards: [],
    isFetching: false,
  },
  action
) => {
  switch (action.type) {
    case REQUEST_SMILE_YOUR_REWARDS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_SMILE_YOUR_REWARDS:
      return {
        ...state,
        rewards: action.rewards,
        isFetching: false,
      };
    case ERROR_SMILE_YOUR_REWARDS:
      return {
        ...state,
        isFetching: false,
      };
    case CLEAR_SMILE_YOUR_REWARDS:
      return {
        ...state,
        rewards: [],
        isFetching: false,
      };
    default:
      return state;
  }
};

export default smileYourRewards;
