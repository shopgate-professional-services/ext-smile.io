import React from 'react';
import PropTypes from 'prop-types';
import { i18n } from '@shopgate/engage/core';
import BaseSmileLink from '../../../../../../components/BaseSmileLink';
import SmileChevron from '../../../../../../components/SmileChevron';
/**
 * Items for ways to spend/earn
 * @param {string} img img src
 * @param {string} text text for button
 * @returns {JSX}
 */
const ListItem = ({ img, text, pathname }) => {
  if (!img || !pathname) {
    return null;
  }
  return (
    <BaseSmileLink
      headline={i18n.text(text)}
      iconImage={img}
      href={pathname}
      CallToAction={<SmileChevron />}
    />
  );
};

ListItem.propTypes = {
  img: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ListItem;
