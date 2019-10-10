import { css } from 'glamor';
import config from '../../config';

const { colorConfig } = config;

export default css({
  position: 'relative',
  padding: '16px 12px',
  borderRadius: '10px',
  backgroundColor: `${colorConfig.contentBackground}`,
  marginBottom: '12px',
  boxShadow: '0 0 13px 0 rgba(0,0,0,.09)',
  overflow: 'hidden',
}).toString();
