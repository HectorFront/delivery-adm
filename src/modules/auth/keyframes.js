/** @name Styled */
import styled, { keyframes } from 'styled-components';

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

export const TextAnimation = styled.span`
  color: ${props => props.color};
  animation: ${fade} ${props => props.seconds}s both;
`;