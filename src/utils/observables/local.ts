/**
 * @author: Hector Rodrigues da Silva
 * @author: Giovane Santos Silva
 */

type IdEventProp = number | string;
type IdListenerProp = number | string;
type FnListenerProp = Function | undefined;

export class Observable {

    _listeners: any[];

    constructor() {
        this._listeners = [];
    }

    /**
     *
     * @param idListener
     * @param fnListener
     */
    subscribe(idListener: IdListenerProp, fnListener: FnListenerProp) {
        console.log(`[~Subscribe] => ${idListener}`);
        this._listeners.push({idListener, fnListener});
    }

    /**
     *
     * @returns {*[]}
     */
    unsubscribeAll() {
        console.log('[~Clear] => All observers');
        this._listeners = [];
    }

    /**
     *
     *
     * @param idListener
     */
    unsubscribe(idListener: IdListenerProp) {
        console.log(`[~Clear] => Observer: ${idListener}`);
        this._listeners = this._listeners.filter(listener => listener.id !== idListener);
    }

    /**
     *
     * @param idEvent
     * @param data
     */
    notify(idEvent: IdEventProp, data: any) {
        this._listeners.forEach(listener => {
            if(listener.id === idEvent) {
                return listener.fn(data);
            }
        });
    }
}