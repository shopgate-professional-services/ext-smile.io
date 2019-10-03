export const RECEIVE_SMILE_POINTS_PRODUCTS = 'RECEIVE_SMILE_POINTS_PRODUCTS';
export const REQUEST_SMILE_POINTS_PRODUCTS = 'REQUEST_SMILE_POINTS_PRODUCTS';
export const ERROR_SMILE_POINTS_PRODUCTS = 'ERROR_SMILE_POINTS_PRODUCTS';

export const RECEIVE_SMILE_CUSTOMER = 'RECEIVE_SMILE_CUSTOMER';
export const REQUEST_SMILE_CUSTOMER = 'REQUEST_SMILE_CUSTOMER';
export const ERROR_SMILE_CUSTOMER = 'ERROR_SMILE_CUSTOMER';
export const CLEAR_SMILE_CUSTOMER = 'CLEAR_SMILE_CUSTOMER';

export const RECEIVE_SMILE_YOUR_REWARDS = 'RECEIVE_SMILE_YOUR_REWARDS';
export const REQUEST_SMILE_YOUR_REWARDS = 'REQUEST_SMILE_YOUR_REWARDS';
export const ERROR_SMILE_YOUR_REWARDS = 'ERROR_SMILE_YOUR_REWARDS';
export const CLEAR_SMILE_YOUR_REWARDS = 'CLEAR_SMILE_YOUR_REWARDS';

// Redux namespace
const EXTENSION_NAME = '@shopgate-project/smile-io';
export const REDUX_NAMESPACE_SMILE_POINTS_PRODUCTS = `${EXTENSION_NAME}/pointsProducts`;
export const REDUX_NAMESPACE_SMILE_CUSTOMER = `${EXTENSION_NAME}/smileCustomer`;
export const REDUX_NAMESPACE_SMILE_YOUR_REWARDS = `${EXTENSION_NAME}/smileYourRewards`;

// Pipelines
export const GET_SMILE_POINTS_PRODUCTS = 'shopgate-project.smile-io.getPointsProducts';
export const GET_SMILE_CUSTOMER = 'shopgate-project.smile-io.getSmileCustomer';
export const GET_SMILE_YOUR_REWARDS = 'shopgate-project.smile-io.getSmileYourRewards';
