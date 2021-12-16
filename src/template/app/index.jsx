/** @name Styled */
import { AppContainer, ContentWrapper } from './styled';
/** @name Dependencies */
import React from 'react';
/** @name Internal */
import { AsideMenu } from "./aside";

export const App = React.memo((props) =>
    <AppContainer>
        <AsideMenu
            pathCurrent={props.location.pathname}
        />
        <ContentWrapper>
            {props.children}
        </ContentWrapper>
    </AppContainer>
);
