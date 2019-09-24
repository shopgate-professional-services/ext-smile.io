import { userDataReceived$, userDidLogout$ } from '@shopgate/engage/user';
import { fetchSmileDataDigest, logoutSmile } from '../actions';

export default (subscribe) => {
  subscribe(userDataReceived$, ({ dispatch }) => {
    dispatch(fetchSmileDataDigest());
  });

  subscribe(userDidLogout$, ({ dispatch }) => {
    dispatch(logoutSmile());
  });
};
