/** @name Styled */
import { AppContainer } from './styled';
/** @name Dependencies */
import React from 'react';
/** @name Internal */
import { AsideMenu } from "./aside";

export const App = React.memo(({ children }) =>
    <AppContainer>
        <AsideMenu/>
        {children}
    </AppContainer>
);
