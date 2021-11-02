import Dashboard from 'modules/dashboard/path';
import StoreLogin from 'modules/auth/login/path';
import StoreRegister from 'modules/auth/register/path';

const
    RoutesAuth = [
        ...StoreLogin, ...StoreRegister
    ],
    RoutesApp = [
        ...Dashboard
    ];

export { RoutesApp, RoutesAuth };