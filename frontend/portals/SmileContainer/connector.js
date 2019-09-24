import { connect } from 'react-redux';
import { getExternalCustomerId, getSmileDigest } from '../../selectors';
import { mountSmileScript } from '../../actions';

/**
 * @param {Object} state state
 * @returns {Object}
 */
const mapStateToProps = state => ({
  digest: getSmileDigest(state),
  externalCustomerId: getExternalCustomerId(state),
});

/**
 * Connects the dispatch function to a callable function in the props.
 * @param {Function} dispatch The redux dispatch function.
 * @return {Object} The extended component props.
 */
const mapDispatchToProps = dispatch => ({
  mountScript: (externalCustomerId, digest) =>
    dispatch(mountSmileScript(externalCustomerId, digest)),
});

export default connect(mapStateToProps, mapDispatchToProps);
