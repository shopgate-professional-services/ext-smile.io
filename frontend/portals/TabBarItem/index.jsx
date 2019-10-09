import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { useNavigation } from '@shopgate/engage/core';
import { SMILE_DASHBOARD_ROUTE } from '../../constants';
import Icon from '../../components/DashboardIcon';
import { addLinksToMenu } from '../../config';

const tabItemIconStyle = css({
  height: 24,
  width: 24,
  flexGrow: 1,
  marginRight: 'auto',
  marginLeft: 'auto',
});

/**
 * TabBarItem.
 * @param {Object} props Props.
 * @returns {JSX}
 */
const TabBarItem = ({ TabBarAction, path }) => {
  if (!addLinksToMenu) {
    return false;
  }

  const { push } = useNavigation();

  const isHighlighted = [
    SMILE_DASHBOARD_ROUTE,
    // TODO: add all the other routes here too
  ].includes(path);

  /**
   * Handles click.
   * @param {MouseEvent} e Event.
   */
  const handleClick = (e) => {
    e.preventDefault();
    push({ pathname: SMILE_DASHBOARD_ROUTE });
  };

  return (
    <TabBarAction
      label="smile-io.rewards"
      icon={<Icon isHighlighted={isHighlighted} className={tabItemIconStyle} isTabBar />}
      isHighlighted={isHighlighted}
      onClick={handleClick}
    />
  );
};

TabBarItem.propTypes = {
  path: PropTypes.string.isRequired,
  TabBarAction: PropTypes.func.isRequired,
};

TabBarItem.defaultProps = {
};

export default TabBarItem;
