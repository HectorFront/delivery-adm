/** @name Styled */
import styled from 'styled-components';
/** @name Mixins */
import { flex } from 'mixins/global';

const Label = styled.label`
  ${flex({ wrap: 'no-wrap', direction: 'row', alignY: 'center', alignX: 'start' })}
`;

export { Label };