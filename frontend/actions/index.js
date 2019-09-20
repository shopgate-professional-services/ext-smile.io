import { PipelineRequest, logger } from '@shopgate/engage/core';

export const fetchSmileDataDigest = () => () => {
  new PipelineRequest('shopgate-project.smile-io.getCustomerDigest')
    .dispatch()
    .then((response) => {
      console.log('smile digest response', response);
    })
    .catch((error) => {
      logger.error(error);
    });
};
