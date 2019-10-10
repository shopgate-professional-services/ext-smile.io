import { connect } from 'react-redux';
import { getNextPointsProduct } from '../../../../../../selectors';

/**
 * @param {Object} state Redux state
 * @return {Object}
 */
const mapStateToProps = state => ({
  nextPointProduct: getNextPointsProduct(state),
});

export default connect(mapStateToProps);
