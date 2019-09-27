import { connect } from 'react-redux';
import { isUserLoggedIn } from '@shopgate/engage/user';

/**
 * @param {Object} state The current application state.
 * @return {Object} The extended component props.
 */
const mapStateToProps = (state) => ({
  showLink: !isUserLoggedIn(state),
});

export default connect(mapStateToProps);
