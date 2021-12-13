import styled from 'styled-components';
/** @name Constants */
import Colors from 'constants/client/colors';

export const Radio = styled.input`
  cursor: pointer;
  &:checked {
    border-color: ${props => !props.secondary ? Colors.DEFAULT : Colors.SECONDARY};
    background-color: ${props => !props.secondary ? Colors.DEFAULT : Colors.SECONDARY};
  }
  &:focus {
    box-shadow: none;
  }
`;