import { connect } from 'react-redux';
import { getSmileCustomer } from '../../selectors';

/**
 * @param {Object} state Redux state
 * @return {Object}
 */
const mapStateToProps = state => ({
  smileCustomerAvailable: !!getSmileCustomer(state),
});

export default connect(mapStateToProps);
