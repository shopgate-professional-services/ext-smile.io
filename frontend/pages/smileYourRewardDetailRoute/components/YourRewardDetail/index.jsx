import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { i18n } from '@shopgate/engage/core';
import PanelContainer from '../../../../components/PanelContainer';
import BaseSmileLink from '../../../../components/BaseSmileLink';
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
  let indicationTimeout;
  const [copying, setCopying] = useState(false);
  useEffect(() => (
    () => {
      if (indicationTimeout) {
        clearTimeout(indicationTimeout);
      }
    }
  ), [reward]);
  const inputRef = useRef(null);
  /**
   * Manipulate copying state
   */
  const indicateCopying = () => {
    setCopying(true);
    indicationTimeout = setTimeout(() => setCopying(false), 2000);
  };

  /**
   * Copy text from input to clipboard
   * @param {Event} event Event
   */
  const copyToClipboard = (event) => {
    indicateCopying();
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
          <button
            className={styles.copyButton}
            onClick={copyToClipboard}
          >
            {copying ? <span>&#10003;</span> : <span>{i18n.text('smile.copy_code')}</span>}
          </button>
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
