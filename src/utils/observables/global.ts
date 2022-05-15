/**
 * @author Hector Rodrigues da Silva
 */

export let _observers: any[] = [];

type IdEventProp = number | string;
type IdListenerProp = number | string;
type FnListenerProp = Function | undefined;

export class ObservableGlobal {

    /**
     *
     * @returns {*[]}
     */
    static unsubscribeAll() {
        console.log('[~Clear] => All observable');
        return _observers = [];
    }

    /**
     *
     * @param idListener
     * @returns {*[]}
     */
    static unsubscribe(idListener: IdListenerProp) {
        console.log(`[~Clear] => Observer: ${idListener}`);
        return _observers = _observers.filter(item => item.observer.idListener !== idListener);
    }

    /**
     *
     * @param idEvent
     * @param data
     */
    static notify(idEvent: IdEventProp, data: any) {
        _observers.forEach(({observer}) => {
            if(observer.idEvent === idEvent) {
                observer.fnListener(data);
            }
        });
    }

    /**
     *
     * @param idListener
     * @param fnListener
     * @param idEvent
     * @returns {*[]}
     */
    static subscribe(idListener: IdListenerProp, fnListener: FnListenerProp, idEvent: IdEventProp) {
        console.log(`[~Subscribe] => ID: ${idEvent} = ${idListener}`);
        _observers.push({observer: {idListener, fnListener, idEvent}});
    }
}