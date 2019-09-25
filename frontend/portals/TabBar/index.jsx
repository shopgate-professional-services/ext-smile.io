import PropTypes from 'prop-types';
import { TAB_BAR_BLACKLIST } from '../../constants';

/**
 * @param {Node} children children
 * @returns {JSX}
 */
const TabBar = ({ path, children }) => {
  if (TAB_BAR_BLACKLIST.some(route => route === path)) {
    return null;
  }
  return children;
};

TabBar.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
};

export default TabBar;
