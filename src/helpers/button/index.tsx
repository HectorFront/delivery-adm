/** @name Dependencies */
import {memo, ElementType, ReactNode, MouseEventHandler} from 'react';
/** @name Internal */
import * as S from "./styles";

type ButtonProps = {
    size?: string,
    outline?: boolean,
    children: ReactNode,
    secondary?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

export const Button: ElementType = memo(({ size, outline, secondary, ...props}: ButtonProps): JSX.Element =>
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