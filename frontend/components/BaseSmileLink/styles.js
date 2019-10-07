import { css } from 'glamor';

const contentWrapper = css({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px 12px',
}).toString();

const headline = css({
  fontWeight: 500,
}).toString();

const image = css({
  height: '40px',
  width: '40px',
  padding: '4px',
  ' img': {
    height: '100%',
    width: '100%',
  },
}).toString();

export default {
  contentWrapper,
  headline,
  image,
};
