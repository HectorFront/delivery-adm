import Login from 'modules/login/path';
import Register from 'modules/register/path';
import Dashboard from 'modules/dashboard/path';

const
    RoutesAuth = [
        ...Login, ...Register
    ],
    RoutesApp = [
        ...Dashboard
    ];

export { RoutesApp, RoutesAuth };