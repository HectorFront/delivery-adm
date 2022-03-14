/** @name Styled */
import * as S from './styles';
/** @name Dependencies */
import React, { ReactNode } from 'react';

interface CardProps {
    className?: string,
    children?: ReactNode
}

export const Card: Function = React.memo(({ className, children }: CardProps): JSX.Element =>
    <S.Card className={`card${className ? ` ${className}` : ''}`}>
        {children}
    </S.Card>
);