/** @name Styled */
import * as S from './styles';
/** @name Dependencies */
import {memo, ElementType, ReactNode} from 'react';
/** @name Internal */
import {AsideMenu} from "./aside";
import {RestaurantStatus} from './status';

interface PropsApp {
    location: {
        pathname: string
    },
    children: ReactNode
}

export const App: ElementType = memo(({ children }: PropsApp): JSX.Element => {
    const restaurantOpen = true;
    return (
        <S.AppContainer>
            <AsideMenu/>
            <S.ContentWrapper>
                <RestaurantStatus
                    statusToggle={restaurantOpen}
                />
                {children}
            </S.ContentWrapper>
        </S.AppContainer>
    );
});