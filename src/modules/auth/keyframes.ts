/** @name Styled */
import styled, { keyframes } from 'styled-components';
/** @name Interface */
import * as Interface from "./stylesInterfaces";

const fade = keyframes`
  from {
    opacity: 0;
    margin-left: -50px;
  }
  to {
    opacity: 1;
    margin-left: 0;
  }
`;

export const TextAnimation = styled.span<Interface.TextAnimationProps>`
  color: ${props => props.color};
  animation: ${fade} ${props => props.seconds}s both;
`;