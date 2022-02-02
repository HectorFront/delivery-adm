import React, { ReactNode } from 'react';

interface ColProps {
    cols?: string,
    children?: ReactNode
}

type ColumnsDefined = string[] | string;

export const Col: Function = React.memo(({ cols = '', children }: ColProps): JSX.Element => {
    const columns: ColumnsDefined = cols?.split(' ') ?? [],
        colXS = 'col-12',
        colSM = `col-sm-${columns[0] ?? '12'}`,
        colMD = `col-md-${columns[1] ?? '12'}`,
        colLG = `col-lg-${columns[2] ?? '12'}`,
        colXL = `col-xl-${columns[3] ?? '12'}`,
        colXXl = `col-xxl-${columns[4] ?? '12'}`;

    return (
        <div className={`${colXS} ${colSM} ${colMD} ${colLG} ${colXL} ${colXXl}`}>
            {children}
        </div>
    )
});