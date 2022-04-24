/** @name Styled */
import * as S from './styles';
/** @name Dependencies */
import React, { ReactNode } from 'react';

type CardProps = {
    className?: string,
    children: ReactNode
}

export const Card: React.ElementType = React.memo(({ className = '', children }: CardProps): JSX.Element => {
    return (
        <S.Card className={`card ${className}`}>
            {children}
        </S.Card>
    );
});