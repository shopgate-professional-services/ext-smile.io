import { connect } from 'react-redux';
import { getWaysToSpend } from '../../selectors';

/**
 * Maps state to props.
 * @param {Object} state State.
 * @returns {Object}
 */
const mapStateToProps = state => ({
  options: getWaysToSpend(state),
});

export default connect(mapStateToProps);
