// @flow
import { takeLatest, all } from 'redux-saga/effects';
import {store} from '../../index';
import { INITIATE_APP } from '../actions';
import * as data from '../data/actions';
import * as anno from '../../lib/Layer/actions' ;
//import * as uiActions from '../ui/actions';
import _ from 'lodash' ;
import mockdata from '../../lib/mockdata';
import {URL,NumericRange} from '../../lib/AnnotationTypes';
import CollectionService from "../../lib/CollectionService"

function initiateApp(iri:string) {
   try {

      store.dispatch(data.getChunks(iri,1))

   }
   catch(e) {
     console.error('initiateApp error: %o', e);
   }
}

async function getChunks(iri:string,n:number) {

   try {

      let demo = await fetch("http://purl.bdrc.io/graph/Chunks?I_LIM=5&R_RES="+iri+"&I_SEQ="+n,{ method: "GET" })
      let text = JSON.parse(await demo.text())
      //let text = demodata[iri][n]
      //let text = mockdata["http://purl.bdrc.io/graph/Chunks?I_LIM=10&R_RES="+iri+"&I_SEQ="+n]
      console.log("demo",text,iri,n,mockdata)

      let chunks = text["@graph"].filter(e => e.chunkContents)
      chunks = _.orderBy(chunks,["seqNum"],["ASC"])
      store.dispatch(data.gotChunks(iri,chunks))

   }
   catch(e) {
     //console.error('getChunks error: %o', e,iri,n);
     store.dispatch(data.noChunk())
   }
}

async function addService(iri:URL,url:URL) {
   //console.log("aS",url)

   const service: CollectionService = new CollectionService(url);

   console.log("service",service.constructor.name)

   const collections: Array<CollectionInfo> = await service.getAnnotationCollectionsServices(iri);

   store.dispatch(data.addedService(iri,service,collections))

}

async function syncService(service:URL,range:NumericRange)
{
   //console.log("syS",service,range)

   const data:Response = await fetch(service+"?range="+range.start+"-"+range.end)
   const page:Object = await data.json()

   store.dispatch(anno.receivePage(service,range,page))
}

// --------------------------------------------------------

export function* watchInitiateApp() {
   yield takeLatest(
      INITIATE_APP,
      (action) => initiateApp(action.payload)
   );
}

export function* watchGetChunks() {
   yield takeLatest(
      data.TYPES.getChunks,
      (action) => getChunks(action.payload,action.meta.next)
   );
}

export function* watchAddService() {
   yield takeLatest(
      anno.ADD_SERVICE,
      (action) => addService(action.resourceUrl,action.serviceUrl)
   );
}

export function* watchSyncService() {
   yield takeLatest(
      anno.SYNC_SERVICE,
      (action) => syncService(action.serviceUrl,action.range)
   );
}


/** Root **/

export default function* rootSaga() {
   yield all([
      watchGetChunks(),
      watchAddService(),
      watchSyncService(),
      watchInitiateApp()
   ])
}
