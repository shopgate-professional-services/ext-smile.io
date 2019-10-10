import { css } from 'glamor';
import config from '../../../../config';

const { colorConfig } = config;

const container = css({
  color: `${colorConfig.contentFontColor}`,
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
  boxShadow: '0 - 3px 12px 0 rgba(0, 0, 0, .04)',
  zIndex: '1',
}).toString();

const button = css({
  marginBottom: '0',
  fontFamily: 'inherit',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '20px',
  textAlign: 'center',
  verticalAlign: 'middle',
  cursor: 'pointer',
  backgroundImage: 'none',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  display: 'inline-block',
  border: '1px solid transparent',
  padding: '15px 32px',
  transition: 'background-color .1s ease-in',
  backgroundColor: `${colorConfig.buttonBackground}`,
  textDecoration: 'none',
  color: `${colorConfig.buttonFontColor}`,
  outline: 'none',
  borderRadius: '10px',
  position: 'absolute',
  top: '-62px',
  marginLeft: 'auto',
  marginRight: 'auto',
  left: 0,
  right: 0,
  width: '66.66%',
  boxShadow: '0 0 13px 0 rgba(0,0,0,.09)',
  animation: 'fadeIn .2s ease-in-out',
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
  button,
  signIn,
  haveAccount,
  underline,
};
