/** @name Styled */
import styled, { keyframes } from 'styled-components';

import * as Interface from "./styles.interfaces";

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

export const TextFade = styled.span<Interface.TextFadeProps>`
  color: ${props => props.color};
  animation: ${fade} ${props => props.seconds}s both;
`;