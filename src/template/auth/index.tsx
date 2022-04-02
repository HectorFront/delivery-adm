/** @name Styled */
import * as S from './styles';
/** @name Dependencies */
import React, { ReactNode } from 'react';

interface AuthProps {
    children: ReactNode
}

export const Auth: Function = React.memo(({ children }: AuthProps): JSX.Element =>
    <S.ContainerAuth>
        <S.Content>
            {children}
        </S.Content>
    </S.ContainerAuth>
);