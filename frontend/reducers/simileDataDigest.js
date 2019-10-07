import {
  REQUEST_SMILE_DIGEST_DATA,
  RECEIVE_SMILE_DIGEST_DATA,
  ERROR_SMILE_DIGEST_DATA,
  CLEAR_SMILE_DIGEST_DATA,
} from '../constants';

/**
 * Smile Data Digest Reducer
 * @param {Object} state State.
 * @param {Object} action Action.
 * @returns {Object}
 */
const smileDataDigestReducer = (
  state = {
    digest: null,
    externalCustomerId: null,
    isFetching: false,
  },
  action
) => {
  switch (action.type) {
    case REQUEST_SMILE_DIGEST_DATA:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_SMILE_DIGEST_DATA:
      return {
        ...state,
        digest: action.digest,
        externalCustomerId: action.externalCustomerId,
        isFetching: false,
      };
    case ERROR_SMILE_DIGEST_DATA:
      return {
        ...state,
        isFetching: false,
      };
    case CLEAR_SMILE_DIGEST_DATA:
      return {
        ...state,
        digest: null,
        externalCustomerId: null,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default smileDataDigestReducer;
