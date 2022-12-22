export class ConstructorRequest {

    _url: string;
    _body: string | object;
    _method: string;
    _headers: Headers;

    /**
     *
     * @param url
     * @param headers
     * @param method
     * @param body
     */
    constructor({ url = null, headers = new Headers(), method = null, body = {} }) {
        this._url = url;
        this._body = body;
        this._method = method;
        this._headers = headers;
    }

    /**
     *
     * @returns {*}
     */
    get url() {
        return this._url;
    }

    /**
     *
     * @returns {*}
     */
    get headers() {
        return this._headers;
    }

    /**
     *
     * @returns {*}
     */
    get method() {
        return this._method;
    }

    /**
     *
     * @returns {*}
     */
    get body() {
        return this._body;
    }
}