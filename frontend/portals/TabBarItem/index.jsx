import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { useNavigation } from '@shopgate/engage/core';
import { SMILE_DASHBOARD_ROUTE, TAB_BAR_BLACKLIST } from '../../constants';
import Icon from '../../components/DashboardIcon';
import { addLinksToMenu } from '../../config';

const tabItemIconStyle = css({
  height: 24,
  width: 24,
  flexGrow: 1,
  marginRight: 'auto',
  marginLeft: 'auto',
  marginBottom: '2px',
});

/**
 * TabBarItem.
 * @param {Function} TabBarAction Tab Bar Action function.
 * @param {string} path path to navigate to.
 * @returns {JSX}
 */
const TabBarItem = ({ TabBarAction, path }) => {
  if (!addLinksToMenu) {
    return false;
  }

  const { push } = useNavigation();

  const isHighlighted = [
    ...TAB_BAR_BLACKLIST,
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
      label="smile.c_rewards"
      icon={<Icon isHighlighted={isHighlighted} className={tabItemIconStyle} isTabBar />}
      isHighlighted={isHighlighted}
      onClick={handleClick}
      aria-hidden
      tabIndex={-1}
    />
  );
};

TabBarItem.propTypes = {
  path: PropTypes.string.isRequired,
  TabBarAction: PropTypes.func.isRequired,
};

export default TabBarItem;
