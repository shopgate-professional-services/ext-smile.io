import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import initializeSmileScript from '../../helpers/initializeSmileSdk';
import connect from './connector';
import { smileChannelApiKey } from '../../config';

/**
 * SmileContainer component
 * @param {string} digest Smile digest data
 * @param {string} externalCustomerId External Customer Id
 * @return {JSX}
 */
const SmileContainer = ({ digest, externalCustomerId }) => {
  useEffect(() => {
    if (!(digest && externalCustomerId)) {
      return;
    }

    initializeSmileScript(externalCustomerId, digest);
  }, [digest, externalCustomerId]);

  if (!(digest && externalCustomerId)) {
    return null;
  }

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
