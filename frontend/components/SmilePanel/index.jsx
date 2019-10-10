/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import WaysToEarnCard from './components/WaysToEarnCard';
import WaysToSpendCard from './components/WaysToSpendCard';
import { WAYS_TO_EARN_ROUTE } from '../../constants';
import styles from './style';

/**
 * Panel information for waysToEarn and waysToSpend routes
 * @param {Object} header header info
 * @param {Object} options card options
 * @returns {JSX}
 */
const SmilePanel = ({
  header,
  options,
  location,
  userPoints,
}) => {
  const cards = location === WAYS_TO_EARN_ROUTE ? (
    options.map((option, index) => (
      <WaysToEarnCard key={index.toString()} option={option} />
    ))) :
    (
      options.map((option, index) => (
        <WaysToSpendCard key={index.toString()} option={option} points={userPoints} />
      )));

  return (
    <div className={styles.panelContainer}>
      <div className={styles.headerContainer}>{header}</div>
      <div className={styles.cardList}>
        {cards}
      </div>
    </div>
  );
};
SmilePanel.propTypes = {
  header: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  location: PropTypes.string,
  userPoints: PropTypes.number,
};

SmilePanel.defaultProps = {
  location: null,
  userPoints: null,
};

export default SmilePanel;
