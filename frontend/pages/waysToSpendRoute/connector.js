import { connect } from 'react-redux';
import { getSmilePointsProducts } from '../../selectors';

/**
 * Maps state to props.
 * @param {Object} state State.
 * @returns {Object}
 */
const mapStateToProps = state => ({
  options: getSmilePointsProducts(state),
});

export default connect(mapStateToProps);
