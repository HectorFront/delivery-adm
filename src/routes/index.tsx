/** @name Dependencies */
import React, { LazyExoticComponent, ReactNode, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
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

const SwitchRoutes: Function = ({ children }: SwitchRoutesProps): JSX.Element => (
    <Suspense fallback={null}>
        <Switch>
            {children}
        </Switch>
    </Suspense>
)

const Routes: Function = (): JSX.Element => {
    const isLogged: boolean = userAuth.hasAuthentication();
    return (
        <Router>
            <SwitchRoutes>
                {!isLogged
                    ?
                    <Auth>
                        {ROUTES_AUTH.map<object>(({ path, component }: RoutesComponentsProps, i: number) =>
                            <Route key={i} path={path} component={component} />
                        )}
                    </Auth>
                    :
                    <App pathCurrent={"teste"}>
                        {ROUTES_APP.map<object>(({ path, component }: RoutesComponentsProps,  i: number) =>
                            <Route key={i} path={path} component={component} />
                        )}
                    </App>
                }
            </SwitchRoutes>
            <Redirect from='*' to={ClientRoutes[!isLogged ? "LOGIN" : "HOME"]} />
        </Router>
    )
}

export default Routes;