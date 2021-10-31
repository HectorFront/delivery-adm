/** @name Styled */
import { Card as CardComponent } from './styled';
/** @name Dependencies */
import React from 'react';

export const Card = React.memo(({ className, children }) =>
    <CardComponent className={`card${className ? ` ${className}` : ''}`}>
        {children}
    </CardComponent>
);