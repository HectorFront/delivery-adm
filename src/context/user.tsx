/** @name Dependencies */
import {createContext, useState, useReducer, ElementType, ReactNode} from 'react';
/** @name External */
import {reducer, handleState, handleStateObject} from 'utils/reducer/useReducer';

interface UserContextProps {
    state: object,
    token: string | object,
    setToken: Function,
    handleState: Function,
    handleStateObject: Function
}

/** @name Constants */
export const UserContext = createContext<UserContextProps>({
    state: {},
    token: null,
    setToken: () => {},
    handleState: () => {},
    handleStateObject: () => {}
});
const INITIAL_STATE = {};

type UserProviderProps = {
    children: ReactNode
}

/**
 *
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export const UserProvider: ElementType = ({children}: UserProviderProps): JSX.Element => {

    const [token, setToken] = useState('');
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    return (
        <UserContext.Provider
            value={{
                state,
                token,
                setToken,
                handleState: ({key, value}) => handleState(dispatch, key, value),
                handleStateObject: ({obj, key, value}) => handleStateObject(dispatch, obj, key, value)
            }}
        >
            {children}
        </UserContext.Provider>
    )
}