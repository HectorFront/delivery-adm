/** @name Dependencies */
import {ElementType} from 'react';

export const Render: ElementType = ({ contains, children }: any): JSX.Element | null =>
    contains ? children : null;



