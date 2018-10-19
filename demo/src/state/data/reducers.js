// @flow
import type { Action } from '../actions';
import { createReducer } from '../actions';
import * as actions from './actions';

export type DataState = {
   chunks? : []
}

const DEFAULT_STATE: DataState = {
}

let reducers = {};

export const gotChunks = (state: DataState, action: Action) => {
    return { ...state, chunks:action.payload }
}
reducers[actions.TYPES.gotChunks] = gotChunks;

// Data Reducer
const reducer = createReducer(DEFAULT_STATE, reducers);
export default reducer;
