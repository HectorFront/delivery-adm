/** @name Styled */
import { Card as CardComponent } from './styles';
/** @name Dependencies */
import React, { ReactNode } from 'react';

interface CardProps {
    className?: string,
    children?: ReactNode
}

export const Card: Function = React.memo(({ className, children }: CardProps): JSX.Element =>
    <CardComponent className={`card${className ? ` ${className}` : ''}`}>
        {children}
    </CardComponent>
);