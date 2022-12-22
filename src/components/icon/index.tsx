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

export const MaterialIcon: ElementType = memo(({
    type = 'outlined', size = '1.2em', color = 'inherit', hover, pointer, ...props
}: MaterialIconProps): JSX.Element =>
    <S.Icon
        {...props}
        hasHover={hover}
        pointer={pointer}
        className={`material-icons-${type}`}
        style={{
            color: color,
            fontSize: size,
            ...props?.style
        }}
    >
        {props.icon}
    </S.Icon>
);