import { connect } from 'react-redux';
import { getSmilePointsProducts, getSmilePointsIsFetching } from '../../selectors';

/**
 * Maps state to props.
 * @param {Object} state State.
 * @returns {Object}
 */
const mapStateToProps = state => ({
  options: getSmilePointsProducts(state),
  isFetching: getSmilePointsIsFetching(state),
});

export default connect(mapStateToProps);
