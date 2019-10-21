import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

/**
 * PointsHeaderDefault component
 * @param {Object} pointsText Points text object
 * @return {JSX}
 */
const PointsHeaderDefault = ({ pointsText }) => {
  const { header, paragraph } = pointsText || {};
  if (!(header && paragraph)) {
    return null;
  }

  return (
    <Fragment>
      <div className={styles.header}>
        {header}
      </div>
      <div className={styles.paragraph}>
        {paragraph}
      </div>
    </Fragment>
  );
};

PointsHeaderDefault.propTypes = {
  pointsText: PropTypes.shape(),
};

PointsHeaderDefault.defaultProps = {
  pointsText: {},
};

export default PointsHeaderDefault;
