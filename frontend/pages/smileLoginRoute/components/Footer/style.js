import { css } from 'glamor';

const container = css({
  display: 'flex',
  alignItems: 'center',
  color: 'hsla(0,0%,50.2%,.8)',
}).toString();

const image = css({
  height: '21px',
  width: '21px',
  backgroundImage: 'url(data:image/svg+xml;charset=utf8,%3Csvg height=\'16\' viewBox=\'0 0 17 16\' widt…l=\'%23707070\' fill-opacity=\'.8\' transform=\'translate(.5 -2)\'/%3E%3C/svg%3E)',
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
