/** @name Styled */
import * as S from './styles';
/** @name Dependencies */
import {memo, ElementType, ReactNode} from 'react';

type CardProps = {
    className?: string,
    children: ReactNode
}

export const Card: ElementType = memo(({ className = '', children }: CardProps): JSX.Element =>
    <S.Card className={`card ${className}`}>
        {children}
    </S.Card>
);