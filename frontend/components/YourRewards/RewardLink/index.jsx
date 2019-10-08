import React from 'react';
import PropTypes from 'prop-types';
import BaseSmileLink from '../../BaseSmileLink';
import SmileChevron from '../../SmileChevron';

const RewardLink = ({ reward }) => {
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
    />
  );
};

RewardLink.propTypes = {
  reward: PropTypes.shape(),
};

RewardLink.defaultProps = {
  reward: {},
};

export default RewardLink;
