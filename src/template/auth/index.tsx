/** @name Styled */
import { Content, ContainerAuth } from './styles';
/** @name Dependencies */
import React, { ReactNode } from 'react';

interface AuthProps {
    children?: ReactNode
}

export const Auth: Function = React.memo(({ children }: AuthProps): JSX.Element =>
    <ContainerAuth>
        <Content>
            {children}
        </Content>
    </ContainerAuth>
);