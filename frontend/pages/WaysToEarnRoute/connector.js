import { connect } from 'react-redux';
import {
  getSmileCustomer,
  getSmileCustomerPoints,
  getSmileWaysToEarn,
  getSmileWaysToEarnIsFetching,
  getSmileCustomerIsFetching,
} from '../../selectors';

/**
 * Maps state to props.
 * @param {Object} state State.
 * @returns {Object}
 */
const mapStateToProps = state => ({
  haveSmileCustomer: !!getSmileCustomer(state),
  points: getSmileCustomerPoints(state),
  customerIsFetching: getSmileCustomerIsFetching(state),
  options: getSmileWaysToEarn(state),
  optionsIsFetching: getSmileWaysToEarnIsFetching(state),
});

export default connect(mapStateToProps);
