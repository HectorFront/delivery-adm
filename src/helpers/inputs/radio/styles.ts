import styled from 'styled-components';
/** @name Constants */
import Colors from 'constants/client/colors';
/** @name Interface */
import * as Interface from "./stylesInterfaces";

export const Radio = styled.input<Interface.RadioProps>`
  cursor: pointer;
  &:checked {
    border-color: ${props => !props.secondary ? Colors.DEFAULT : Colors.SECONDARY};
    background-color: ${props => !props.secondary ? Colors.DEFAULT : Colors.SECONDARY};
  }
  &:focus {
    box-shadow: none;
  }
`;