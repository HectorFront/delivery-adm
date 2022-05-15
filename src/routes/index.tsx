/** @name Dependencies */
import {ElementType, ComponentType, LazyExoticComponent, ReactNode, Suspense} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
/** @name External */
import {Render} from 'helpers';
import {App, Auth} from 'template';
import ClientRoutes from 'constants/client/routes';
import {ROUTES_APP, ROUTES_AUTH} from 'modules/paths';
import {Authentication} from 'services/user/authentication';

interface SwitchRoutesProps {
    children?: ReactNode
}

interface RoutesComponentsProps {
    path: string,
    component: LazyExoticComponent<any> | ComponentType
}

const SwitchRoutes: ElementType = ({ children }: SwitchRoutesProps): JSX.Element => (
    <Suspense fallback={null}>
        <Switch>
            {children}
        </Switch>
    </Suspense>
)

export const Routes: ElementType = (): JSX.Element => {
    const userAuthenticated: boolean = Authentication.logged();
    return (
        <BrowserRouter>
            <SwitchRoutes>
                <Render contains={!userAuthenticated}>
                    <Auth>
                        {ROUTES_AUTH.map(({ path, component }: RoutesComponentsProps, i: number) =>
                            <Route key={i} path={path} component={component} />
                        )}
                    </Auth>
                </Render>
                {/*VERIFICAR RENDERIZAÇÃO (BUG REACT ROUTER DOM)*/}
                <Render contains={userAuthenticated}>
                    <App>
                        {ROUTES_APP.map(({ path, component }: RoutesComponentsProps,  i: number) =>
                            <Route key={i} path={path} component={component} />
                        )}
                    </App>
                </Render>
            </SwitchRoutes>
            <Redirect from='*' to={ClientRoutes[!userAuthenticated ? "LOGIN" : "HOME"]} />
        </BrowserRouter>
    )
}