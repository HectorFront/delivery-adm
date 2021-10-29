import { lazy } from 'react';
import ClientRoutes from 'constants/client/routes';

export default [
    { path: ClientRoutes.LOGIN, component: lazy(() => import('modules/login')) }
]