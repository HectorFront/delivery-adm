/** @name Styled */
import * as S from './styles';
/** @name Dependencies */
import {memo, ElementType, ReactNode} from 'react';
/** @name Internal */
import {AsideMenu} from "./aside";
import {RestaurantStatus} from './restaurantStatus';

interface PropsApp {
    location: {
        pathname: string
    },
    children: ReactNode
}

export const App: ElementType = memo(({ location, children }: PropsApp): JSX.Element => {
    const restaurantOpen = true;
    return (
        <S.AppContainer>
            <AsideMenu
                location={location}
            />
            <S.ContentWrapper>
                <RestaurantStatus
                    statusToggle={restaurantOpen}
                />
                {children}
            </S.ContentWrapper>
        </S.AppContainer>
    );
}, (prevProps, nextProps) => {
    if(JSON.stringify(prevProps) === JSON.stringify(nextProps)) {
        return true;
    }
});