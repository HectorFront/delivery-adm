/** @name Styled */
import styled from 'styled-components';
/** @name External */
import Colors from 'layout/vars/colors';

export const Search = styled.input`
  height: 70px;
  color: #5e5e5e;
  padding-left: 50px;
  border: 2px solid #e5e5e5;

  &:focus {
    color: #5e5e5e;
    border-color: ${Colors.DARK};
    box-shadow: none;
  }

  &::placeholder {
    color: #a0a0a0;
    font-size: 16px;
    padding-left: 8px;
  }
`;

export const Invalid = styled.div.attrs(_ => ({
    className: 'invalid-feedback',
}))``;