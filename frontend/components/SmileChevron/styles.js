import { css } from 'glamor';

const container = css({
  width: '25px',
  height: '25px',
}).toString();

const img = css({
  transform: 'scaleX(-1)',
  width: '100%',
  height: '100%',
  color: '#BCBCBD',
}).toString();

export default {
  container,
  img,
};

