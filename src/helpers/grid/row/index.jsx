import React from 'react';

export const Row = React.memo(({ className, children }) =>
    <div className={`row${className ? ` ${className}` : ''}`}>
        {children}
    </div>
);