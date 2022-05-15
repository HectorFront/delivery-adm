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
    static capitalize(str: string) {
       return str.charAt(0).toUpperCase() + str.slice(1);
    }

    /**
     *
     * @param str
     */
    static formatCurrency(str: string | number) {
        return str.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    }
}