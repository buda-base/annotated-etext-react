//@flow
import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme,{ shallow,mount } from 'enzyme';
import AnnotatedEtext from './AnnotatedEtext';
import AnnotatedEtextContainer from './AnnotatedEtextContainer';
import { createMockStore } from 'redux-test-utils';
import Adapter from 'enzyme-adapter-react-16'
import CollectionService from './CollectionService';
import type {CollectionInfo, URL} from './AnnotationTypes';

import {nock_data} from './mockdata';

Enzyme.configure({ adapter: new Adapter() })

const shallowWithStore = (component, store) => {
  const context = {
    store,
  };
  return shallow(component, { context });
};

describe('AnnotatedEtext tests', () => {

   it('creates default empty AnnotatedEtext', async() => {
      const testState = {
         test: {}
      };
      const store = createMockStore(testState)
      const component = shallowWithStore(<AnnotatedEtextContainer />, store);
      expect(typeof component).toBe('object')
      console.log(component.debug())
   });

   it('testing etext mocking', async () => {

      nock_data("http://purl.bdrc.io", "/graph/Chunks", {I_LIM: 10, R_RES: "bdr:UTDEMO_01", I_SEQ: 1 })

      const data:Response = await fetch("http://purl.bdrc.io/graph/Chunks?I_LIM=10&R_RES=bdr:UTDEMO_01&I_SEQ=1")
      const chunks:Object = await data.json()

      console.log(JSON.stringify(chunks,null,3))
   })


});
