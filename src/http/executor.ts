import { AsyncStorage } from "utils";

interface RequestProps {
    url: string,
    method: string,
    headers: Headers,
    body?: string | object,
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
        Request.headers.append('Authorization', token);
    } else {
        Request.headers.delete('Authorization');
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
            const statusOK: boolean = response.status >= 200 && response.status <= 299;
            getResults(response, statusOK).then(value => statusOK ? resolve(value) : reject(value));
        } catch (err) {
            reject(err);
        }
    });
};