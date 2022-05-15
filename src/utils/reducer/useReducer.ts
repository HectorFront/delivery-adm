interface IAction {
    value: any,
    type: string,
    obj?: string | undefined,
    attr: string | undefined,
    payload?: any | undefined
}

export const init = (initialState) => {
    return initialState;
}

export const reducer = (state, action: IAction) => {
    switch (action.type) {
        case 'set':
            return {...state, [action.attr]: action.value};
        case 'setObject':
            return {...state, [action.obj]: {...state[action.obj], [action.attr]: action.value}}
        case 'reset':
            return init(action.payload);
        default:
            throw new Error();
    }
}