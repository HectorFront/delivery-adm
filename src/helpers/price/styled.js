/** @name Styled */
import styled from 'styled-components';

const CardPrice = styled.div.attrs(_ => ({
    className: 'card mb-4 shadow-sm'
}))`
  transition: all .2s;
  &:hover {
    transition: all .3s;
    transform: scale(1.1);
  }
`;

export { CardPrice };