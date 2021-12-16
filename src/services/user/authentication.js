/** @name External */
import { AsyncStorage } from 'utils';

/**
 * @author Hector Rodrigues da Silva
 * @class Authentication
 */
export class Authentication {
    constructor() {
        this.user = null;
    }

    /**
     *
     * @returns {boolean}
     */
    hasAuthentication() {
        return false;
    }
}