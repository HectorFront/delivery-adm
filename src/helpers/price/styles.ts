/** @name Styled */
import styled from 'styled-components';

export const CardPrice = styled.div.attrs(_ => ({
    className: 'card mb-4 shadow-sm'
}))`
  cursor: pointer;
  transition: all .2s;

  &:hover {
    transition: all .3s;
    transform: scale(1.1);
  }

  &:active {
    background-color: #e1e1e1;
  }
`;