import React, { ReactNode } from 'react';
/** @name Internal */
import * as S from "./styles";

type ButtonProps = {
    size?: string,
    outline?: boolean,
    children: ReactNode,
    secondary?: boolean,
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export const Button: React.ElementType = React.memo(({ size, outline, secondary, ...props}: ButtonProps): JSX.Element =>
    <S.ButtonCustom
        {...props}
        type="button"
        outline={outline}
        secondary={secondary}
        className={`btn btn-dark btn-${size ?? 'sm'}`}
        onClick={(e: any) => { props.onClick && props.onClick(e); e.target.blur(); }}
    >
        {props.children}
    </S.ButtonCustom>
);