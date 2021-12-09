import styled from 'styled-components';

export const Icon = styled.span`
  cursor: ${props => props.hasHover ? 'pointer' : 'default' };
  &:hover {
      opacity: ${props => props.hasHover ? '.6' : '1' };
  }
`;