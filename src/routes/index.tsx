/** @name Dependencies */
import React, { LazyExoticComponent, ReactNode, Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
/** @name External */
import { App, Auth } from 'template';
import { ROUTES_APP, ROUTES_AUTH } from 'modules/paths';
import ClientRoutes from 'constants/client/routes';
import { Authentication } from 'services/user/authentication';

const userAuth: any = new Authentication();

interface SwitchRoutesProps {
    children?: ReactNode
}

interface RoutesComponentsProps {
    path: string,
    component: LazyExoticComponent<any>
}

const SwitchRoutes: React.ElementType = ({ children }: SwitchRoutesProps): JSX.Element => (
    <Suspense fallback={null}>
        <Switch>
            {children}
        </Switch>
    </Suspense>
)

const Routes: React.ElementType = (): JSX.Element => {
    const isLogged: boolean = userAuth.hasAuthentication();
    return (
        <BrowserRouter>
            <SwitchRoutes>
                {!isLogged
                    ?
                    <Auth>
                        {ROUTES_AUTH.map(({ path, component }: RoutesComponentsProps, i: number) =>
                            <Route key={i} path={path} component={component} />
                        )}
                    </Auth>
                    :
                    <App>
                        {ROUTES_APP.map(({ path, component }: RoutesComponentsProps,  i: number) =>
                            <Route key={i} path={path} component={component} />
                        )}
                    </App>
                }
                <Redirect from='*' to={ClientRoutes[!isLogged ? "LOGIN" : "HOME"]} />
            </SwitchRoutes>
        </BrowserRouter>
    )
}

export { Routes };