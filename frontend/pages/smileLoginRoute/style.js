import { css } from 'glamor';
import getConfig from '../../helpers/getConfig';

const { colorConfig } = getConfig();

const container = css({
  height: '100%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',

}).toString();

const footerContainer = css({
  fontFamily: 'Proxima Nova,arial,sans-serif!important',
  height: '100%',
  paddingTop: '160px',
  paddingLeft: '16px',
  paddingRight: '16px',
  overflowY: 'scroll',
  overflowX: 'hiddern',
  boxSizing: 'border-box',
  lineHeight: 1.5,
  display: 'block',
  fontSize: '14px',
  fontWeight: '400',
}).toString();

const panelContainer = css({
  minHeight: 'calc(100% + 36px)',
});

const memberContainer = css({
  position: 'relative',
  padding: '16px, 12px',
  backgroundColor: `${colorConfig.contentBackground}`,
  marginBottom: '12px',
  boxShadow: '0 0 13px 0 rgba(0,0,0,.09)',
  overflow: 'hidden',
  opacity: 0,
}).toString();

const pointsContainer = css({
  position: 'relative',
  padding: '16px, 12px',
  marginBottom: '64px',
  backgroundColor: `${colorConfig.contentBackground}`,
  boxShadow: '0 0 13px 0 rgba(0,0,0,.09)',
  overflow: 'hidden',
  opacity: 0,
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
  footer,
  footerContainer,
  panelContainer,
  memberContainer,
  pointsContainer,
};
