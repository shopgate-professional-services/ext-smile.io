export const DASH_ARRAY_VALUE = 51.1503;

// Paths
export const SMILE_LOGIN_ROUTE = '/smile-login';
export const WAYS_TO_EARN_ROUTE = '/ways-to-earn';
export const WAYS_TO_SPEND_ROUTE = '/ways-to-spend';
export const YOUR_REWARDS_ROUTE = '/smile-your-rewards';
export const YOUR_REWARD_ROUTE = '/smile-your-reward/';
export const YOUR_REWARD_PATTERN = `${YOUR_REWARD_ROUTE}:rewardId`;

// Actions
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

export const RECEIVE_SMILE_WAYS_TO_EARN = 'RECEIVE_SMILE_WAYS_TO_EARN';
export const REQUEST_SMILE_WAYS_TO_EARN = 'REQUEST_SMILE_WAYS_TO_EARN';
export const ERROR_SMILE_WAYS_TO_EARN = 'ERROR_SMILE_WAYS_TO_EARN';

export const RECEIVE_PURCHASE_SMILE_REWARD_RESPONSE = 'RECEIVE_PURCHASE_SMILE_REWARD_RESPONSE';
export const REQUEST_PURCHASE_SMILE_REWARD = 'REQUEST_PURCHASE_SMILE_REWARD';
export const ERROR_PURCHASE_SMILE_REWARD = 'ERROR_PURCHASE_SMILE_REWARD';

// Redux namespace
const EXTENSION_NAME = '@shopgate-project/smile-io';
export const REDUX_NAMESPACE_SMILE_POINTS_PRODUCTS = `${EXTENSION_NAME}/pointsProducts`;
export const REDUX_NAMESPACE_SMILE_CUSTOMER = `${EXTENSION_NAME}/smileCustomer`;
export const REDUX_NAMESPACE_SMILE_YOUR_REWARDS = `${EXTENSION_NAME}/smileYourRewards`;
export const REDUX_NAMESPACE_SMILE_WAYS_TO_EARN = `${EXTENSION_NAME}/smileWaysToEarn`;
export const REDUX_NAMESPACE_PURCHASE_SMILE_REWARDS = `${EXTENSION_NAME}/purchaseSmileRewards`;

// Pipelines
export const GET_SMILE_POINTS_PRODUCTS = 'shopgate-project.smile-io.getPointsProducts';
export const GET_SMILE_CUSTOMER = 'shopgate-project.smile-io.getSmileCustomer';
export const GET_SMILE_YOUR_REWARDS = 'shopgate-project.smile-io.getSmileYourRewards';
export const GET_SMILE_WAYS_TO_EARN = 'shopgate-project.smile-io.getSmileWaysToEarn';
export const PURCHASE_SMILE_REWARDS = 'shopgate-project.smile-io.purchaseSmileReward';

export const TAB_BAR_BLACKLIST = [
  SMILE_LOGIN_ROUTE,
  WAYS_TO_EARN_ROUTE,
  WAYS_TO_SPEND_ROUTE,
];
