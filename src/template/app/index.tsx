/** @name Styled */
import { AppContainer, ContentWrapper } from './styles';
/** @name Dependencies */
import React from 'react';
/** @name Internal */
import { AsideMenu } from "./aside";

export const App: Function = React.memo(({ location: { pathname }, children }: any): JSX.Element =>
    <AppContainer>
        <AsideMenu
            pathCurrent={pathname}
        />
        <ContentWrapper>
            {children}
        </ContentWrapper>
    </AppContainer>
);
