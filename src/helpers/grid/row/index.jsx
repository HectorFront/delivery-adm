import React from 'react';

export const Row = React.memo(({ children }) =>
    <div className="row">
        {children}
    </div>
);