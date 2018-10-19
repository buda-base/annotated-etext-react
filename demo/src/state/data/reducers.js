// @flow
import type { Action } from '../actions';
import { createReducer } from '../actions';
import * as actions from './actions';

export type DataState = {}

const DEFAULT_STATE: DataState = {}

let reducers = {};

export const helloWorldData = (state: DataState, action: Action) => {
    return { ...state }
}
reducers[actions.TYPES.helloWorldData] = helloWorldData;

// Data Reducer
const reducer = createReducer(DEFAULT_STATE, reducers);
export default reducer;
