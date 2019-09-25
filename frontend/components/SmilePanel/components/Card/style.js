import { css } from 'glamor';

const cardItemContainer = css({
  position: 'relative',
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

const cardItem = css({
  backgroundColor: 'transparent',
  border: 'none',
  textAlign: 'left',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px 12px',
  position: 'relative',
  marginBottom: '16px',
  width: '100%',
  transition: 'background-color .15s ease-in-out',
}).toString();

const cardItemContent = css({
  display: 'flex',
  alignItems: 'center',
}).toString();

const image = css({
  height: '40px',
  width: '40px',
  padding: '4px',
  marginRight: '12px',
  flexShrink: '0',
}).toString();

const subtitle = css({
  color: '#707070',
}).toString();

export default {
  cardItem,
  cardItemContainer,
  cardItemContent,
  image,
  subtitle,
};
