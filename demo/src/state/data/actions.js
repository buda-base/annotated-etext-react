// @flow
import { createAction } from 'redux-actions';
import type { Action } from '../actions';

export const TYPES = {};

TYPES.gotChunks = 'GOT_CHUNKS';
export const gotChunks = (res:[]): Action => {
   return {
      type : TYPES.gotChunks,
      payload:res
   }
}
