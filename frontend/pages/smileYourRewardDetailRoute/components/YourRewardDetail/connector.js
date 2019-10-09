import { connect } from 'react-redux';
import { getRewardFromRoute } from '../../../../selectors';

/**
 * @param {Object} state Redux state
 * @return {Object}
 */
const mapStateToProps = state => ({
  reward: getRewardFromRoute(state),
});

export default connect(mapStateToProps);
