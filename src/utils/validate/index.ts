interface valueMax {
    min: number | string,
    max: number | string,
    value: any
}

export class Validate {

    /**
     *
     * @param n
     * @returns {boolean}
     */
    static isDecimal(n) {
        return n % 1 === 0;
    }

    /**
     *
     * @param str
     * @returns {boolean}
     */
    static isNumber(str) {
        return !isNaN(parseFloat(str)) && isFinite(str);
    }

    /**
     *
     * @param min
     * @param max
     * @param value
     * @param callback
     * @returns {*}
     */
    static stringMaxLength({ min, max, value }: valueMax) {
        const length = value.length;
        if(value === '') {
            return true;
        } else if(length >= Number(min) && length <= Number(max)) {
            return true;
        }
        return false;
    }

    /**
     *
     * @param min
     * @param max
     * @param value
     * @param callback
     * @returns {*}
     */
    static numberMax({ min, max, value }: valueMax) {
        if(value === '') {
            return true;
        } else if(this.isNumber(value) && (Number(value) >= Number(min) && Number(value) <= Number(max))) {
            return true;
        }
        return false;
    }
}