import { css } from 'glamor';

const container = css({
  position: 'relative',
  marginBottom: '52px',
  height: '100%',
  overflowY: 'scroll',
  overflowX: 'hidden',
  overscrollBehavior: 'contain',
  padding: '16px',
}).toString();

export default {
  container,
};
