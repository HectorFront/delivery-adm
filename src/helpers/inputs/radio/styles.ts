/** @name Styled */
import styled from 'styled-components';
/** @name External */
import Colors from 'constants/client/colors';

import * as Interface from "./styles.interfaces";

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