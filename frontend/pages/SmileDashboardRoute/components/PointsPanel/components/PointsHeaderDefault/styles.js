import { css } from 'glamor';

const header = css({
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '25px',
  paddingTop: '8px !important',
  marginBottom: '20px !important',

}).toString();

const paragraph = css({
  paddingLeft: '12px',
  paddingRight: '12px',
  marginBottom: '20px',
  whiteSpace: 'pre-wrap !important',
}).toString();

export default {
  header,
  paragraph,
};
