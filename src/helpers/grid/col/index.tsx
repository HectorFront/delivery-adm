import React, {ReactNode, useCallback, useEffect, useMemo, useState} from 'react';

type ColProps = {
    cols?: string,
    children: ReactNode
}

type ColumnsDefined = string[] | string;

const MAX_COLUMNS = 5;

export const Col: Function = React.memo(({ cols = '', children }: ColProps): JSX.Element => {
    const [classNamesCol, setClassnameCol] = useState('');
    const allClassNames: ColumnsDefined = useMemo(() => cols?.split(' ') ?? [],[cols]),
        colXS = 'col-12',
        colSM = `col-sm-${allClassNames[0] ?? '12'}`,
        colMD = `col-md-${allClassNames[1] ?? '12'}`,
        colLG = `col-lg-${allClassNames[2] ?? '12'}`,
        colXL = `col-xl-${allClassNames[3] ?? '12'}`,
        colXXl = `col-xxl-${allClassNames[4] ?? '12'}`;

    const getAdditionalClassNames = useCallback(() => {
        let CSSClassnames: string = '';
        if(allClassNames.length > MAX_COLUMNS) {
            allClassNames.slice(MAX_COLUMNS, allClassNames.length).forEach(className => {
                if(className) CSSClassnames += ` ${className}`;
            });
            return setClassnameCol(CSSClassnames);
        }
    },[allClassNames]);

    useEffect(() => {
        getAdditionalClassNames();
    });

    return (
        <div className={`${colXS} ${colSM} ${colMD} ${colLG} ${colXL} ${colXXl}${classNamesCol}`}>
            {children}
        </div>
    )
});