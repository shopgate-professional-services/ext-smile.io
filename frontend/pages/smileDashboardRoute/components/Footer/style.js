import { css } from 'glamor';

const container = css({
  display: 'flex',
  alignItems: 'center',
  color: 'hsla(0,0%,50.2%,.8)',
}).toString();

const image = css({
  fill: 'hsla(0,0%,50.2%,.8)',
  height: '21px',
  width: '21px',
  marginRight: '8px !important',
}).toString();

const text = css({
  textDecoration: 'none',
}).toString();

export default {
  container,
  image,
  text,
};
