import Home from 'modules/screens/home/path';
import StoreLogin from 'modules/screens/auth/login/path';
import StoreRegister from 'modules/screens/auth/register/path';

export const ROUTES = [
    ...StoreLogin,
    ...StoreRegister
];

export const PRIVATE_ROUTES = [
    ...Home
];