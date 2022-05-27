/**
 *
 * @param Request
 * @returns {Promise<any>}
 * @constructor
 */
export const ExecutorRequest = Request => {
    const options = Request.method.includes('GET') ? {} : {
        method: Request.method,
        headers: Request.headers,
        body: JSON.stringify(Request.payload)
    };
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/${Request.url}`, options)
        .then(response => response.json())
        .then(data => data)
        .catch(err => err);
};