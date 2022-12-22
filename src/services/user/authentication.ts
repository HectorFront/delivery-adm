/** @name External */
// import {AsyncStorage} from 'utils';
import {RouteComponentProps} from "react-router-dom";

/**
 * @author Hector Rodrigues da Silva
 * @class Authentication
 */
export class Authentication {

    _history: RouteComponentProps;
    _userContext: any;

    constructor({ history, userContext }) {
        this._history = history;
        this._userContext = userContext;
    }

    /**
     *
     */
    login() {
        return null;
    }

    /**
     *
     */
    signIn() {
        return null;
    }

    /**
     *
     */
    logout() {
        return null;
    }
}