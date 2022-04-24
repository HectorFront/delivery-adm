/**
 * @author Hector Rodrigues da Silva
 * @class AsyncStorage
 */
export class AsyncStorage {
    /**
     * set in model
     *
     * @param {String} key
     * @param {*} value
     */
    static set(key: string, value: string) {
        localStorage.setItem(window.btoa(String(key)), window.btoa(String(value)));
    }

    /**
     * get in model
     *
     * @param {String} key
     * @returns {*} Value
     */
    static get(key: string) {
        const values: string = localStorage.getItem(window.btoa(String(key))) ?? '';
        return values ? window.atob(values) : values;
    }

    /**
     * set object in model
     *
     * @param {String} key
     * @param {Object} value
     */
    static setObject(key: string, value: string) {
        localStorage.setItem(window.btoa(String(key)), window.btoa(JSON.stringify(value)));
    }

    /**
     * get object in model
     *
     * @param {String} key
     * @returns {Object} value
     */
    static getObject(key: string) {
        const values: string = localStorage.getItem(window.btoa(String(key))) ?? '';
        return JSON.parse(values ? window.atob(values) : values);
    }

    /**
     * remove item do model
     *
     * @param {String} key
     */
    static removeItem(key: string) {
        localStorage.removeItem(window.btoa(String(key)));
    }

    /**
     * Clear model
     */
    static clear() {
        localStorage.clear();
    }
}
