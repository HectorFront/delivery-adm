/** @name Styled */
import * as S from './styles';
/** @name Dependencies */
import React, { ReactNode } from 'react';
/** @name Internal */
import { AsideMenu } from "./aside";
import { RestaurantStatus } from './restaurantStatus';

interface PropsApp {
    location: {
        pathname: string
    },
    children: ReactNode
}

export const App: React.ElementType = React.memo(({ location, children }: PropsApp): JSX.Element => {
    const RESTAURANT_OPEN = true;
    return (
        <S.AppContainer>
            <AsideMenu
                location={location}
            />
            <S.ContentWrapper>
                <RestaurantStatus
                    statusToggle={RESTAURANT_OPEN}
                />
                {children}
            </S.ContentWrapper>
        </S.AppContainer>
    );
});