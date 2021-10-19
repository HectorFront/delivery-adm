import React from 'react';

export const MaterialIcon = React.memo(({ type = 'outlined', icon }) =>
    <span className={`material-icons-${type}`}>
        {icon}
    </span>
);