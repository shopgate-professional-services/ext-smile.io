import { css } from 'glamor';
import config from '../../../../../../config';

const { colorConfig } = config;

const title = css({
  textAlign: 'left',
  lineHeight: 1.5,
  fontSize: '14px',
  paddingLeft: '12px',
}).toString();

const divider = css({
  height: '1px',
  backgroundColor: `${colorConfig.dividerColor}`,
}).toString();

export default {
  title,
  divider,
};
