import React from 'react';
import PropTypes from 'prop-types';
import { useNavigation } from '@shopgate/engage/core';
import styles from './style';
/**
 * Items for ways to spend/earn
 * @param {string} img img src
 * @param {string} text text for button
 * @returns {JSX}
 */
const ListItem = ({ img, text, pathname }) => {
  if (!img || !text || !pathname) {
    return null;
  }
  const { push } = useNavigation();
  return (
    <button className={styles.buttonItem} onClick={() => push({ pathname })}>
      <div className={styles.content}>
        <img className={styles.image} alt="" src={img} />
        <div>{text}</div>
        <div className={styles.chevron} />
      </div>
    </button>
  );
};

ListItem.propTypes = {
  img: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ListItem;
