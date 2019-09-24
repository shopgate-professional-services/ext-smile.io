import { connect } from 'react-redux';
import { getExternalCustomerId, getSmileDigest } from '../../selectors';
import initializeSmileScript from '../../helpers/initializeSmileSdk';

/**
 * @param {Object} state state
 * @returns {Object}
 */
const mapStateToProps = state => ({
  digest: getSmileDigest(state),
  externalCustomerId: getExternalCustomerId(state),
  initializeScript: (externalCustomerId, digest) =>
    initializeSmileScript(externalCustomerId, digest),
});

export default connect(mapStateToProps);
