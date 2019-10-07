import React from 'react';
import PropTypes from 'prop-types';
import config from '../../../../config';
import { WAYS_TO_EARN_ROUTE, WAYS_TO_SPEND_ROUTE } from '../../../../constants';
import ListItem from './components/ListItem';
import styles from './style';

/**
 * Member component Smile Login Panel
 * @param {Object} memberText Object containing header info
 * @return {JSX}
 */
const PointsPanel = ({ pointsText }) => {
  if (!pointsText) {
    return null;
  }
  const { imageSrcs } = config || {};
  const { header, paragraph } = pointsText || {};
  const { waysToEarn, waysToSpend } = imageSrcs;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {header}
      </div>
      <div className={styles.paragraph}>
        {paragraph}
      </div>
      <div className={styles.listContainer}>
        <ListItem className={styles.ListItem} img={waysToEarn} earn pathname={WAYS_TO_EARN_ROUTE} />
        <ListItem img={waysToSpend} earn={false} pathname={WAYS_TO_SPEND_ROUTE} />
      </div>
    </div>
  );
};

PointsPanel.propTypes = {
  pointsText: PropTypes.shape().isRequired,
};

export default PointsPanel;