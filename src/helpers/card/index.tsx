/** @name Styled */
import * as S from './styles';
/** @name Dependencies */
import React, { ReactNode } from 'react';

type CardProps = {
    className?: string,
    children: ReactNode
}

export const Card: Function = React.memo(({ className, children }: CardProps): JSX.Element => {
    const CSSClassname = className ? ` ${className}` : '';
    return (
        <S.Card className={`card${CSSClassname}`}>
            {children}
        </S.Card>
    );
});