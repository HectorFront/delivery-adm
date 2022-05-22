/** @name Dependencies */
import {memo, ElementType, ReactNode, MouseEventHandler} from 'react';
/** @name Internal */
import * as S from "./styles";
/** @name External */
import {MaterialIcon, Render} from "helpers";

type ButtonProps = {
    icon?: string,
    size?: string,
    outline?: boolean,
    children: ReactNode,
    secondary?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

export const Button: ElementType = memo(({ icon = '', size, outline, secondary, ...props}: ButtonProps): JSX.Element =>
    <S.ButtonCustom
        {...props}
        type="button"
        outline={outline}
        secondary={secondary}
        className={`btn btn-dark btn-${size ?? 'sm'}`}
        onClick={(e: any) => { props.onClick && props.onClick(e); e.target.blur(); }}
    >
        <Render contains={icon}>
            <MaterialIcon
                icon={icon}
                color={'white'}
            />&nbsp;
        </Render>
        {props.children}
    </S.ButtonCustom>
);