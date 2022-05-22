export class ModelStoreRegister {

    /**
     *
     * @param type
     * @param profile
     */
    static visitSocialNetwork(type: string, profile: string) {
        type DefinedNetworks = {
            [index: string]: any
        }
        const networks: DefinedNetworks = {
            facebook: `https://www.facebook.com/${profile}`,
            instagram: `https://www.instagram.com/${profile}`
        }
        profile && window.open(networks[type]);
    }

    static registerUserStore() {

    }
}