/** @name Styled */
import { Input, Invalid } from "./styled";
/** @name Dependencies */
import React, { Fragment } from 'react';

export const InputDefault = React.memo((props) => {
    const detailsInput = {
        size: props.size ?? 'md',
        type: props.type ?? 'text',
        error: props.error ? ` is-invalid` : '',
        className: props.className ? ` ${props.className}` : ''
    };
    return (
        <Fragment>
            <Input
                {...props}
                type={detailsInput.type}
                className={`form-control form-control-${detailsInput.size}${detailsInput.className}${detailsInput.error}`}
            />
            <Invalid>
                Preencha o campo corretamente.
            </Invalid>
        </Fragment>
    );
});