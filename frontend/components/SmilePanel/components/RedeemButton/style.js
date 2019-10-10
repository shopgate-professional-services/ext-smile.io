import { css } from 'glamor';
import config from '../../../../config';

const { colorConfig } = config;

const button = css({
  display: 'inline-block',
  backgroundColor: `${colorConfig.buttonBackground} !important`,
  color: `${colorConfig.buttonFontColor} !important`,
  width: '86px !important',
  height: '42px !important',
  marginLeft: '8px !important',
  flexShrink: '0',
  borderRadius: '10px !important',
  outline: 'none !important',
  padding: '10px 16px !important',
  marginBottom: 0,
  fontWeight: '400 !important',
  lineHeight: '20px !important',
  fontSize: '14px !important',
  textAlign: 'center !important',
  verticalAlign: 'middle !important',
  alignItems: 'flex-start !important',
  whiteSpace: 'nowrap !important',
  overflow: 'hidden !important',
  border: '1px solid transparent !important',
}).toString();

const text = css({
  margin: '0 -16px 0 !important',
}).toString();

export default {
  button,
  text,
};
