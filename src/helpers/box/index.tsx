/** @name Dependencies */
import React, { ReactNode } from 'react';
/** @name Internal */
import { ElBox } from './styles';

interface BoxProps {
    children: ReactNode
}

export const Box: Function = React.memo(({ children }: BoxProps): JSX.Element =>
   <ElBox>
       {children}
   </ElBox>
)