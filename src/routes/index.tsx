/** @name Dependencies */
import React, { LazyExoticComponent, ReactNode, Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
/** @name External */
import { Render } from 'helpers';
import { App, Auth } from 'template';
import ClientRoutes from 'constants/client/routes';
import { ROUTES_APP, ROUTES_AUTH } from 'modules/paths';
import { Authentication } from 'services/user/authentication';

interface SwitchRoutesProps {
    children?: ReactNode
}

interface RoutesComponentsProps {
    path: string,
    component: LazyExoticComponent<any> | React.ComponentType
}

const SwitchRoutes: React.ElementType = ({ children }: SwitchRoutesProps): JSX.Element => (
    <Suspense fallback={null}>
        <Switch>
            {children}
        </Switch>
    </Suspense>
)

const Routes: React.ElementType = (): JSX.Element => {
    const USER_AUTHENTICATED: boolean = Authentication.logged();
    return (
        <BrowserRouter>
            <SwitchRoutes>
                <Render contains={!USER_AUTHENTICATED}>
                    <Auth>
                        {ROUTES_AUTH.map(({ path, component }: RoutesComponentsProps, i: number) =>
                            <Route key={i} path={path} component={component} />
                        )}
                    </Auth>
                </Render>
                <Render contains={USER_AUTHENTICATED}>
                    <App>
                        {ROUTES_APP.map(({ path, component }: RoutesComponentsProps,  i: number) =>
                            <Route key={i} path={path} component={component} />
                        )}
                    </App>
                </Render>
            </SwitchRoutes>
            <Redirect from='*' to={ClientRoutes[!USER_AUTHENTICATED ? "LOGIN" : "HOME"]} />
        </BrowserRouter>
    )
}

export { Routes };