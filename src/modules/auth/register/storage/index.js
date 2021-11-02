export class StorageStoreRegister {

    /**
     *
     * @param type
     * @param profile
     */
    static visitSocialNetwork(type, profile) {
        const networks = {
            facebook: `https://www.facebook.com/${profile}`,
            instagram: `https://www.instagram.com/${profile}`
        }
        profile && window.open(networks[type]);
    }
}