import { connect } from 'react-redux';
import { purchaseSmileRewards } from '../../../../actions';
import { getPurchaseSmileReward } from '../../../../selectors';

/**
 * @param {Object} state Redux state
 * @return {Object}
 */
const mapStateToProps = state => ({
  reward: getPurchaseSmileReward(state),
});

/**
 * @param {Function} dispatch The redux dispatch function.
 * @param {Function} props The component props.
 * @return {Object} The extended component props.
 */
const mapDispatchToProp = dispatch => ({
  redeemReward: (rewardId) => {
    dispatch(purchaseSmileRewards(rewardId));
  },
});

export default connect(mapStateToProps, mapDispatchToProp);
