/** @name Dependencies */
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
/** @name External */
import { App, Auth } from 'template';
import { RoutesApp, RoutesAuth } from 'modules';
import ClientRoutes from 'constants/client/routes';
import { Authentication } from 'services/user/authentication';

const authenticated = new Authentication().hasAuthentication();

const SwitchRoutes = ({ children }) => (
    <Suspense fallback={null}>
        <Switch>
            {children}
        </Switch>
    </Suspense>
);

const Routes = () => (
    <Router>
        {!authenticated
            ?
            <Auth>
                <SwitchRoutes>
                    {RoutesAuth.map(({ path, component }, index) =>
                        <Route key={index} path={path} component={component} />
                    )}
                </SwitchRoutes>
            </Auth>
            :
            <App>
                <SwitchRoutes>
                    {RoutesApp.map(({ path, component }, index) =>
                        <Route key={index} path={path} component={component} />
                    )}
                </SwitchRoutes>
            </App>
        }
        <Redirect from='*' to={ClientRoutes.LOGIN} />
    </Router>
);

export default Routes;