import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './containers/AppContainer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './state/reducers';
import {initiateApp} from './state/actions' ;
import createSagaMiddleware from 'redux-saga';
import rootSaga from './state/sagas'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {mock_data} from './lib/mockdata';

//mock_data("http://purl.bdrc.io", "/graph/Chunks", {I_LIM: 10, R_RES: "bdr:UTDEMO_01", I_SEQ: 1 })
//mock_data("http://purl.bdrc.io", "/graph/Chunks", {I_LIM: 10, R_RES: "bdr:UTDEMO_01", I_SEQ: 11 })
mock_data("http://purl.bdrc.io", "/graph/Chunks", {I_LIM: 5, R_RES: "bdr:UTDEMO_01", I_SEQ: 1 })
mock_data("http://purl.bdrc.io", "/graph/Chunks", {I_LIM: 5, R_RES: "bdr:UTDEMO_01", I_SEQ: 6 })
mock_data("http://purl.bdrc.io", "/graph/Chunks", {I_LIM: 5, R_RES: "bdr:UTDEMO_01", I_SEQ: 11 })
mock_data("http://purl.bdrc.io", "/graph/Chunks", {I_LIM: 5, R_RES: "bdr:UTDEMO_01", I_SEQ: 16 })
mock_data("http://api.bdrc.io", "/annotations/collectionSearch", {res: "bdr:UTDEMO_01"});
//mock_data("http://api.bdrc.io", "/annotations/search/bdac:ANCUTDEMO_NER001/", {range: "1-1000"});
mock_data("http://purl.bdrc.io", "/anncollection/ANCUTDEMO_NER001/pageForRange", {range: "1-551"});
mock_data("http://purl.bdrc.io", "/anncollection/ANCUTDEMO_NER001/pageForRange", {range: "552-1104"});
mock_data("http://purl.bdrc.io", "/anncollection/ANCUTDEMO_NER001/pageForRange", {range: "1-1104"});
mock_data("http://purl.bdrc.io", "/anncollection/ANCUTDEMO_NER001/pageForRange", {range: "1-1560"});
mock_data("http://purl.bdrc.io", "/anncollection/ANCUTDEMO_NER001/pageForRange", {range: "1-1847"});
//
mock_data("http://purl.bdrc.io", "/anncollection/ANCUTDEMO_HIG001/pageForRange", {range: "1-551"});
mock_data("http://purl.bdrc.io", "/anncollection/ANCUTDEMO_HIG001/pageForRange", {range: "1-1104"});
mock_data("http://purl.bdrc.io", "/anncollection/ANCUTDEMO_HIG001/pageForRange", {range: "1-1560"});
mock_data("http://purl.bdrc.io", "/anncollection/ANCUTDEMO_HIG001/pageForRange", {range: "1-1847"});
//
mock_data("http://purl.bdrc.io", "/anncollection/ANCUTDEMO_V01_001/pageForRange", {range: "1-551"});
mock_data("http://purl.bdrc.io", "/anncollection/ANCUTDEMO_V01_001/pageForRange", {range: "552-1104"});
mock_data("http://purl.bdrc.io", "/anncollection/ANCUTDEMO_V01_001/pageForRange", {range: "1-1104"});
mock_data("http://purl.bdrc.io", "/anncollection/ANCUTDEMO_V01_001/pageForRange", {range: "1-1560"});
mock_data("http://purl.bdrc.io", "/anncollection/ANCUTDEMO_V01_001/pageForRange", {range: "1-1847"});

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

const sagaMiddleware = createSagaMiddleware();
export let store = {} ;
if (process.env.NODE_ENV !== 'production') {
   store = createStore(
      rootReducer,
      composeWithDevTools(
         applyMiddleware(thunk,sagaMiddleware,logger)
      )
    );
} else {
    store = createStore(
        rootReducer,
        applyMiddleware(thunk,sagaMiddleware)
    );
}

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>, document.getElementById('root'));

store.dispatch(initiateApp("bdr:UTDEMO_01"))
