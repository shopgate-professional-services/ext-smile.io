import { css } from 'glamor';
import config from '../../config';

const { colorConfig } = config;

const panelContainer = css({
  color: `${colorConfig.contentFontColor}`,
  magrinBottom: '126px',
  height: '100%',
  paddingLeft: '16px',
  paddingRight: '16px',
  overflowY: 'scroll',
  overflowX: 'hidden',
  paddingTop: '16px',
  overscrollBehavior: 'contain',
}).toString();

export default {
  panelContainer,
};
