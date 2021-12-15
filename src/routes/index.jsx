/** @name Dependencies */
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
/** @name External */
import { App, Auth } from 'template';
import { RoutesApp, RoutesAuth } from 'modules';
import ClientRoutes from 'constants/client/routes';
import { Authentication } from 'services/user/authentication';

const userAuth = new Authentication();

const SwitchRoutes = ({ children }) => (
    <Suspense fallback={null}>
        <Switch>
            {children}
        </Switch>
    </Suspense>
)

const Routes = () => {
    const isLogged = userAuth.hasAuthentication();
    return (
        <Router>
            <SwitchRoutes>
                {!isLogged
                    ?
                    <Auth>
                        {RoutesAuth.map(({ path, component }, i) =>
                            <Route key={i} path={path} component={component} />
                        )}
                    </Auth>
                    :
                    <App>
                        {RoutesApp.map(({ path, component }, i) =>
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