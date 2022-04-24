/** @name Dependencies */
import React from 'react';

export const Render: React.ElementType = ({ contains, children }: any): JSX.Element | null =>
    contains ? children : null;



