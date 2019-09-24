import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { Link } from '@shopgate/engage/components';
import connect from './connector';

const iconColor = encodeURIComponent('#FFFFFF');
const bgColor = '#b60000';
const iconUrl = `https://cdn.sweettooth.io/v1/images/launcher_icons/bag.svg?color=${iconColor}`;

const wrapper = css({
  position: 'fixed',
  width: 0,
  height: 0,
  bottom: 0,
  right: 0,
  zIndex: 9999,
});

const buttonWrapper = css({
  width: 60,
  height: 60,
  bottom: 30,
  left: 30, // TODO: config
  borderRadius: 30,
  border: 0,
  outline: 0,
  zIndex: 100,
  position: 'fixed',
  overflow: 'hidden',
  boxShadow: '0 0 25px 0 rgba(0,0,0,.05)',
});

const button = css({
  borderRadius: 30,
  padding: 15,
  height: 60,
  minWidth: 60,
  backgroundColor: bgColor,
});

const icon = css({
  margin: 15,
  position: 'absolute',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
});

const SMILE_LOGIN_ROUTE = '/smile-login'; // TODO: import after merged

const DashboardLink = () => (
    <div className={buttonWrapper}>
      <Link href={SMILE_LOGIN_ROUTE}>
        <div className={button}>
          <img src={iconUrl} className={icon} alt="" />
        </div>
      </Link>
    </div>
);

DashboardLink.propTypes = {
};

DashboardLink.defaultProps = {
};

export default (connect(DashboardLink));
