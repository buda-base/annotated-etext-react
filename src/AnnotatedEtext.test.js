//@flow
import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme,{ shallow,mount } from 'enzyme';
import AnnotatedEtext from './AnnotatedEtext';
import AnnotatedEtextContainer from './AnnotatedEtextContainer';
import { createMockStore } from 'redux-test-utils';
import Adapter from 'enzyme-adapter-react-16'

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
});
