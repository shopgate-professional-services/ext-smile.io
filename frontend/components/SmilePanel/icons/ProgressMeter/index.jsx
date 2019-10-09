import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@shopgate/pwa-common/components/Icon';
import config from '../../../../config';
import { DASH_ARRAY_VALUE } from '../../../../constants';

const { colorConfig } = config;

/**
 * The Progress Meter icon component
 * @param {Object} props The icon component properties.
 * @returns {JSX}
 */
const ProgressMeter = (props) => {
  const dashOffSet = DASH_ARRAY_VALUE - (DASH_ARRAY_VALUE * props.percentage);
  const content = (
    `
    <svg xmlns = "http://www.w3.org/2000/svg" width = "22" height = "21" viewBox = "0 0 22 21" >
      <g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-width="2" transform="translate(1 1)">
        <path class="progress-base-path" stroke="#e6e6e6" d="M4.86111111,18.3333333 C1.09026555,16.030889 -0.68888696,11.5012932 0.50697284,7.2480068 C1.70283264,2.99472037 5.58179605,0.055968107 10,0.055968107 C14.418204,0.055968107 18.2971673,2.99472037 19.4930271,7.2480068 C20.688887,11.5012932 18.9097344,16.030889 15.1388889,18.3333333">
        </path>
        <path class="progress-main-path" stroke=${colorConfig.buttonBackground} d="M4.86111111,18.3333333 C1.09026555,16.030889 -0.68888696,11.5012932 0.50697284,7.2480068 C1.70283264,2.99472037 5.58179605,0.055968107 10,0.055968107 C14.418204,0.055968107 18.2971673,2.99472037 19.4930271,7.2480068 C20.688887,11.5012932 18.9097344,16.030889 15.1388889,18.3333333" style="stroke-dasharray: 51.1503, 51.1503; stroke-dashoffset: ${dashOffSet};">
        </path>
      </g>
    </svg >
    `
  );
  return <Icon content={content} viewBox="0 0 22 21" {...props} />;
};

ProgressMeter.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default ProgressMeter;
