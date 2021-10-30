import Login from 'modules/auth/login/path';
import Register from 'modules/auth/register/path';
import Dashboard from 'modules/dashboard/path';

const
    RoutesAuth = [
        ...Login, ...Register
    ],
    RoutesApp = [
        ...Dashboard
    ];

export { RoutesApp, RoutesAuth };