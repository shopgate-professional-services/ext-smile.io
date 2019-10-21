import React from 'react';
import PropTypes from 'prop-types';
import { I18n } from '@shopgate/engage/components';
import WaysToSpendCard from '../../../../../../components/SmilePanel/components/WaysToSpendCard';
import styles from './styles';
import connect from './connector';

/**
 * NextReward component
 * @param {number|null} points Smile points
 * @param {Object} nextPointProduct Smile PointProduct objects
 * @return {JSX}
 */
const NextReward = ({ points, nextPointProduct }) => {
  if (!(points && nextPointProduct)) {
    return null;
  }

  return (
    <div>
      <div className={styles.title}>
        <I18n.Text string="smile.next_reward" />
      </div>
      <WaysToSpendCard points={points} option={nextPointProduct} />
      <div className={styles.divider} />
    </div>
  );
};

NextReward.propTypes = {
  nextPointProduct: PropTypes.shape(),
  points: PropTypes.number,
};

NextReward.defaultProps = {
  nextPointProduct: null,
  points: null,
};

export default connect(NextReward);
