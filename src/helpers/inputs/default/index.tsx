/** @name Styled */
import * as S from "./styles";
/** @name Dependencies */
import React from 'react';

type InputDefaultProps = {
    size?: string | undefined,
    error?: boolean | undefined,
    className?: string | undefined
}

type CSSClassnamesProps = {
    size: string,
    error: string,
    className: string
}

export const InputDefault: Function = React.memo(({ size, error, className, ...props }: InputDefaultProps): JSX.Element => {
    const CSSClassnames: CSSClassnamesProps = {
        size: size ?? 'md',
        error: error ? ` is-invalid` : '',
        className: className ? ` ${className}` : ''
    };
    const style = `form-control-${CSSClassnames.size ?? 'md'}${CSSClassnames.className}${CSSClassnames.error}`;
    return (
        <>
            <S.Default
                {...props}
                className={`form-control ${style}`}
            />
            <S.Invalid>Preencha o campo corretamente.</S.Invalid>
        </>
    );
});