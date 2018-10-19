// @flow
import { call, put, takeLatest, select, all } from 'redux-saga/effects';
import {store} from '../../index';
import { INITIATE_APP } from '../actions';
import * as dataActions from '../data/actions';
import * as uiActions from '../ui/actions';
import _ from 'lodash' ;


async function initiateApp() {
   try {
      let demo = await window.fetch("http://purl.bdrc.io/graph/Chunks?I_LIM=10&R_RES=bdr%3AUTDEMO_01&I_SEQ=1",
      {method:"GET"})
      let text = JSON.parse(await demo.text())
      console.log("demo",text)

      let chunks = text["@graph"].filter(e => e.chunkContents)
      chunks = _.orderBy(chunks,["seqNum"],["ASC"])
      store.dispatch(dataActions.gotChunks(chunks))

   }
   catch(e) {
     console.error('initiateApp error: %o', e);
   }
}

function* watchInitiateApp() {
   yield takeLatest(
      INITIATE_APP,
      (action) => initiateApp()
   );
}

/** Root **/

export default function* rootSaga() {
   yield all([
      watchInitiateApp()
   ])
}
