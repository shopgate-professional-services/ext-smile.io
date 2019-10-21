import { css } from 'glamor';

const container = css({
  textAlign: 'center !important',
}).toString();

const listContainer = css({
  position: 'relative',
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

const ListItem = css({
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
  ':last-of-type:after': {
    display: 'none',
  },
}).toString();

export default {
  container,
  listContainer,
  ListItem,
};
