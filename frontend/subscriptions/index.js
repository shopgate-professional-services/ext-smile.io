import { userDataReceived$, userDidLogout$ } from '@shopgate/engage/user';
import { appDidStart$ } from '@shopgate/engage/core';
import { fetchPointsProducts, fetchSmileDataDigest, logoutSmile } from '../actions';

export default (subscribe) => {
  subscribe(appDidStart$, ({ dispatch }) => {
    dispatch(fetchPointsProducts());
  });

  subscribe(userDataReceived$, ({ dispatch }) => {
    dispatch(fetchSmileDataDigest());
  });

  subscribe(userDidLogout$, ({ dispatch }) => {
    dispatch(logoutSmile());
  });
};
