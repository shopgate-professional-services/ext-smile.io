import { css } from 'glamor';
import config from '../../../../config';

const { colorConfig } = config;

const codeInput = css({
  borderRadius: '10px',
  padding: '12px 20px',
  fontSize: '14px',
  color: '#707070',
  outline: 'none',
  border: '1px solid #E6E6E6',
  width: '100%',
  textAlign: 'center',
}).toString();

const copyButton = css({
  backgroundColor: `${colorConfig.buttonBackground}`,
  color: `${colorConfig.buttonFontColor}`,
  borderRadius: '10px',
  padding: '10px 16px',
  width: '100%',
  ':focus': {
    outline: 'none',
  },
}).toString();

const pageContainer = css({
  padding: '16px',
}).toString();

const codeWrapper = css({
  marginBottom: '20px',
}).toString();

export default {
  codeInput,
  copyButton,
  codeWrapper,
  pageContainer,
};
