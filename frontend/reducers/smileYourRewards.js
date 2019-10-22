import {
  REQUEST_SMILE_YOUR_REWARDS,
  RECEIVE_SMILE_YOUR_REWARDS,
  ERROR_SMILE_YOUR_REWARDS,
  CLEAR_SMILE_YOUR_REWARDS,
} from '../constants';
import { smileTTL } from '../config';

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
        expires: Date.now() + smileTTL,
      };
    case ERROR_SMILE_YOUR_REWARDS:
      return {
        ...state,
        isFetching: false,
        expires: 0,
      };
    case CLEAR_SMILE_YOUR_REWARDS:
      return {
        ...state,
        rewards: [],
        isFetching: false,
        expires: 0,
      };
    default:
      return state;
  }
};

export default smileYourRewards;
