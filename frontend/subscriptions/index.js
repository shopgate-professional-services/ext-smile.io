import { userDataReceived$, userDidLogout$ } from '@shopgate/engage/user';
import { fetchSmileCustomerInfo } from '../actions';
import { clearSmileCustomerInfo } from '../action-creators';

export default (subscribe) => {
  subscribe(userDataReceived$, ({ dispatch, action }) => {
    const { user } = action || {};
    if (!user) {
      return;
    }
    dispatch(fetchSmileCustomerInfo(user.id));
  });

  subscribe(userDidLogout$, ({ dispatch }) => {
    dispatch(clearSmileCustomerInfo());
  });
};
