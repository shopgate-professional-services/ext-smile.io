import { connect } from 'react-redux';
import { getSmileCustomerPoints, getSmileCustomer, getSmileCustomerIsFetching } from '../selectors';

/**
 * @param {Object} state Redux state
 * @return {Object}
 */
const mapStateToProps = state => ({
  points: getSmileCustomerPoints(state),
  smileCustomerIsFetching: getSmileCustomerIsFetching(state),
  haveSmileCustomer: !!getSmileCustomer(state),
});

export default connect(mapStateToProps);
