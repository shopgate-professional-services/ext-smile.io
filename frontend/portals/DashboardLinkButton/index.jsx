import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { Link } from '@shopgate/engage/components';
import { logger } from '@shopgate/engage/core';
import connect from './connector';
import { fixedDashboardButtonStyling } from '../../config';
import { SMILE_DASHBOARD_ROUTE } from '../../constants';

const iconColor = encodeURIComponent(fixedDashboardButtonStyling.iconColor);
let { position } = fixedDashboardButtonStyling;

if (!['left', 'right'].includes(position)) {
  logger.warn('Fallback to "right". unsupported position:', position);
  position = 'right';
}

const buttonWrapper = css({
  width: 50,
  height: 50,
  bottom: 'calc(30px + var(--tabbar-height, 0px))',
  [position]: 25,
  borderRadius: 25,
  border: 0,
  outline: 0,
  zIndex: 100,
  position: 'fixed',
  overflow: 'hidden',
  boxShadow: '0 0 25px 0 rgba(0,0,0,.05)',
});

const button = css({
  borderRadius: 25,
  padding: 10,
  height: 50,
  minWidth: 50,
  backgroundColor: fixedDashboardButtonStyling.bgColor,
});

const icon = css({
  margin: 10,
  position: 'absolute',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
});

/**
 * DashboardLinkButton
 * @param {Object} prop props
 * @return {JSX}
 */
const DashboardLinkButton = ({ show }) => {
  if (!show) {
    return false;
  }

  return (
    <div className={buttonWrapper}>
      <Link href={SMILE_DASHBOARD_ROUTE}>
        <div className={button}>
          <img src={`${fixedDashboardButtonStyling.iconUrl}${iconColor}`} className={icon} alt="" />
        </div>
      </Link>
    </div>
  );
};

DashboardLinkButton.propTypes = {
  show: PropTypes.bool,
};

DashboardLinkButton.defaultProps = {
  show: false,
};

export default connect(DashboardLinkButton);
