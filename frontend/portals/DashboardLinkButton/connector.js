import { connect } from 'react-redux';
import { shouldShowButton } from '../../selectors';

/**
 * @param {Object} state The current application state.
 * @return {Object} The extended component props.
 */
const mapStateToProps = state => ({
  show: shouldShowButton(state),
});

export default connect(mapStateToProps);
