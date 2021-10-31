import React from 'react';
/** @name Internal */
import { ButtonCustom } from "./styled";

export const Button = React.memo(({ outline = false, secondary = false, size = 'sm', onClick = () => {}, disabled = false, children }) =>
    <ButtonCustom
        type="button"
        outline={outline}
        disabled={disabled}
        secondary={secondary}
        className={`btn btn-dark btn-${size}`}
        onClick={e => { onClick(e); e.target.blur(); }}
    >
        {children}
    </ButtonCustom>
);