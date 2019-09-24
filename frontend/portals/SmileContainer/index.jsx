import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import getConfig from '../../helpers/getConfig';
import connect from './connector';

const { smileChannelApiKey } = getConfig();
/**
 * SmileContainer component
 * @param {string} digest Smile digest data
 * @param {string} externalCustomerId External Customer Id
 * @param {Function} mountScript Mount script function
 * @return {JSX}
 */
const SmileContainer = ({ digest, externalCustomerId, mountScript }) => {
  useEffect(() => {
    if (!(digest && externalCustomerId)) {
      return;
    }
    mountScript(externalCustomerId, digest);
  }, [digest]);

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
  mountScript: PropTypes.func,
};

SmileContainer.defaultProps = {
  digest: null,
  externalCustomerId: null,
  mountScript: () => {},
};

export default connect(SmileContainer);
