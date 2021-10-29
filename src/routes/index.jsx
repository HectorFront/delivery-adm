/** @name Dependendcies */
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
/** @name Internal */
import App from './app';
import { RoutesApp, RoutesAuth } from 'modules';

const authenticated = false;

const ContainerSwitch = ({ children }) => (
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
            <ContainerSwitch>
                {RoutesAuth.map(({ path, component }, index) =>
                    <Route key={index} path={path} component={component} />
                )}
            </ContainerSwitch>
            :
            <App>
                <ContainerSwitch>
                    {RoutesApp.map(({ path, component }, index) =>
                        <Route key={index} path={path} component={component} />
                    )}
                </ContainerSwitch>
            </App>
        }
        <Redirect from='*' to='/login' />
    </Router>
);

export default Routes;