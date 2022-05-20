/** @name Dependencies */
import {useContext, ElementType, ComponentType, LazyExoticComponent, ReactNode, Suspense} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
/** @name External */
import {App, Auth} from 'template';
import {UserContext} from 'context/user';
import ClientRoutes from 'constants/client/routes';
import {ROUTES_APP, ROUTES_AUTH} from 'modules/paths';
import {Authentication} from 'services/user/authentication';

interface SwitchRoutesProps {
    children?: ReactNode
}

interface RoutesComponentsProps {
    path: string,
    component: LazyExoticComponent<ComponentType> | ComponentType
}

interface UserContextProps {
    state: object,
    token: string | object,
    setToken: Function,
    handleState: Function,
    handleStateObject: Function
}

const SwitchRoutes: ElementType = ({ children }: SwitchRoutesProps): JSX.Element => (
    <Suspense fallback={null}>
        <Switch>
            {children}
        </Switch>
    </Suspense>
);

const RenderRoutes: ElementType = ({authenticated, authRoutes, privateRoutes}) => {
    if (authenticated) {
        return (
            <App>
                {privateRoutes.map(({ path, component }: RoutesComponentsProps,  i: number) =>
                    <Route key={i} path={path} component={component}/>
                )}
            </App>
        );
    }
    return (
        <Auth>
            {authRoutes.map(({ path, component }: RoutesComponentsProps, i: number) =>
                <Route key={i} path={path} component={component}/>
            )}
        </Auth>
    )
};

export const Routes: ElementType = (): JSX.Element => {
    const userContext = useContext<UserContextProps>(UserContext);
    const userAuthenticated = Authentication.validateToken(userContext.token);
    return (
        <BrowserRouter>
            <SwitchRoutes>
                <RenderRoutes authenticated={userAuthenticated} authRoutes={ROUTES_AUTH} privateRoutes={ROUTES_APP}/>
            </SwitchRoutes>
            <Redirect from='*' to={ClientRoutes[!userAuthenticated ? 'LOGIN' : 'HOME']}/>
        </BrowserRouter>
    )
}