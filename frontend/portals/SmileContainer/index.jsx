import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import getConfig from '../../helpers/getConfig';
import connect from './connector';

const { smileJavascriptSdkSrc, smileChannelApiKey } = getConfig();
/**
 * SmileContainer component
 * @param {string} digest Smile digest data
 * @param {string} externalCustomerId External Customer Id
 * @return {JSX}
 */
const SmileContainer = ({ digest, externalCustomerId }) => {
  if (!(digest && externalCustomerId)) {
    return null;
  }
  /**
   * Mount Smile Javascript SDK script
   */
  const mountScript = () => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = smileJavascriptSdkSrc;
    const parent = document.getElementsByTagName('head')[0];
    parent.appendChild(script);
  };

  mountScript();
  return (
    <Fragment>
      <div
        className="sweettooth-init"
        data-channel-api-key={smileChannelApiKey}
        data-external-customer-id={externalCustomerId}
        data-customer-auth-digest={digest}
      />
      <div className="sweettooth-launcher" />
    </Fragment>
  );
};

SmileContainer.propTypes = {
  digest: PropTypes.string,
  externalCustomerId: PropTypes.string,
};

SmileContainer.defaultProps = {
  digest: null,
  externalCustomerId: null,
};

export default connect(SmileContainer);
