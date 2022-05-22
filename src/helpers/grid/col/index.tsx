/** @name Dependencies */
import {memo, ElementType, ReactNode, useCallback, useEffect, useMemo, useState} from 'react';

type ColProps = {
    style?: object,
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
const MAX_COLUMNS: number = 5;
const DEFAULT_COLUMN: number = 12;
const CSS_NAMESPACE: string = 'col';

export const Col: ElementType = memo(({ cols = '', children, ...props }: ColProps): JSX.Element => {

    /**
     * Set values in columns of different sizes
     */
    const columns: ColumnsProps = useMemo(() => cols.split(' ') ?? [], [cols]);
    const GRID: sizesProps = {
        xs: `${CSS_NAMESPACE}-${DEFAULT_COLUMN}`,
        sm: `${CSS_NAMESPACE}-sm-${columns[0]}`,
        md: `${CSS_NAMESPACE}-md-${columns[1]}`,
        lg: `${CSS_NAMESPACE}-lg-${columns[2]}`,
        xl: `${CSS_NAMESPACE}-xl-${columns[3]}`,
        xxl: `${CSS_NAMESPACE}-xxl-${columns[4]}`
    };

    const [className, setClassName] = useState('');

    /**
     * Add if contains additional ClassName in Cols
     */
    const containsClassName = useCallback(() => {
        let classNames: string = '';
        if(columns.length >= MAX_COLUMNS) {
            columns.slice(MAX_COLUMNS, columns.length)
                .forEach(className => {
                    if(className) {
                        classNames += ` ${className}`
                    }
                });
            return setClassName(classNames);
        }
    },[columns]);

    useEffect(() => {
        return containsClassName();
    },[cols]);

    const {xs, sm, md, lg, xl, xxl} = GRID;
    return (
        <div {...props} className={`${xs} ${sm} ${md} ${lg} ${xl} ${xxl}${className}`}>
            {children}
        </div>
    )
});