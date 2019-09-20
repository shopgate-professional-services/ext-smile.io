import { userDataReceived$, userDidLogout$ } from '@shopgate/engage/user';
import { fetchSmileDataDigest } from '../actions';

export default (subscribe) => {
  subscribe(userDataReceived$, ({ dispatch }) => {
    console.log('about to fetch smile digest');
    dispatch(fetchSmileDataDigest());
  });
}
