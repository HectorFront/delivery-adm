/** @name Styled */
import * as S from "./styles";
/** @name Dependencies */
import {memo, ElementType} from 'react';

type InputDefaultProps = {
    size?: string | undefined,
    error?: boolean | undefined,
    className?: string | undefined
}

/** @name Constants */
const CSS_NAMESPACE = 'form-control';

export const InputDefault: ElementType = memo(({size = 'md', error = false, className = '', ...props}: InputDefaultProps): JSX.Element => {

    const defineCSSNameSpace = (
        `${CSS_NAMESPACE} ${CSS_NAMESPACE}-${size}`
        + ` ${className}`
        + (error ? ' is-invalid' : '')
    );

    return (
        <>
            <S.Default
                {...props}
                className={`${defineCSSNameSpace}`}
            />
            <S.Invalid>Preencha o campo corretamente.</S.Invalid>
        </>
    );
});