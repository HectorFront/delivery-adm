/** @name Styled */
import * as S from './styles';
/** @name Dependencies */
import React from 'react';
/** @name Internal */
import { AsideMenu } from "./aside";
import { RestaurantStatus } from './restaurantStatus';

export const App: Function = React.memo(({ location: { pathname }, children }: any): JSX.Element => {
    const RESTAURANT_OPEN = true;
    return (
        <S.AppContainer>
            <AsideMenu
                pathCurrent={pathname}
            />
            <S.ContentWrapper>
                <RestaurantStatus isRestaurantOpen={RESTAURANT_OPEN}/>
                {children}
            </S.ContentWrapper>
        </S.AppContainer>
    );
});
