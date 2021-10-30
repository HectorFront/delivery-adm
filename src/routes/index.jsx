/** @name Dependendcies */
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
/** @name External */
import { App, Auth } from 'template';
import { RoutesApp, RoutesAuth } from 'modules';
import ClientRoutes from 'constants/client/routes';

const authenticated = false;

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