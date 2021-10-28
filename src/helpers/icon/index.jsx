import React from 'react';

export const MaterialIcon = React.memo(({ type = 'outlined', size = '1.2em', color = 'black', icon, onClick = () =>{} }) =>
    <span
        onClick={onClick}
        style={{ fontSize: size, color }}
        className={`material-icons-${type}`}
    >
        {icon}
    </span>
);