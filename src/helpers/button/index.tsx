import React from 'react';
/** @name Internal */
import { ButtonCustom } from "./styled";

interface ButtonProps {
    size?: string,
    children: any,
    outline?: boolean,
    onClick?: Function,
    disabled?: boolean,
    secondary?: boolean,
}

export const Button = React.memo((props: ButtonProps) =>
    <ButtonCustom
        type="button"
        outline={props.outline ?? false}
        disabled={props.disabled ?? false}
        secondary={props.secondary ?? false}
        className={`btn btn-dark btn-${props.size ?? 'sm'}`}
        onClick={(e: any) => { props.onClick && props.onClick(e); e.target.blur(); }}
    >
        {props.children}
    </ButtonCustom>
);