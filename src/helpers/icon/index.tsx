/** @name Styled */
import * as S from './styles';
/** @name Dependencies */
import React from 'react';

interface MaterialIconProps {
    icon: string,
    type?: string,
    size?: string,
    color?: string,
    style?: object,
    hover?: boolean,
    pointer?: boolean,
    onClick?: React.MouseEventHandler<HTMLSpanElement>
}

export const MaterialIcon: Function = React.memo((props: MaterialIconProps): JSX.Element =>
    <S.Icon
        onClick={props.onClick}
        hasHover={props.hover}
        className={`material-icons-${props.type ?? 'outlined'}`}
        style={{
            fontSize: props.size ?? '1.2em',
            color: props.color ?? 'inherit',
            cursor: props.pointer ? 'pointer' : 'default',
            ...props.style
        }}
    >
        {props.icon}
    </S.Icon>
);