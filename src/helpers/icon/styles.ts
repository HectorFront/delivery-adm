import styled from 'styled-components';
/** @name Interface */
import * as Interface from "./stylesInterfaces";

export const Icon = styled.span<Interface.IconProps>`
  cursor: ${props => props.hasHover || props.pointer ? 'pointer' : 'default' } !important;
  &:hover {
      opacity: ${props => props.hasHover ? '.6' : '1' };
  }
`;