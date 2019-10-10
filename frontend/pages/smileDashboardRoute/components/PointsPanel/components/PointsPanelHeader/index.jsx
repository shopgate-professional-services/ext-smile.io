import React from 'react';
import PropTypes from 'prop-types';
import PointsHeaderLoggedIn from '../PointsHeaderLoggedIn';
import PointsHeaderDefault from '../PointsHeaderDefault';

/**
 * PointsPanelHeader components
 * @param {Object} pointsText Points text
 * @param {number|null} points Smile points
 * @return {JSX}
 */
const PointsPanelHeader = ({ pointsText, points }) => {
  if (points) {
    return <PointsHeaderLoggedIn points={points} />;
  }

  return <PointsHeaderDefault pointsText={pointsText} />;
};

PointsPanelHeader.propTypes = {
  points: PropTypes.number,
  pointsText: PropTypes.shape(),
};

PointsPanelHeader.defaultProps = {
  points: null,
  pointsText: {},
};

export default PointsPanelHeader;
