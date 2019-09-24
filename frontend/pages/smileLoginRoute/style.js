import { css } from 'glamor';
import getConfig from '../../helpers/getConfig';

const { colorConfig } = getConfig();

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

const footerContainer = css({
  paddingTop: '120px',
  height: '100%',
  paddingLeft: '16px',
  paddingRight: '16px',
  overflowY: 'scroll',
  overflowX: 'hidden',
  overscrollBehavior: 'contain',
}).toString();

const pannelContainer = css({
  minHeight: 'calc(100% + 36px)',
});

const becomeContainer = css({
  position: 'relative',
  padding: '16px 12px',
  borderRadius: '10px',
  backgroundColor: `${colorConfig.contentBackground}`,
  marginBottom: '12px',
  boxShadow: '0 0 13px 0 rgba(0,0,0,.09)',
  overflow: 'hidden',
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

const footer = css({
  position: 'fixed',
  height: '52px',
  fontSize: '14px',
  bottom: '0',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  margin: 'auto',
  backgroundColor: '#fff',
  boxShadow: '0 -3px 12px 0 rgba(0,0,0,.04)',
  zIndex: '1',
}).toString();

export default {
  container,
  headerContainer,
  footerContainer,
  pannelContainer,
  becomeContainer,
  pointsContainer,
  footer,
};
