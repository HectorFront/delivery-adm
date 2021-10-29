/**
 * @author Hector Rodrigues da Silva
 * @class AsyncStorage
 */
export class AsyncStorage {
    /**
     * set in storage
     *
     * @param {String} key
     * @param {*} value
     */
    static set(key, value) {
        localStorage.setItem(btoa(String(key)), btoa(String(value)));
    }

    /**
     * get in storage
     *
     * @param {String} key
     * @returns {*} Value
     */
    static get(key) {
        const values = localStorage.getItem(btoa(String(key)));
        return values ? atob(values) : values;
    }

    /**
     * set object in storage
     *
     * @param {String} key
     * @param {Object} value
     */
    static setObject(key, value) {
        localStorage.setItem(btoa(String(key)), btoa(JSON.stringify(value)));
    }

    /**
     * get object in storage
     *
     * @param {String} key
     * @returns {Object} value
     */
    static getObject(key) {
        const values = localStorage.getItem(btoa(String(key)));
        return JSON.parse(values ? atob(values) : values);
    }

    /**
     * remove item do storage
     *
     * @param {String} key
     */
    static removeItem(key) {
        localStorage.removeItem(btoa(String(key)));
    }

    /**
     * Clear storage
     */
    static clear() {
        localStorage.clear();
    }

}

export default AsyncStorage;
