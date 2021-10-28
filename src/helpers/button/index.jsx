import React from 'react';
/** @name Internal */
import { ButtonCustom } from "./styled";

export const Button = React.memo(({ outline = false, size = 'sm', onClick = () => {}, disabled = false, children }) =>
    <ButtonCustom
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={`btn btn-${outline ? 'outline' : 'dark'} btn-${size}`}
    >
        {children}
    </ButtonCustom>
);