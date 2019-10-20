import { css } from 'glamor';
import config from '../../config';

const { colorConfig } = config;

const container = css({
  color: `${colorConfig.contentFontColor}`,
  background: `${colorConfig.contentBackground}`,
  position: 'relative',
  marginBottom: '126px',
  height: '100%',
  paddingLeft: '16px',
  paddingRight: '16px',
  overflowY: 'scroll',
  overflowX: 'hidden',
  paddingTop: '16px',
  overscrollBehavior: 'contain',
}).toString();

const loggedInContainer = css({
  marginBottom: '52px !important',
}).toString();

const headerContainer = css({
  paddingTop: '8px',
  paddingBottom: '8px',
  paddingLeft: '12px',
  marginBottom: '8px',
}).toString();

const cardListContainer = css({
  position: 'relative',
  marginBottom: '16px',
}).toString();

export default {
  cardListContainer,
  headerContainer,
  container,
  loggedInContainer
};
