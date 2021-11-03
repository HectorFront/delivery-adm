/** @name Styled */
import { Icon } from './styled';
/** @name Dependencies */
import React from 'react';

export const MaterialIcon = React.memo(({ type = 'outlined', hover, size = '1.2em', color = 'black', icon, style = {}, onClick = () =>{} }) =>
    <Icon
        hasHover={hover}
        onClick={onClick}
        className={`material-icons-${type}`}
        style={{ fontSize: size, color, ...style }}
    >
        {icon}
    </Icon>
);