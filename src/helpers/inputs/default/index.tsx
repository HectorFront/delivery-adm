/** @name Styled */
import * as S from "./styles";
/** @name Dependencies */
import React from 'react';

type InputDefaultProps = {
    size?: string | undefined,
    error?: boolean | undefined,
    className?: string | undefined
}

/** @name Constants */
export const CSS_NAMESPACE_INPUT = 'form-control';

export const InputDefault: React.ElementType = React.memo(({size = 'md', error = false, className = '', ...props}: InputDefaultProps): JSX.Element => {

    const CSS_NAMESPACE_FORMAT_STYLES = (
        `${CSS_NAMESPACE_INPUT} ${CSS_NAMESPACE_INPUT}-${size}`
        + ` ${className}`
        + (error ? ' is-invalid' : '')
    );

    return (
        <>
            <S.Default
                {...props}
                className={`${CSS_NAMESPACE_FORMAT_STYLES}`}
            />
            <S.Invalid>Preencha o campo corretamente.</S.Invalid>
        </>
    );
});