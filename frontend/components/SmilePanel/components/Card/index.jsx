import React from 'react';
import PropTypes from 'prop-types';
import styles from './style';

/**
 * @param {string} img img src
 * @param {string} text title text
 * @param {string} pointsText subtitle text
 * @returns {JSX}
 */
const Card = ({ img, text, pointsText }) => (
  <div className={styles.cardItemContainer}>
    <div className={styles.cardItem}>
      <div className={styles.cardItemContent}>
        <img className={styles.image} alt="" src={img} />
        <div>
          <div>{text}</div>
          <div className={styles.subtitle}>{pointsText}</div>
        </div>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  img: PropTypes.string.isRequired,
  pointsText: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Card;
