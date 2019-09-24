import { css } from 'glamor';

const container = css({
  display: 'flex',
  alignItems: 'center',
  color: 'hsla(0,0%,50.2%,.8)',
}).toString();

// Added svg as a background image like is done in smile i frame
const image = css({
  height: '21px',
  width: '21px',
  backgroundImage: '',
  marginRight: '8px !important',
}).toString();

const text = css({
  textDecoration: 'none',
}).toString();

export default {
  container,
  text,
};
