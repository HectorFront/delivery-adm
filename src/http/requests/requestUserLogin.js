import {ConstructorRequest} from '../constructor';
import {APIRoutes} from 'src/constants/api/routes'

export class RequestUserLogin extends ConstructorRequest {
    /**
     *
     * @param body
     */
    constructor(body) {
        const url = APIRoutes.login;
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        super(url, headers, 'POST', body);
    }
}