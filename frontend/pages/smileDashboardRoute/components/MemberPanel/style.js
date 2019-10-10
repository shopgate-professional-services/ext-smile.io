import { css } from 'glamor';
import config from '../../../../config';

const { colorConfig } = config;

const container = css({
  textAlign: 'center !important',
}).toString();

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

const joinButton = css({
  borderRadius: '10px',
  color: `${colorConfig.buttonFontColor}`,
  outline: 'none',
  textDecoration: 'none',
  backgroundColor: `${colorConfig.buttonBackground}`,
  marginBottom: '16px !important',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '20px',
  textAlign: 'center',
  verticalAlign: 'middle',
  display: 'inline-block',
  border: '1px solid transparent',
  padding: '15px 32px',
  width: 'inherit !important',
}).toString();

const signIn = css({
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '20px',
  marginBottom: '8px !important',
  display: '-webkit-inline-box',
}).toString();

const haveAccount = css({
  marginRight: '5px',
}).toString();

const underline = css({
  textDecoration: 'underline',
}).toString();

export default {
  container,
  header,
  paragraph,
  joinButton,
  signIn,
  haveAccount,
  underline,
};
