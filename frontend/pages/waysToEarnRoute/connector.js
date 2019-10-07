import { connect } from 'react-redux';
import { getSmileWaysToEarn, getSmileWaysToEarnIsFetching } from '../../selectors';

/**
 * Maps state to props.
 * @param {Object} state State.
 * @returns {Object}
 */
const mapStateToProps = state => ({
  options: getSmileWaysToEarn(state),
  isFetching: getSmileWaysToEarnIsFetching(state),
});

export default connect(mapStateToProps);
