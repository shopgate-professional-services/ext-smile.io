import { css } from 'glamor';
import config from '../../config';

const { colorConfig } = config;

const container = css({
  width: '25px',
  height: '25px',
}).toString();

const img = css({
  transform: 'scaleX(-1)',
  width: '100%',
  height: '100%',
  color: `${colorConfig.chevronColor}`,
}).toString();

export default {
  container,
  img,
};

