import Dashboard from 'modules/dashboard/path';
import StoreLogin from 'modules/auth/login/path';
import StoreRegister from 'modules/auth/register/path';

export const ROUTES_AUTH = [
    ...StoreLogin,
    ...StoreRegister
];

export const ROUTES_APP = [
    ...Dashboard
];