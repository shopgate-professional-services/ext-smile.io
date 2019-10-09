import { css } from 'glamor';
import config from '../../../../../../config';

const { colorConfig } = config;

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

const copyButtonContent = css({
  height: '20px',
  lineHeight: '20px',
  textAlign: 'center',
  marginRight: 'auto',
  marginLeft: 'auto',
}).toString();

const checkIcon = css({
  height: '20px',
  width: '20px',
  display: 'block',
  marginRight: 'auto',
  marginLeft: 'auto',
}).toString();

export default {
  copyButton,
  copyButtonContent,
  checkIcon,
};
