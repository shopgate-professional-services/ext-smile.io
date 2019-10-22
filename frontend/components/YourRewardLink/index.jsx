import React from 'react';
import PropTypes from 'prop-types';
import BaseSmileLink from '../BaseSmileLink';
import SmileChevron from '../SmileChevron';
import { YOUR_REWARD_ROUTE } from '../../constants';

/**
 * YourRewardLink component
 * @param {Object} reward Smile reward object
 * @return {JSX}
 */
const YourRewardLink = ({ reward }) => {
  const {
    id,
    name,
    image_url: imageUrl,
    source_description: sourceDescription,
  } = reward;

  return (
    <BaseSmileLink
      headline={name}
      description={sourceDescription}
      iconImage={imageUrl}
      CallToAction={<SmileChevron />}
      href={`${YOUR_REWARD_ROUTE}${id}`}
    />
  );
};

YourRewardLink.propTypes = {
  reward: PropTypes.shape(),
};

YourRewardLink.defaultProps = {
  reward: {},
};

export default YourRewardLink;
