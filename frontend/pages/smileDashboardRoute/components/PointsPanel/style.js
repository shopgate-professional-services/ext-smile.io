import { css } from 'glamor';

const container = css({
  textAlign: 'center !important',
}).toString();

const header = css({
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '25px',
  paddingTop: '8px !important',
  marginBottom: '20px !important',

}).toString();

const paragraph = css({
  paddingLeft: '12px',
  paddingRight: '12px',
  marginBottom: '20px',
  whiteSpace: 'pre-wrap !important',
}).toString();

const listContainer = css({
  position: 'relative',
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
  header,
  paragraph,
  listContainer,
  ListItem,
};
