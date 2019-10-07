import React from 'react';
import PropTypes from 'prop-types';
import { useNavigation } from '@shopgate/engage/core';
import I18n from '@shopgate/pwa-common/components/I18n';
import styles from './style';
/**
 * Items for ways to spend/earn
 * @param {string} img img src
 * @param {string} text text for button
 * @returns {JSX}
 */
const ListItem = ({ img, earn, pathname }) => {
  if (!img || !pathname) {
    return null;
  }

  const textString = earn ? 'smile.ways_to_earn' : 'smile.ways_to_spend';

  const { push } = useNavigation();
  return (
    <button className={styles.buttonItem} onClick={() => push({ pathname })}>
      <div className={styles.content}>
        <img className={styles.image} alt="" src={img} />
        <I18n.Text string={textString} />
        <div className={styles.chevron} />
      </div>
    </button>
  );
};

ListItem.propTypes = {
  earn: PropTypes.bool.isRequired,
  img: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default ListItem;
