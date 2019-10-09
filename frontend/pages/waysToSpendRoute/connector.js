import { connect } from 'react-redux';
import { getSmileCustomer, getSmileCustomerIsFetching, getSmilePointsProducts, getSmilePointsIsFetching } from '../../selectors';

/**
 * Maps state to props.
 * @param {Object} state State.
 * @returns {Object}
 */
const mapStateToProps = state => ({
  customer: getSmileCustomer(state),
  customerIsFetching: getSmileCustomerIsFetching(state),
  options: getSmilePointsProducts(state),
  optionsIsFetching: getSmilePointsIsFetching(state),
});

export default connect(mapStateToProps);
