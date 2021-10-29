import { lazy } from 'react';
import ClientRoutes from 'constants/client/routes';

export default [
    { path: ClientRoutes.DASHBOARD, component: lazy(() => import('modules/dashboard')) }
]