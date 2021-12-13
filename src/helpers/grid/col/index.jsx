import React from 'react';

export const Col = React.memo(({ cols, children }) => {
    const columns = cols?.split(' ') ?? [],
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