// @flow
//import { createAction } from 'redux-actions';
import type { Action } from '../actions';

export const TYPES = {};

TYPES.getChunks = 'GET_CHUNKS';
export const getChunks = (iri:string,n:number): Action => {
   return {
      type : TYPES.getChunks,
      payload:iri,
      meta:n
   }
}

TYPES.gotChunks = 'GOT_CHUNKS';
export const gotChunks = (iri:string,res:[]): Action => {
   return {
      type : TYPES.gotChunks,
      payload:res,
      meta:iri
   }
}

TYPES.noChunk = 'NO_CHUNK';
export const noChunk = (): Action => {
   return {
      type : TYPES.noChunk
   }
}
