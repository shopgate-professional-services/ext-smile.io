import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { i18n } from '@shopgate/engage/core';
import styles from './styles';
import CheckMarkIcon from '../../../../../../icons/CheckMarkIcon';

/**
 * CopyButton component
 * @param {Function} onClick On Click
 * @return {JSX}
 * @constructor
 */
const CopyButton = ({ onClick }) => {
  const [acting, setActing] = useState(false);
  /**
   * Manipulate copying state
   */
  const indicateAction = () => {
    setActing(true);
    setTimeout(() => setActing(false), 2000);
  };

  /**
   * Handel click
   * @param {Event} event Event
   */
  const handelClick = (event) => {
    indicateAction();
    onClick(event);
  };

  return (
    <button
      className={styles.copyButton}
      onClick={handelClick}
    >
      <div className={styles.copyButtonContent}>
        {
          acting
            ? <CheckMarkIcon strokeColor="#FFF" className={styles.checkIcon} />
            : <span>{i18n.text('smile.copy_code')}</span>
        }
      </div>
    </button>
  );
};

CopyButton.propTypes = {
  onClick: PropTypes.func,
};

CopyButton.defaultProps = {
  onClick: () => {},
};

export default CopyButton;

