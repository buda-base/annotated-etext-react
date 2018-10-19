// @flow
import type { Action } from '../actions';
import { createReducer } from '../actions';
import * as actions from './actions';

export type UIState = {}

const DEFAULT_STATE: UIState = {}

let reducers = {};

export const helloWorldUI = (state: UIState, action: Action) => {
    return { ...state }
}
reducers[actions.TYPES.helloWorldUI] = helloWorldUI;

console.log("coucou",createReducer)

// UI Reducer
const reducer = createReducer(DEFAULT_STATE, reducers);
export default reducer;
