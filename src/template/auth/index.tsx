/** @name Styled */
import * as S from './styles';
/** @name Dependencies */
import {memo, ElementType, ReactNode} from 'react';

interface AuthProps {
    children: ReactNode
}

export const Auth: ElementType = memo(({ children }: AuthProps): JSX.Element => {
    return (
        <S.ContainerAuth>
            <S.Content>
                {children}
            </S.Content>
        </S.ContainerAuth>
    )
});