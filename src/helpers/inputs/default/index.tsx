/** @name Styled */
import { Default, Invalid } from "./styled";
/** @name Dependencies */
import React from 'react';

interface InputDefaultProps {
    size?: string,
    type?: string,
    error?: boolean,
    className?: string
    placeholder?: string
}

export const InputDefault = React.memo((props: InputDefaultProps) => {
    const AttrInput = {
        size: props.size ?? 'md',
        type: props.type ?? 'text',
        error: props.error ? ` is-invalid` : '',
        placeholder: props.placeholder ?? '...',
        className: props.className ? ` ${props.className}` : ''
    };
    return (
        <>
            <Default
                type={AttrInput.type}
                placeholder={AttrInput.placeholder}
                className={`form-control form-control-${AttrInput.size}${AttrInput.className}${AttrInput.error}`}
            />
            <Invalid>Preencha o campo corretamente.</Invalid>
        </>
    );
});