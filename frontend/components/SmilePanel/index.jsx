/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { CheckIcon } from '@shopgate/engage/components';
import I18n from '@shopgate/pwa-common/components/I18n';
import Link from '@shopgate/pwa-common/components/Link';
import ProgressMeter from './icons/ProgressMeter';
import BaseSmileLink from '../BaseSmileLink';
import { WAYS_TO_EARN_ROUTE, SMILE_LOGIN_ROUTE } from '../../constants';
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
    options.map((option, index) => {
      const { is_available, activity_rule } = option || {};
      const cta = is_available ? null : (<CheckIcon className={styles.check} />);

      return (
        <BaseSmileLink
          key={index.toString()}
          muted={!is_available}
          iconImage={activity_rule.image_url}
          headline={activity_rule.name}
          description={activity_rule.value_description}
          CallToAction={cta}
        />
      );
    })
  ) :
    (
      options.map((option, index) => {
        const { reward, exchange_description, points_price } = option || {};
        if (!userPoints) {
          return (
            <BaseSmileLink
              key={index.toString()}
              iconImage={reward.image_url}
              headline={reward.name}
              description={exchange_description}
            />
          );
        }

        const cta = userPoints > points_price ?
          (
            <Link href={SMILE_LOGIN_ROUTE} className={styles.button}>
              <I18n.Text string="smile.redeem" />
            </Link>
          ) : (<ProgressMeter className={styles.progressBar} percentage={(userPoints / points_price)} />);

        return (
          <BaseSmileLink
            key={index.toString()}
            iconImage={reward.image_url}
            headline={reward.name}
            description={exchange_description}
            CallToAction={cta}
          />
        );
      })
    );

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
