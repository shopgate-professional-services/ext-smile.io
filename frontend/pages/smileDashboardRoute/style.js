import { css } from 'glamor';
import config from '../../config';

const { colorConfig } = config;

const container = css({
  height: '100%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  marginBottom: '27px',
}).toString();

const headerContainer = css({
  maxHeight: '0',
  height: '0',
  width: '100%',
  overflow: 'visible',
  color: '#fff',
  outline: 'none',
});

const panelContainer = css({
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

export default {
  container,
  headerContainer,
  panelContainer,
};
