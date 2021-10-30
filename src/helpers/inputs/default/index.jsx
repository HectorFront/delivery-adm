/** @name Styled */
import { Input, Invalid } from "./styled";
/** @name Dependencies */
import React, { Fragment } from 'react';

export const InputDefault = React.memo((props) =>
    <Fragment>
        <Input
            {...props}
            type={props.type ?? 'text'}
            className={`form-control form-control-${props.size??'md'}${props.className?` ${props.className}`:''}${props.error ?' is-invalid':''}`}
        />
        <Invalid>
            Preencha o campo corretamente.
        </Invalid>
    </Fragment>
);