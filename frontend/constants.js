// Paths
export const SMILE_LOGIN_ROUTE = '/smile-login';
export const WAYS_TO_EARN_ROUTE = '/ways-to-earn';
export const WAYS_TO_SPEND_ROUTE = '/ways-to-spend';

// Actions
export const RECEIVE_SMILE_POINTS_PRODUCTS = 'RECEIVE_SMILE_POINTS_PRODUCTS';
export const REQUEST_SMILE_POINTS_PRODUCTS = 'REQUEST_SMILE_POINTS_PRODUCTS';
export const ERROR_SMILE_POINTS_PRODUCTS = 'ERROR_SMILE_POINTS_PRODUCTS';

// Redux namespace
const EXTENSION_NAME = '@shopgate-project/smile-io';
export const REDUX_NAMESPACE_SMILE_POINTS_PRODUCTS = `${EXTENSION_NAME}/pointsProducts`;

// Pipelines
export const GET_SMILE_POINTS_PRODUCTS = 'shopgate-project.smile-io.getPointsProducts';
// Action
export const REQUEST_SMILE_DIGEST_DATA = 'REQUEST_SMILE_DIGEST_DATA';
export const RECEIVE_SMILE_DIGEST_DATA = 'RECEIVE_SMILE_DIGEST_DATA';
export const ERROR_SMILE_DIGEST_DATA = 'ERROR_SMILE_DIGEST_DATA';
export const CLEAR_SMILE_DIGEST_DATA = 'CLEAR_SMILE_DIGEST_DATA';

// Pipelines
export const SMILE_DIGEST_PIPELINE = 'shopgate-project.smile-io.getCustomerDigest';

// Redux namespace
export const REDUX_NAMESPACE_SMILE_DIGEST_DATA = '@shopgate-project/smile-io/smileDataDigest';

export const TAB_BAR_BLACKLIST = [
  SMILE_LOGIN_ROUTE,
  WAYS_TO_EARN_ROUTE,
  WAYS_TO_SPEND_ROUTE,
];

