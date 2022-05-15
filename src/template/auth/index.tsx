/** @name Styled */
import * as S from './styles';
/** @name Dependencies */
import {memo, ElementType, ReactNode} from 'react';

interface AuthProps {
    children: ReactNode
}

export const Auth: ElementType = memo(({ children }: AuthProps): JSX.Element =>
    <S.ContainerAuth>
        <S.Content>
            {children}
        </S.Content>
    </S.ContainerAuth>
, (prevProps, nextProps) => {
    if(JSON.stringify(prevProps) === JSON.stringify(nextProps)) {
        return true;
    }
});