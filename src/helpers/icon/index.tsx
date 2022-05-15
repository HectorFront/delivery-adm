/** @name Styled */
import * as S from './styles';
/** @name Dependencies */
import {memo, ElementType} from 'react';

type MaterialIconProps = {
    icon: string,
    style?: object,
    type?: string,
    size?: string,
    color?: string,
    hover?: boolean,
    pointer?: boolean,
}

export const MaterialIcon: ElementType = memo(({ type, size, color, hover, pointer, ...props}: MaterialIconProps): JSX.Element =>
    <S.Icon
        {...props}
        hasHover={hover}
        className={`material-icons-${type ?? 'outlined'}`}
        style={{
            fontSize: size ?? '1.2em',
            color: color ?? 'inherit',
            cursor: pointer ? 'pointer' : 'default',
            ...props?.style
        }}
    >
        {props.icon}
    </S.Icon>
);