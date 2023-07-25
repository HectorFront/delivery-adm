import {ExecutorRequest} from "http/executor";
import {RequestRegisterCompany} from "http/requests";
import {FormatString} from "utils";

export class ModelStoreRegister {

    /**
     *
     * @param type
     * @param profile
     */
    static visitSocialNetwork(type: string, profile: string) {
        profile && window.open(profile);
        // create validation links
    }

    static registerCompany(state) {
        let payload = structuredClone(state);
        delete payload.progressBar;
        delete payload.stepCurrent;
        let socialMedias = [];
        for(let keySocial in payload.social) {
            if(payload.social[keySocial]) {
                let social = {
                    name: keySocial,
                    description: FormatString.capitalize(keySocial),
                    link: payload.social[keySocial]
                };
                socialMedias.push(social);
            }
        }
        payload.socialMedias = socialMedias;
        delete payload.social;
        const body = JSON.stringify(payload);
        return new Promise((resolve, reject) =>
            ExecutorRequest(new RequestRegisterCompany(body))
                .then(resp => resolve(resp))
                .catch(err => reject(err.response.status)));
    }
}