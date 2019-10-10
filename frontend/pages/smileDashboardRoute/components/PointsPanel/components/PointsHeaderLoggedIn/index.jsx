import React from 'react';
import PropTypes from 'prop-types';
import { i18n } from '@shopgate/engage/core';
import style from './style'

/**
 * PointsHeaderLoggedIn component
 * @param {number|null} points Smile points
 * @return {JSX}
 */
const PointsHeaderLoggedIn = ({ points }) => {
  if (!points) {
    return null;
  }
  return (
    <div className={style}>
      {`${points} ${i18n.text('smile.points')}`}
    </div>
  );
};

PointsHeaderLoggedIn.propTypes = {
  points: PropTypes.number,
};

PointsHeaderLoggedIn.defaultProps = {
  points: null,
};

export default PointsHeaderLoggedIn;
