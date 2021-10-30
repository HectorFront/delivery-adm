import styled from 'styled-components';

const Icon = styled.span`
  cursor: ${props => props.hasHover ? 'pointer' : 'default' };
  &:hover {
      opacity: ${props => props.hasHover ? '.6' : '1' };
  }
`;

export { Icon };