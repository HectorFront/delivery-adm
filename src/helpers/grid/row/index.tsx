import React, { ReactNode } from 'react';

type RowProps = {
    className?: string,
    children: ReactNode
}

export const Row: Function = React.memo(({ className, children }: RowProps): JSX.Element => {
    const CSSClassname = className ? ` ${className}` : '';
    return (
        <div className={`row${CSSClassname}`}>
            {children}
        </div>
    );
});