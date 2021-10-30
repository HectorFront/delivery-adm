import Login from 'modules/auth/login/path';
import Dashboard from 'modules/dashboard/path';
import Register from 'modules/auth/register/path';

const
    RoutesAuth = [
        ...Login, ...Register
    ],
    RoutesApp = [
        ...Dashboard
    ];

export { RoutesApp, RoutesAuth };