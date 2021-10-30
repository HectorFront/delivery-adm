import React from 'react';

export const RenderComponent = ({ has, children }) =>
    has ? children : false;