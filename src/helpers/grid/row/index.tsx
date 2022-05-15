/** @name Dependencies */
import {memo, ElementType, ReactNode} from 'react';

type RowProps = {
    className?: string,
    children: ReactNode
}

export const Row: ElementType = memo(({ className = '', children }: RowProps): JSX.Element =>
    <div className={`row ${className}`}>
        {children}
    </div>
);