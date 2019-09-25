import { css } from 'glamor';
import getConfig from '../../../../helpers/getConfig';

const { colorConfig } = getConfig();

const headerContainer = css({
  height: '140px',
  padding: '24px',
  position: 'relative',
  background: `${colorConfig.headerBackground}`,
  boxSizing: 'border-box',
  display: 'block',
  transform: 'translate3d(0px, 0px, 0px)',
}).toString();

const wrapper = css({
  opacity: 1,
  textShadow: '0 0 20px rgba(0,0,0,.1)',
}).toString();

const secondary = css({
  color: `${colorConfig.headerFontColor}`,
  fontWeight: '500',
  fontFamily: 'Proxima Nova,arial,sans-serif',
  fontSize: '16px',
  lineHeight: '24px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
}).toString();

const primary = css({
  color: `${colorConfig.headerFontColor}`,
  fontWeight: '600',
  fontFamily: 'Poppins Nova,arial,sans-serif',
  fontSize: '20px',
  lineHeight: '39px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
}).toString();

export default {
  headerContainer,
  wrapper,
  secondary,
  primary,
};
