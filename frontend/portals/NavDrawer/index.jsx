import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { useNavigation } from '@shopgate/engage/core';
import isIOSTheme from '@shopgate-ps/pwa-extension-kit/env/helpers/isIOSTheme';
import { SMILE_DASHBOARD_ROUTE } from '../../constants';
import Icon from '../../components/DashboardIcon';
import { addLinksToMenu } from '../../config';

const iconStyle = css({
  padding: '0 32px 0 16px',
}).toString();

/**
 * NavDrawer (and MoreMenu) Item.
 * @param {Object} props Props.
 * @returns {JSX}
 */
const NavDrawerItem = ({ Item }) => {
  if (!addLinksToMenu || isIOSTheme()) {
    return null;
  }

  const { push } = useNavigation();

  return (
    <Item
      label="smile-io.rewards"
      icon={<Icon className={iconStyle} />}
      onClick={() => push({ pathname: SMILE_DASHBOARD_ROUTE })}
    />
  );
};

NavDrawerItem.propTypes = {
  Item: PropTypes.func.isRequired,
};

export default NavDrawerItem;
