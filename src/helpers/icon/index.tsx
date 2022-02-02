/** @name Styled */
import { Icon } from './styles';
/** @name Dependencies */
import React from 'react';

interface MaterialIconProps {
    icon: string,
    type?: string,
    size?: string,
    color?: string,
    style?: object,
    hover?: boolean,
    onClick?: React.MouseEventHandler<HTMLSpanElement>
}

export const MaterialIcon: Function = React.memo((props: MaterialIconProps): JSX.Element =>
    <Icon
        onClick={props.onClick}
        hasHover={props.hover}
        className={`material-icons-${props.type ?? 'outlined'}`}
        style={{ fontSize: props.size ?? '1.2em', color: props.color ?? 'black', ...props.style }}
    >
        {props.icon}
    </Icon>
);