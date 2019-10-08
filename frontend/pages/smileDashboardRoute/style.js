import { css } from 'glamor';
import config from '../../config';

const { colorConfig } = config;

const container = css({
  height: '100%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}).toString();

const headerContainer = css({
  maxHeight: '0',
  height: '0',
  width: '100%',
  overflow: 'visible',
  color: '#fff',
  outline: 'none',
});

const pannelContainer = css({
  color: `${colorConfig.contentFontColor}`,
  paddingTop: '100px',
  height: '100%',
  paddingLeft: '16px',
  paddingRight: '16px',
  overflowY: 'scroll',
  overflowX: 'hidden',
  overscrollBehavior: 'contain',
  minHeight: 'calc(100% + 36px)',
  ':scrollbar': {
    display: 'none',
  },
}).toString();

const becomeContainer = css({
  position: 'relative',
  padding: '16px 12px',
  borderRadius: '10px',
  backgroundColor: `${colorConfig.contentBackground}`,
  marginBottom: '12px',
  boxShadow: '0 0 13px 0 rgba(0,0,0,.09)',
  overflow: 'hidden',
  opacity: 1,
}).toString();

const pointsContainer = css({
  position: 'relative',
  padding: '16px 12px',
  borderRadius: '10px',
  backgroundColor: `${colorConfig.contentBackground}`,
  marginBottom: '12px',
  boxShadow: '0 0 13px 0 rgba(0,0,0,.09)',
  overflow: 'hidden',
}).toString();

export default {
  container,
  headerContainer,
  pannelContainer,
  becomeContainer,
  pointsContainer,
};
