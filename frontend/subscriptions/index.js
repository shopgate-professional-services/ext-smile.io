import { getUserData, userDataReceived$, userDidLogout$ } from '@shopgate/engage/user';
import { checkoutSucceeded$ } from '@shopgate/engage/checkout';
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

  subscribe(checkoutSucceeded$, ({ dispatch, getState }) => {
    const userData = getUserData(getState());
    dispatch(fetchSmileCustomerInfo(userData.id));
  });
};
