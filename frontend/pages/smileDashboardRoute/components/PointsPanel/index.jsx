import React from 'react';
import PropTypes from 'prop-types';
import config from '../../../../config';
import { WAYS_TO_EARN_ROUTE, WAYS_TO_SPEND_ROUTE } from '../../../../constants';
import PanelContainer from '../../../../components/PanelContainer';
import ListItem from './components/ListItem';
import PointsPanelHeader from './components/PointsPanelHeader';
import styles from './style';

/**
 * Member component Smile Login Panel
 * @param {Object} memberText Object containing header info
 * @return {JSX}
 */
const PointsPanel = ({ pointsText, points }) => {
  if (!pointsText) {
    return null;
  }
  const { imageSrcs } = config || {};
  const { waysToEarn, waysToSpend } = imageSrcs;
  const waysToSpendText = points ? 'smile.all_rewards' : 'smile.ways_to_spend';
  return (
    <PanelContainer>
      <div className={styles.container}>
        <PointsPanelHeader pointsText={pointsText} points={points} />
        {/* Todo add next reward section */}
        <div className={styles.listContainer}>
          <ListItem
            img={waysToEarn}
            text="smile.ways_to_earn"
            pathname={WAYS_TO_EARN_ROUTE}
          />
          <ListItem
            img={waysToSpend}
            text={waysToSpendText}
            pathname={WAYS_TO_SPEND_ROUTE}
          />
        </div>
      </div>
    </PanelContainer>
  );
};

PointsPanel.propTypes = {
  pointsText: PropTypes.shape().isRequired,
  points: PropTypes.number,
};

PointsPanel.defaultProps = {
  points: null,
};

export default PointsPanel;
