/** @name Styled */
import styled from 'styled-components';
/** @name Mixins */
import {flex} from "layout/mixins/styles";
/** @name External */
import Colors from 'layout/vars/colors';

export const Button = styled.button`
  border-radius: 50px;
  background-color: white;
  ${flex({ direction: 'row', alignY: 'center', alignX: 'center' })}
  &:hover {
    opacity: .7;
  }
  &:focus {
    opacity: 1;
    color: white;
    box-shadow: none;
    background-color: ${Colors.LIGHT};
  }
`;

export const Item = styled.li.attrs({
  className: 'dropdown-item'
})`
  &:active, &:focus {
    background-color: ${Colors.DEFAULT} !important;
  }
`;