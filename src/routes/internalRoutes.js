/** @name Dependencies */
import { lazy } from 'react';
/** @name External */
const Login = lazy(() => import('modules/login'));
const Register = lazy(() => import('modules/register'));
const Dashboard = lazy(() => import('modules/dashboard'));

const RoutesAuth = [
    { path: '/login', component: Login },
    { path: '/register', component: Register }
];

const RoutesApp = [
    { path: '/dashboard', component: Dashboard }
];

export { RoutesApp, RoutesAuth };