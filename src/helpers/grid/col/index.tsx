import React, {ReactNode, useCallback, useEffect, useMemo, useState} from 'react';

type ColProps = {
    cols?: string,
    children: ReactNode
}

type ColumnsDefined = string[] | string;

const MAX_COLUMNS = 5;

export const Col: Function = React.memo(({ cols = '', children }: ColProps): JSX.Element => {
    const [classNamesCol, setClassnameCol] = useState('');
    const columnsClassnames: ColumnsDefined = useMemo(() => cols?.split(' ') ?? [],[cols]),
        colXS = 'col-12',
        colSM = `col-sm-${columnsClassnames[0] ?? '12'}`,
        colMD = `col-md-${columnsClassnames[1] ?? '12'}`,
        colLG = `col-lg-${columnsClassnames[2] ?? '12'}`,
        colXL = `col-xl-${columnsClassnames[3] ?? '12'}`,
        colXXl = `col-xxl-${columnsClassnames[4] ?? '12'}`;

    const getAdditionalClassNames = useCallback(() => {
        let CSSClassnames: string = '';
        if(columnsClassnames.length > MAX_COLUMNS) {
            columnsClassnames.slice(MAX_COLUMNS, columnsClassnames.length).forEach(className => {
                if(className) CSSClassnames += ` ${className}`;
            });
            return setClassnameCol(CSSClassnames);
        }
    },[columnsClassnames]);

    useEffect(() => {
        getAdditionalClassNames();
    });

    return (
        <div className={`${colXS} ${colSM} ${colMD} ${colLG} ${colXL} ${colXXl}${classNamesCol}`}>
            {children}
        </div>
    )
});