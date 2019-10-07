import { css } from 'glamor';

const buttonItem = css({
  backgroundColor: 'transparent',
  border: 'none',
  textAlign: 'left',
  color: 'inherit',
  fontWeight: 'inherit',
  lineHeight: 'inherit',
  font: 'inherit',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px 12px',
  position: 'relative',
  marginBottom: '16px',
  cursor: 'pointer',
  width: '100%',
  transition: 'background-color .15s ease-in-out',
}).toString();

const content = css({
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

const chevron = css({
  height: '20px',
  width: '20px',
  backgroundSize: '100 %',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50%',
  backgroundImage: 'url(data: image / svg + xml; charset = utf8,% 3Csvg xmlns = \'http://www.w3.org/2000/svg\' w… 0 0 0 0 1.06l5 5a.75.75 0 0 0 1.06 - 1.06L7.31 10l4.47 - 4.47z\'/%3E%3C/svg%3E)',
  opacity: '.6',
  transition: 'opacity .15s ease -in -out',
  transform: 'rotate(180deg)',
}).toString();

export default {
  buttonItem,
  content,
  image,
  chevron,
};
