import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import connect from './connector';
import { smileChannelApiKey } from '../../config';

/**
 * SmileContainer component
 * @param {string} digest Smile digest data
 * @param {string} externalCustomerId External Customer Id
 * @param {Function} initializeScript Initialize Smile.io script function
 * @return {JSX}
 */
const SmileContainer = ({ digest, externalCustomerId, initializeScript }) => {
  useEffect(() => {
    if (!(digest && externalCustomerId)) {
      return;
    }

    initializeScript(externalCustomerId, digest);
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
  initializeScript: PropTypes.func,
};

SmileContainer.defaultProps = {
  digest: null,
  externalCustomerId: null,
  initializeScript: () => {},
};

export default connect(SmileContainer);
