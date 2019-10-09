import { css } from 'glamor';
import config from '../../config';

const { colorConfig, fontFamily } = config;

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

const headerContainer = css({
  paddingTop: '8px',
  paddingBottom: '8px',
  paddingLeft: '12px',
  marginBottom: '8px',
}).toString();

const header = css({
  fontSize: '16px',
  fontWeight: '500',
  lineHeight: '24px',
  fontFamily: `${fontFamily.secondaryFontFamily}`,
  color: '#333',
  paddingRight: '12px',
});

const cardListContainer = css({
  position: 'relative',
  marginBottom: '16px',
  ':last-of-type:not(.with-border-bottom)': {
    marginBottom: 0,
  },
  ':last-of-type:not(.with-border-bottom):after': {
    display: 'none',
  },
  ':after': {
    height: '1px',
    width: 'calc(100% + 24px)',
    content: '',
    left: '-12px',
    position: 'absolute',
    bottom: '-8px',
    backgroundColor: '#f5f5f5',
  },
}).toString();

const button = css({
  display: 'inline-block',
  backgroundColor: `${colorConfig.buttonBackground}`,
  color: `${colorConfig.buttonFontColor}`,
  width: '86px',
  height: '42px',
  marginLeft: '8px',
  flexShrink: '0',
  borderRadius: '10px',
  outline: 'none',
  padding: '10px 16px',
  marginBottom: 0,
  fontWeight: '400',
  lineHeight: '20px',
  fontSize: '14px',
  textAlign: 'center',
  verticalAlign: 'middle',
  alignItems: 'flex-start',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  border: '1px solid transparent',
}).toString();

const progressBar = css({
  width: '22px',
  height: '21px',
}).toString();

const check = css({
  display: 'flex',
  justifyContent: 'flex-end',
  height: '20px',
  width: '20px',
}).toString();

export default {
  button,
  cardListContainer,
  header,
  headerContainer,
  panelContainer,
  check,
  progressBar,
};
