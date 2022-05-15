/** @name Dependencies */
import {memo, ElementType, ReactNode} from 'react';
/** @name Internal */
import * as S from './styles';

type BoxProps = {
    children: ReactNode
}

export const Box: ElementType = memo(({ children }: BoxProps): JSX.Element =>
   <S.ElBox>
       {children}
   </S.ElBox>
);