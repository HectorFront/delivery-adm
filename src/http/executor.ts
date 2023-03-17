import { AsyncStorage } from "utils";

interface RequestProps {
    url: string,
    body?: object,
    method: string,
    headers: Headers,
    externalOrigin?: string
}

const getResults = (response, statusOk) => {
    return response.text().then(value => {
        try {
            if(statusOk) {
                return JSON.parse(value);
            } else {
                return Object.assign(response, JSON.parse(value));
            }
        } catch (err) {
            return response;
        }
    });
}

/**
 *
 * @param Request
 * @returns {Promise<any>}
 * @constructor
 */
export const ExecutorRequest = (Request: RequestProps) => {
    const token: string = AsyncStorage.get(process.env.REACT_APP_USER_TOKEN_STORAGE);
    if(!Request.externalOrigin) {
        token && Request.headers.append('authorization', token);
        Request.headers.append('client_id', process.env.REACT_APP_CLIENT_ID);
        Request.headers.append('client_secret', process.env.REACT_APP_CLIENT_SECRET);
    }
    let options: RequestInit;
    if(Request.method.includes('GET')) {
        options = {
            headers: Request.headers
        };
    } else {
        options = {
            method: Request.method,
            headers: Request.headers,
            body: JSON.stringify(Request.body)
        };
    }
    return new Promise(async (resolve, reject) => {
        try {
            const base: string = Request.externalOrigin ?? process.env.REACT_APP_API_BASE_URL;
            const response: Response = await fetch(`${base}/${Request.url}`, options);
            const statusReply: boolean = response.status >= 200 && response.status <= 299;
            getResults(response, statusReply).then(value => statusReply ? resolve(value) : reject(value));
        } catch (err) {
            reject(err);
        }
    });
};