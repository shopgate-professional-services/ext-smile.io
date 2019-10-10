/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import RedeemButton from '../RedeemButton';
import ProgressMeter from '../../../../icons/ProgressMeter';
import BaseSmileLink from '../../../BaseSmileLink';
import styles from './style';
/**
 * @returns {JSX}
 */
const WaysToSpendCard = ({ option, points }) => {
  const {
    reward,
    exchange_description,
    points_price,
    id,
  } = option || {};

  if (!points) {
    return (
      <BaseSmileLink
        iconImage={reward.image_url}
        headline={reward.name}
        description={exchange_description}
      />
    );
  }

  const cta = points > points_price ?
    (
      <RedeemButton rewardId={id} />
    ) :
    (
      <ProgressMeter
        className={styles.progressBar}
        percentage={(points / points_price)}
      />
    );

  return (
    <BaseSmileLink
      iconImage={reward.image_url}
      headline={reward.name}
      description={exchange_description}
      CallToAction={cta}
    />
  );
};

WaysToSpendCard.propTypes = {
  option: PropTypes.shape().isRequired,
  points: PropTypes.number,
};

WaysToSpendCard.defaultProps = {
  points: null,
};

export default WaysToSpendCard;
