import { css } from 'glamor';
import config from '../../config';

const { colorConfig } = config;

const contentWrapper = css({
  position: 'relative',
  fontSize: '14px',
  lineHeight: '20px',
}).toString();

const contentItem = css({
  position: 'relative',
  backgroundColor: 'transparent',
  border: 'none',
  textAlign: 'left',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '8px 12px',
  marginBottom: '16px',
  width: '100%',
  transition: 'background-color .15s ease-in-out',
}).toString();

const muteWrapper = css({
  opacity: '.5 !important',
  color: 'black !important',
}).toString();

const baseContent = css({
  display: 'flex',
  alignItems: 'center',
}).toString();

const muted = css({
  color: `${colorConfig.mutedPointsColor}`,
}).toString();

const image = css({
  height: '40px',
  width: '40px',
  padding: '4px',
  marginRight: '12px',
  flexShrink: '0',
}).toString();

export default {
  contentWrapper,
  contentItem,
  baseContent,
  muteWrapper,
  muted,
  image,
};
