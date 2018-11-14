// @flow
import { takeLatest, all } from 'redux-saga/effects';
import {store} from '../../index';
import { INITIATE_APP } from '../actions';
import * as data from '../data/actions';
//import * as uiActions from '../ui/actions';
import _ from 'lodash' ;
import mockdata from '../../lib/mockdata';

function initiateApp(iri:string) {
   try {
      store.dispatch(data.getChunks(iri,1))
   }
   catch(e) {
     console.error('initiateApp error: %o', e);
   }
}

export function* watchInitiateApp() {
   yield takeLatest(
      INITIATE_APP,
      (action) => initiateApp(action.payload)
   );
}

async function getChunks(iri:string,n:number) {

   try {

      //let demo = await fetch("http://purl.bdrc.io/graph/Chunks?I_LIM=10&R_RES="+iri+"&I_SEQ="+n,{ method: "GET" })
      //let text = JSON.parse(await demo.text())

      //let text = demodata[iri][n]

      let text = mockdata["http://purl.bdrc.io/graph/Chunks?I_LIM=10&R_RES="+iri+"&I_SEQ="+n]

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

export function* watchGetChunks() {
   yield takeLatest(
      data.TYPES.getChunks,
      (action) => getChunks(action.payload,action.meta)
   );
}


/** Root **/

export default function* rootSaga() {
   yield all([
      watchGetChunks(),
      watchInitiateApp()
   ])
}
