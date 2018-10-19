// @flow

export type Action = {
    type: string,
    payload?: any,
    error?: Error,
    meta?: any
}

export const INITIATE_APP = 'INITIATE_APP';
export const initiateApp = (): Action => {
    return {
        type: INITIATE_APP
    }
}


export const createReducer = (initialState: {}, handlers: {}) => {
    return function reducer(state: {} = initialState, action: Action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action)
        } else {
            return state
        }
    }
}
