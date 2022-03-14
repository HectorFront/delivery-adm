/** @name Dependencies */
import React, { ReactNode } from 'react';
/** @name Internal */
import * as S from './styles';

interface BoxProps {
    children: ReactNode
}

export const Box: Function = React.memo(({ children }: BoxProps): JSX.Element =>
   <S.ElBox>
       {children}
   </S.ElBox>
)