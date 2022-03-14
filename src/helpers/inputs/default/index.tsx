/** @name Styled */
import * as S from "./styles";
/** @name Dependencies */
import React from 'react';

interface InputDefaultProps {
    id?: string,
    size?: string,
    type?: string,
    value?: string,
    error?: boolean,
    className?: string,
    placeholder?: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
}

interface AttrInputProps {
    value: string,
    size: string,
    type: string,
    error: string,
    className: string,
    placeholder: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
}

export const InputDefault: Function = React.memo((props: InputDefaultProps): JSX.Element => {
    const AttrInput: AttrInputProps = {
        value: props.value ?? '',
        size: props.size ?? 'md',
        type: props.type ?? 'text',
        error: props.error ? ` is-invalid` : '',
        placeholder: props.placeholder ?? '...',
        onChange: props.onChange ? props.onChange : () => {},
        className: props.className ? ` ${props.className}` : ''
    };
    return (
        <>
            <S.Default
                id={props.id}
                type={AttrInput.type}
                value={AttrInput.value}
                onChange={AttrInput.onChange}
                placeholder={AttrInput.placeholder}
                className={`form-control form-control-${AttrInput.size}${AttrInput.className}${AttrInput.error}`}
            />
            <S.Invalid>Preencha o campo corretamente.</S.Invalid>
        </>
    );
});