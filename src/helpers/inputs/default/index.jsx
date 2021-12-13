/** @name Styled */
import { Default, Invalid } from "./styled";
/** @name Dependencies */
import React from 'react';

export const InputDefault = React.memo((props) => {
    const ATTRDetailsInput = {
        size: props.size ?? 'md',
        type: props.type ?? 'text',
        error: props.error ? ` is-invalid` : '',
        className: props.className ? ` ${props.className}` : ''
    };
    return (
        <>
            <Default
                {...props}
                type={ATTRDetailsInput.type}
                className={`form-control form-control-${ATTRDetailsInput.size}${ATTRDetailsInput.className}${ATTRDetailsInput.error}`}
            />
            <Invalid>Preencha o campo corretamente.</Invalid>
        </>
    );
});