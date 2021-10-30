/** @name Styled */
import { Icon } from './styled';
/** @name Dependencies */
import React from 'react';

export const MaterialIcon = React.memo(({ type = 'outlined', hover, size = '1.2em', color = 'black', icon, onClick = () =>{} }) =>
    <Icon
        hasHover={hover}
        onClick={onClick}
        style={{ fontSize: size, color }}
        className={`material-icons-${type}`}
    >
        {icon}
    </Icon>
);