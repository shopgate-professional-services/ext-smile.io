import { css } from 'glamor';
import config from '../../../../config';

const { colorConfig } = config;

const button = css({
  display: 'inline-block',
  backgroundColor: `${colorConfig.buttonBackground}`,
  color: `${colorConfig.buttonFontColor}`,
  width: '86px',
  height: '42px',
  marginLeft: '8px',
  flexShrink: '0',
  borderRadius: '10px',
  outline: 'none',
  padding: '10px 16px',
  marginBottom: 0,
  fontWeight: '400',
  lineHeight: '20px',
  fontSize: '14px',
  textAlign: 'center',
  verticalAlign: 'middle',
  alignItems: 'flex-start',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  border: '1px solid transparent',
}).toString();

export default {
  button,
};
