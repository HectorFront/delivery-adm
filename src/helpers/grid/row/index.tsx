/** @name Dependencies */
import React, { ReactNode } from 'react';

type RowProps = {
    className?: string,
    children: ReactNode
}

export const Row: React.ElementType = React.memo(({ className = '', children }: RowProps): JSX.Element => {
    return (
        <div className={`row ${className}`}>
            {children}
        </div>
    );
});