/** @name Dependencies */
import {memo, ElementType, ReactNode, MouseEventHandler} from 'react';
/** @name Internal */
import * as S from "./styles";
/** @name External */
import {MaterialIcon, Render} from "components";

type ButtonProps = {
    icon?: string,
    radius?: boolean,
    outline?: boolean,
    fullWidth?: boolean,
    children: ReactNode,
    secondary?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

export const Button: ElementType = memo(({ icon = '', fullWidth = false, radius = false, outline, secondary, ...props}: ButtonProps): JSX.Element =>
    <S.ButtonCustom
        {...props}
        type="button"
        outline={outline}
        hasRadius={radius}
        secondary={secondary}
        fullWidth={fullWidth}
        className={`btn btn-dark`}
        onClick={(e: any) => { props.onClick && props.onClick(e); e.target.blur(); }}
    >
        <Render has={icon}>
            <MaterialIcon
                icon={icon}
                color={'white'}
            />&nbsp;
        </Render>
        {props.children}
    </S.ButtonCustom>
);