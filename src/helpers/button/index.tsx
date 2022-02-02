import React from 'react';
/** @name Internal */
import { ButtonCustom } from "./styles";

interface ButtonProps {
    size?: string,
    children: any,
    outline?: boolean,
    disabled?: boolean,
    secondary?: boolean,
    onClick?: React.MouseEventHandler<HTMLSpanElement>
}

export const Button: Function = React.memo((props: ButtonProps): JSX.Element =>
    <ButtonCustom
        type="button"
        outline={props.outline}
        disabled={props.disabled}
        secondary={props.secondary}
        className={`btn btn-dark btn-${props.size ?? 'sm'}`}
        onClick={(e: any) => { props.onClick && props.onClick(e); e.target.blur(); }}
    >
        {props.children}
    </ButtonCustom>
);