/** @name Styled */
import { Input } from "./styled";
/** @name Dependencies */
import React from 'react';

export const InputDefault = React.memo((props) =>
    <Input
        {...props}
        className={`form-control form-control-${props.size ?? 'md'}${props.className ? ` ${props.className}` : ''}`}
    />
);