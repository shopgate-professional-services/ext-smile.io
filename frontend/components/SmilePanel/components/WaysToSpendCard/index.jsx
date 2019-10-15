import React from 'react';
import PropTypes from 'prop-types';
import RedeemButton from '../RedeemButton';
import ProgressMeter from '../../../../icons/ProgressMeter';
import BaseSmileLink from '../../../BaseSmileLink';
import styles from './style';

/**
 * @param {Object} option Smile way to spend object
 * @param {boolean} haveSmileCustomer Smile customer exists
 * @param {number|null} points Smile points
 * @returns {JSX}
 */
const WaysToSpendCard = ({ option, haveSmileCustomer, points = 0 }) => {
  const {
    reward,
    exchange_description: exchangeDescription,
    points_price: pointsPrice,
    id,
  } = option || {};
  if (!haveSmileCustomer || !pointsPrice) {
    return (
      <BaseSmileLink
        iconImage={reward.image_url}
        headline={reward.name}
        description={exchangeDescription}
      />
    );
  }

  const cta = points > pointsPrice ?
    (
      <RedeemButton rewardId={id} />
    ) :
    (
      <ProgressMeter
        className={styles.progressBar}
        percentage={(points / pointsPrice)}
      />
    );

  return (
    <BaseSmileLink
      iconImage={reward.image_url}
      headline={reward.name}
      description={exchangeDescription}
      CallToAction={cta}
    />
  );
};

WaysToSpendCard.propTypes = {
  option: PropTypes.shape().isRequired,
  haveSmileCustomer: PropTypes.bool,
  points: PropTypes.number,
};

WaysToSpendCard.defaultProps = {
  haveSmileCustomer: false,
  points: null,
};

export default WaysToSpendCard;
