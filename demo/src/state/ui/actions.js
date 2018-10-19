// @flow
import { createAction } from 'redux-actions';
import type { Action } from '../actions';

export const TYPES = {};

TYPES.helloWorldUI = 'HELLO_WORLD_UI';
export const helloWorldUI = (): Action => {
   return {
      type:TYPES.helloWorldUI
   }
}
