import {ConstructorRequest} from '../../constructor';
import {APIRoutes} from 'constants/api/routes';

export class RequestRegisterCompany extends ConstructorRequest {
    /**
     *
     * @param body
     */
    constructor(body) {
        const url: string = APIRoutes.COMPANY;
        const headers: Headers = new Headers();
        headers.append("Content-Type", "application/json");
        super({ url, headers, method: 'POST', body });
    }
}