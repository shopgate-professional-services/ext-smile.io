import { css } from 'glamor';

const title = css({
  textAlign: 'left',
  lineHeight: 1.5,
  fontSize: '14px',
  paddingLeft: '12px',
}).toString();

const divider = css({
  height: '1px',
  backgroundColor: '#f5f5f5',
}).toString();

export default {
  title,
  divider,
};
