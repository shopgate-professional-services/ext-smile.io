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

const footerWrapper = css({
  position: 'fixed',
  height: '52px',
  fontSize: '14px',
  bottom: '0',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  margin: 'auto',
  backgroundColor: '#fff',
  boxShadow: '0 -3px 12px 0 rgba(0,0,0,.04)',
  zIndex: '1',
}).toString();

export default {
  container,
  image,
  text,
  footerWrapper,
};
