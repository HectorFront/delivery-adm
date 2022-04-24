/** @name Dependencies */
import React, {ReactNode, useCallback, useEffect, useMemo, useState} from 'react';

type ColProps = {
    cols?: string,
    children: ReactNode
}

type sizesProps = {
    xs: string,
    sm: string,
    md: string,
    lg: string,
    xl: string,
    xxl: string
}

type ColumnsProps = string[] | undefined;

/** @name Constants */
export const MAX_COLUMNS: number = 5;
export const DEFAULT_COLUMN: number = 12;
export const CSS_NAMESPACE_GRID: string = 'col';

export const Col: React.ElementType = React.memo(({ cols = '', children }: ColProps): JSX.Element => {

    const [className, setClassName] = useState('');
    const COLUMNS: ColumnsProps = useMemo(() => cols.split(' ') ?? [], [cols]);

    /**
     * Set values in columns of different sizes
     */
    const GRID: sizesProps = {
        xs: `${CSS_NAMESPACE_GRID}-${DEFAULT_COLUMN}`,
        sm: `${CSS_NAMESPACE_GRID}-sm-${COLUMNS[0]}`,
        md: `${CSS_NAMESPACE_GRID}-md-${COLUMNS[1]}`,
        lg: `${CSS_NAMESPACE_GRID}-lg-${COLUMNS[2]}`,
        xl: `${CSS_NAMESPACE_GRID}-xl-${COLUMNS[3]}`,
        xxl: `${CSS_NAMESPACE_GRID}-xxl-${COLUMNS[4]}`
    };

    /**
     * Add if contains additional ClassName in Cols
     */
    const containsAdditionalClassName = useCallback(() => {
        let CLASSNAMES: string = '';
        if(COLUMNS.length >= MAX_COLUMNS) {
            COLUMNS.slice(MAX_COLUMNS, COLUMNS.length)
                .forEach(className => {
                    if(className) {
                        CLASSNAMES += ` ${className}`
                    }
                });
            return setClassName(CLASSNAMES);
        }
    },[COLUMNS]);

    useEffect(() => {
        containsAdditionalClassName();
    });

    const { xs, sm, md, lg, xl, xxl } = GRID;
    return (
        <div className={`${xs} ${sm} ${md} ${lg} ${xl} ${xxl}${className}`}>
            {children}
        </div>
    )
});