/** @name Styled */
import styled from 'styled-components';
/** @name Mixins */
import {flex} from "layout/mixins/styles";
/** @name External */
import Colors from 'layout/vars/colors';

import { ButtonCustomProps } from "./styles.interfaces";

export const ButtonCustom = styled.button<ButtonCustomProps>`
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  height: 50px;
  padding: 0 40px;
  font-size: 15px;
  ${flex({ wrap: 'no-wrap', direction: 'row', alignY: 'center', alignX: 'space-around' })}
  ${props => props.hasRadius ? 'border-radius: 50px' : ''};
  ${props => props.outline
      ? `color: black;`
      : ''
  };
  ${props => props.outline
      ? `border: 3px solid ${Colors.SECONDARY};`
      : 'border: 0;'
  };
  background-color: ${props => props.outline
      ? 'white'
      : props.secondary
          ? Colors.SECONDARY
          :  Colors.DEFAULT
  };
`;