import React from 'react';
/** @name External */
import { InputDefault } from 'helpers';

export const InputLabel = React.memo((props) =>
    <>
        <label className="form-label">
            <b>{props.label}</b>
        </label>
        <InputDefault
            {...props}
        />
    </>
);

