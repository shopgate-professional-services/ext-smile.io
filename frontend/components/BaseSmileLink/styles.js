import { css } from 'glamor';

const contentWrapper = css({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px 12px',
}).toString();

const headline = css({
  fontWeight: 'bold',
})

export default {
  contentWrapper,
  headline,
};
