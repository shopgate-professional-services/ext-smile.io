import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import WaysToEarnCard from './components/WaysToEarnCard';
import WaysToSpendCard from './components/WaysToSpendCard';
import { WAYS_TO_EARN_ROUTE } from '../../constants';
import styles from './style';

/**
 * Panel information for waysToEarn and waysToSpend routes
 * @param {Object} header header info
 * @param {Object} options card options
 * @param {string} location Location string
 * @param {boolean} haveSmileCustomer Smile customer exists
 * @param {number| null} userPoints Smile points
 * @returns {JSX}
 */
const SmilePanel = ({
  header,
  options,
  location,
  haveSmileCustomer,
  userPoints,
}) => {
  const container = classNames(
    styles.container,
    { [styles.loggedInContainer]: haveSmileCustomer }
  );

  const cards = location === WAYS_TO_EARN_ROUTE ? (
    options.map((option, index) => (
      <WaysToEarnCard key={index.toString()} option={option} />
    ))) :
    (
      options.map((option, index) => (
        <WaysToSpendCard
          key={index.toString()}
          option={option}
          points={userPoints}
          haveSmileCustomer={haveSmileCustomer}
        />
      )));

  return (
    <div className={container}>
      <div className={styles.headerContainer}>{header}</div>
      <div className={styles.cardListContainer}>
        {cards}
      </div>
    </div>
  );
};

SmilePanel.propTypes = {
  header: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  haveSmileCustomer: PropTypes.bool,
  location: PropTypes.string,
  userPoints: PropTypes.number,
};

SmilePanel.defaultProps = {
  haveSmileCustomer: false,
  location: null,
  userPoints: null,
};

export default SmilePanel;
