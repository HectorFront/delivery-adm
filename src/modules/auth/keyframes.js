/** @name Styled */
import styled, { keyframes } from 'styled-components';

const fade = keyframes`
  from {
      margin-left: -50px;
      opacity: 0;
  }
  to {
    opacity: 1;
    margin-left: 0;
  }
`;

const TextAnimation = styled.span`
  animation: ${fade} ${props => props.seconds}s both;
  color: ${props => props.color};
`;

export { TextAnimation };