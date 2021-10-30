/** @name Styled */
import { VisibilityPassword } from '../styled';
/** @name Dependencies */
import React from 'react';
import { InputDefault } from 'helpers';

export const InputPasswordLabel = React.memo((props) =>
    <>
        <label className="form-label">
            <b>{props.label}</b>
        </label>
        <div className="input-group">
            <InputDefault
                {...props}
            />
            <VisibilityPassword onClick={props.handleType} className="btn" type="button">
                {props.icon}
            </VisibilityPassword>
        </div>
    </>
);
