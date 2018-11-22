// @flow
import type { Action } from '../actions';
import { createReducer } from '../actions';
import * as actions from './actions';
import * as anno from '../../lib/Layer/actions';
//import CollectionService from '../../lib/CollectionService'

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
   if(!services) services = []
   services = [ ...services,
         {
            selectedResource:action.meta.iri,
            fetching:false,
            service:action.payload,
            collectionsById:action.meta.collections.reduce((acc,c) => {
               return { ...acc, [c["collection"]["@id"]] : {
                  fetching:false,
                  selected:true,
                  supportsRange:true,
                  shouldSyncFor:{start:1,end:1000},
                  syncedFor:{start:0,end:0},
                  collectionInfo:c,
                  pages:{}
               } } ;
            },{})
         }
      ]

   console.log("services",services,action.payload,action.payload.constructor.name)

    return { ...state, services }
}
reducers[actions.TYPES.addedService] = addedService;

export const addService = (state: DataState, action: ServiceAction) => {
    return { ...state, services:[] }
}
reducers[anno.ADD_SERVICE] = addService;


export const syncService = (state: DataState, action: ServiceAction) => {
   let services = state.services
   if(!services) services = []
   services = services.map( (s) => {

      let collectionsById = { ...s.collectionsById }
      if(collectionsById) {
         let id = action.serviceUrl.replace(/^.*?[/]([^/]+)[/]$/,"$1")
         let collec = { ...collectionsById[id], fetching:true }
         //console.log("id",id,collec)
         collectionsById[id] = collec
      }

      if(s.service.constructor.name === "CollectionService") return ({
         ...s, fetching:true, collectionsById
      })
      else return s
   })
   return { ...state, services }
}
reducers[anno.SYNC_SERVICE] = syncService;

export const receivePage = (state: DataState, action: CollectionAction) => {
   let services = state.services
   if(!services) services = []
   services = services.map( (s) => {

      let collectionsById = { ...s.collectionsById }
      if(collectionsById) {
         let id = action.collectionUrl.replace(/^.*?[/]([^/]+)[/]$/,"$1")
         let collec = collectionsById[id]
         collec = {
            ...collec,
            fetching:false,
            syncedFor:action.range,
            pages:{...collec.pages, [action.range.start+"-"+action.range.end]:action.page}
         }
         //console.log("id",id,collec)
         collectionsById[id] = collec
      }

      if(s.service.constructor.name === "CollectionService") return ({
         ...s, fetching:false,collectionsById
      })
      else return s ;
    })

    return { ...state, services }

}
reducers[anno.RECEIVE_PAGE] = receivePage;


export const getChunks = (state: DataState, action: Action) => {
    return { ...state, next:action.meta.next }
}
reducers[actions.TYPES.getChunks] = getChunks;

export const gotChunks = (state: DataState, action: Action) => {
   try {
      let chunks = state.chunks
      if(chunks) chunks = chunks.concat(action.payload)
      else chunks = action.payload

      let services = state.services
      if(services) {
         services = services.map( (s) => {

            let collectionsById = Object.keys(s.collectionsById).reduce( (acc,id) => {
               let collec = s.collectionsById[id]


               let sync = collec.shouldSyncFor


               collec = { ...collec, shouldSyncFor:sync, youpi:true }
               return {...acc, [id] : collec }
            },{})

            return { ...s, collectionsById}
         })
      }
      return { ...state, IRI:action.meta, chunks, services }
   }
   catch(e) {

      console.error(e)
   }
}
reducers[actions.TYPES.gotChunks] = gotChunks;

export const noChunk = (state: DataState, action: Action) => {
   return { ...state, loaded : true }
}
reducers[actions.TYPES.noChunk] = noChunk;

// Data Reducer
const reducer = createReducer(DEFAULT_STATE, reducers);
export default reducer;
