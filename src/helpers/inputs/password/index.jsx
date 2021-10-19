/** @name Styled */
import { VisibilityPassword } from "./styled";
/** @name Dependencies */
import React from 'react';
import { InputDefault } from "helpers";

export const InputPassword = React.memo((props) =>
    <div className="input-group">
        <InputDefault
            {...props}
            className={`form-control form-control-${props.size ?? 'md'}${props.className ? ` ${props.className}` : ''}`}
        />
        <VisibilityPassword onClick={props.changeType} className="btn" type="button">
            {props.icon}
        </VisibilityPassword>
    </div>
);