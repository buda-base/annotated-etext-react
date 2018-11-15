// @flow
import type { Action } from '../actions';
import { createReducer } from '../actions';
import * as actions from './actions';
import * as anno from '../../lib/Layer/actions';

export type DataState = {
   IRI?:[],
   chunks? : [],
   next:number,
   services:{}
}

const DEFAULT_STATE: DataState = {
   next:1
}

let reducers = {};

export const addedService = (state: DataState, action: Action) => {
   let services = state.services
   if(!services || services === true) services = []
   services = [ ...services, action.payload ]

   console.log("services",services)

    return { ...state, services }
}
reducers[actions.TYPES.addedService] = addedService;

export const addService = (state: DataState, action: Action) => {
    return { ...state, services:true }
}
reducers[anno.ADD_SERVICE] = addService;

export const getChunks = (state: DataState, action: Action) => {
    return { ...state, next:action.meta }
}
reducers[actions.TYPES.getChunks] = getChunks;

export const gotChunks = (state: DataState, action: Action) => {
   let chunks = state.chunks
   if(chunks) chunks = chunks.concat(action.payload)
   else chunks = action.payload
   return { ...state, IRI:action.meta, chunks }
}
reducers[actions.TYPES.gotChunks] = gotChunks;

export const noChunk = (state: DataState, action: Action) => {
   return { ...state, loaded : true }
}
reducers[actions.TYPES.noChunk] = noChunk;

// Data Reducer
const reducer = createReducer(DEFAULT_STATE, reducers);
export default reducer;
