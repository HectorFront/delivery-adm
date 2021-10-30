/** @name Styled */
import { Content, ContainerAuth } from './styled';
/** @name Dependencies */
import React from 'react';

export const Auth = React.memo(({ children }) =>
    <ContainerAuth>
        <Content>
            {children}
        </Content>
    </ContainerAuth>
);

export default Auth;