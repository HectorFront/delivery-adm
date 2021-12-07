/** @name Styled */
import { Input, Invalid } from "./styled";
/** @name Dependencies */
import React, { Fragment } from 'react';

export const InputDefault = React.memo((props) => {
    const detailsInput = {
        size: props.size ?? 'md',
        error: props.error ? ` is-invalid` : '',
        className: props.className ? ` ${props.className}` : ''
    };
    return (
        <Fragment>
            <Input
                {...props}
                type={props.type ?? 'text'}
                className={`form-control form-control-${detailsInput.size}${detailsInput.className}${detailsInput.error}`}
            />
            <Invalid>
                Preencha o campo corretamente.
            </Invalid>
        </Fragment>
    );
});