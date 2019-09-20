import { userDataReceived$, userDidLogout$ } from '@shopgate/engage/user';
import { fetchSmileDataDigest } from '../actions';
import { clearSmileDigestData } from '../action-creators';

export default (subscribe) => {
  subscribe(userDataReceived$, ({ dispatch }) => {
    dispatch(fetchSmileDataDigest());
  });

  subscribe(userDidLogout$, ({ dispatch }) => {
    dispatch(clearSmileDigestData());
  });
};
