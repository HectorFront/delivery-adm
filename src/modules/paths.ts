import Dashboard from 'modules/dashboard/path';
import StoreLogin from 'modules/auth/login/path';
import StoreRegister from 'modules/auth/register/path';

export const RoutesAuth = [
    ...StoreLogin,
    ...StoreRegister
];

export const RoutesApp = [
    ...Dashboard
];