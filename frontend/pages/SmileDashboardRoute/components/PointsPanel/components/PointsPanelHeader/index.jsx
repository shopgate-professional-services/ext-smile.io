import React from 'react';
import PropTypes from 'prop-types';
import PointsHeaderLoggedIn from '../PointsHeaderLoggedIn';
import PointsHeaderDefault from '../PointsHeaderDefault';

/**
 * PointsPanelHeader components
 * @param {Object} pointsText Points text
 * @param {boolean} haveSmileCustomer Smile customer exists
 * @param {number|null} points Smile points
 * @return {JSX}
 */
const PointsPanelHeader = ({ pointsText, haveSmileCustomer, points }) => {
  if (haveSmileCustomer) {
    return <PointsHeaderLoggedIn points={points} />;
  }

  return <PointsHeaderDefault pointsText={pointsText} />;
};

PointsPanelHeader.propTypes = {
  haveSmileCustomer: PropTypes.bool,
  points: PropTypes.number,
  pointsText: PropTypes.shape(),
};

PointsPanelHeader.defaultProps = {
  haveSmileCustomer: false,
  points: null,
  pointsText: {},
};

export default PointsPanelHeader;
