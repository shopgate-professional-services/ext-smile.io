import { css } from 'glamor';
import config from '../../config';

const { colorConfig } = config;

const contentWrapper = css({
  position: 'relative',
  backgroundColor: 'transparent',
  border: 'none',
  textAlign: 'left',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px 12px',
  marginBottom: '16px',
  width: '100%',
  transition: 'background-color .15s ease-in-out',
  ':after': {
    height: '1px',
    width: '100%',
    content: '',
    left: '64px',
    position: 'absolute',
    bottom: '-8px',
    backgroundColor: '#f5f5f5',
  },
}).toString();

const baseContent = css({
  display: 'flex',
  alignItems: 'center',
}).toString();

const headline = css({
  fontWeight: 500,
}).toString();

const subtitle = css({
  color: `${colorConfig.mutedPointsColor}`,
}).toString();

const image = css({
  height: '40px',
  width: '40px',
  padding: '4px',
  marginRight: '12px',
  flexShrink: '0',
  ' img': {
    height: '100%',
    width: '100%',
  },
}).toString();

export default {
  contentWrapper,
  baseContent,
  headline,
  subtitle,
  image,
};
