import { connect } from 'react-redux';
import {
  getSmileCustomer,
  getSmileCustomerPoints,
  getSmileCustomerIsFetching,
  getSmilePointsProducts,
  getSmilePointsIsFetching,
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
  options: getSmilePointsProducts(state),
  optionsIsFetching: getSmilePointsIsFetching(state),
});

export default connect(mapStateToProps);
