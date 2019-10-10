import { connect } from 'react-redux';
import { getSmileCustomerPoints } from '../selectors';

/**
 * @param {Object} state Redux state
 * @return {Object}
 */
const mapStateToProps = state => ({
  points: getSmileCustomerPoints(state),
});

export default connect(mapStateToProps);
