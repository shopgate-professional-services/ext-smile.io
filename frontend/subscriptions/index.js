import { appDidStart$ } from '@shopgate/engage/core';
import { fetchPointsProducts } from '../actions';

export default (subscribe) => {
  subscribe(appDidStart$, ({ dispatch }) => {
    dispatch(fetchPointsProducts());
  });
};
