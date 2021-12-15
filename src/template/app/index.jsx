/** @name Styled */
import { AppContainer } from './styled';
/** @name Dependencies */
import React from 'react';
/** @name Internal */
import { AsideMenu } from "./aside";

export const App = React.memo((props) =>
    <AppContainer>
        <AsideMenu
            pathCurrent={props.location.pathname}
        />
        {props.children}
    </AppContainer>
);
