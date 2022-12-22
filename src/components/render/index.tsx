/** @name Dependencies */
import {ElementType} from 'react';

interface RenderProps {
    has: boolean,
    children: JSX.Element
}

export const Render: ElementType = ({ has, children }: RenderProps): JSX.Element =>
    has ? children : null;



