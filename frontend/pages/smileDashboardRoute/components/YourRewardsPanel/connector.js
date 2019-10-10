import { connect } from 'react-redux';
import { getSmileYourRewards } from '../../../../selectors';

/**
 * @param {Object} state Redux state
 * @return {Object}
 */
const mapStateToProps = state => ({
  rewards: getSmileYourRewards(state),
});

export default connect(mapStateToProps);
