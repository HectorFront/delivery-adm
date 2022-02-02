import React, { ReactNode } from 'react';

interface RowProps {
    className?: string,
    children?: ReactNode
}

export const Row: Function = React.memo(({ className, children }: RowProps): JSX.Element =>
    <div className={`row${className ? ` ${className}` : ''}`}>
        {children}
    </div>
);