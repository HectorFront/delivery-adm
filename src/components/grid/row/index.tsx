/** @name Dependencies */
import {memo, ElementType, ReactNode} from 'react';

type RowProps = {
    className?: string,
    children: ReactNode
}

export const Row: ElementType = memo(({ className = 'default', children, ...props }: RowProps): JSX.Element =>
    <div {...props} className={`row ${className}`}>
        {children}
    </div>
);