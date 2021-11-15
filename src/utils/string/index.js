/**
 * @author Hector Rodrigues da Silva
 * @class String
 */
export class String {

    /**
     *
     * @param str
     * @constructor
     */
    static capitalize(str) {
       return str.charAt(0).toUpperCase() + str.slice(1);
    }
}