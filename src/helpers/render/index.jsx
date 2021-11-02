import React from 'react';

export const Render = ({ has, children }) =>
    has ? children : false;