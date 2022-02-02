import styled from 'styled-components';
/** @name Interface */
import { IconProps } from "./stylesInterfaces";

export const Icon = styled.span<IconProps>`
  cursor: ${props => props.hasHover ? 'pointer' : 'default' };
  &:hover {
      opacity: ${props => props.hasHover ? '.6' : '1' };
  }
`;