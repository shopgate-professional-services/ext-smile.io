import { connect } from 'react-redux';
import { getExternalCustomerId, getSmileDigest } from '../../selectors';

/**
 * @param {Object} state state
 * @returns {Object}
 */
const mapStateToProps = state => ({
  digest: getSmileDigest(state),
  externalCustomerId: getExternalCustomerId(state),
});

export default connect(mapStateToProps);
