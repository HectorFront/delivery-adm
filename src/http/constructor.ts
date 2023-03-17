export class ConstructorRequest {

    _url: string;
    _body?: object;
    _method: string;
    _headers: Headers;
    _externalOrigin?: string;

    /**
     *
     * @param url
     * @param headers
     * @param method
     * @param body
     * @param externalOrigin
     */
    constructor({ url = null, headers = new Headers(), method = null, body = {}, externalOrigin = null }) {
        this._url = url;
        this._body = body;
        this._method = method;
        this._headers = headers;
        this._externalOrigin = externalOrigin;
    }

    /**
     *
     * @returns {*}
     */
    get url(): string {
        return this._url;
    }

    /**
     *
     * @returns {*}
     */
    get headers(): object {
        return this._headers;
    }

    /**
     *
     * @returns {*}
     */
    get method(): string {
        return this._method;
    }

    /**
     *
     * @returns {*}
     */
    get body(): object {
        return this._body;
    }

    /**
     *
     * @returns {*}
     */
    get externalOrigin(): string {
        return this._externalOrigin;
    }
}