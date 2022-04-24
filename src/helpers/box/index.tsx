/** @name Dependencies */
import React, { ReactNode } from 'react';
/** @name Internal */
import * as S from './styles';

type BoxProps = {
    children: ReactNode
}

export const Box: React.ElementType = React.memo(({ children }: BoxProps): JSX.Element =>
   <S.ElBox>
       {children}
   </S.ElBox>
)