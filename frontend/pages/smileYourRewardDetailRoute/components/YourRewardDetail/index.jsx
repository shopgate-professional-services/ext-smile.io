import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { i18n } from '@shopgate/engage/core';
import CheckMarkIcon from '../../../../icons/CheckMarkIcon';
import PanelContainer from '../../../../components/PanelContainer';
import BaseSmileLink from '../../../../components/BaseSmileLink';
import CopyButton from './components/CopyButton';
import connect from './connector';
import styles from './styles';

/**
 * YourRewardDetail component
 * @param {Object} reward Smile reward object
 * @return {JSX}
 */
const YourRewardDetail = ({ reward }) => {
  const {
    name,
    image_url: imageUrl,
    image_svg: imageSvg,
    source_description: sourceDescription,
    code,
  } = reward || {};

  if (!code) {
    return null;
  }
  const inputRef = useRef(null);

  /**
   * Copy text from input to clipboard
   * @param {Event} event Event
   */
  const copyToClipboard = (event) => {
    inputRef.current.select();
    inputRef.current.setSelectionRange(0, 99999);
    document.execCommand('copy');
    event.target.focus();
  };

  return (
    <div className={styles.pageContainer}>
      <PanelContainer>
        <BaseSmileLink
          iconImage={imageSvg || imageUrl}
          headline={name}
          description={sourceDescription}
        />
        <BaseSmileLink
          headline={i18n.text('smile.use_this_discount_code')}
        />
        <div className={styles.codeWrapper}>
          <input
            readOnly
            aria-readonly="true"
            value={code}
            className={styles.codeInput}
            type="text"
            ref={inputRef}
          />
        </div>
        <div>
          <CopyButton onClick={copyToClipboard} />
        </div>
      </PanelContainer>
    </div>
  );
};

YourRewardDetail.propTypes = {
  reward: PropTypes.shape(),
};

YourRewardDetail.defaultProps = {
  reward: {},
};

export default connect(YourRewardDetail);
