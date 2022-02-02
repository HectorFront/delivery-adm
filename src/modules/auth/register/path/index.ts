import { lazy } from 'react';
import ClientRoutes from 'constants/client/routes';

const Path = [
    { path: ClientRoutes.REGISTER, component: lazy(() => import('modules/auth/register')) }
]

export default Path;