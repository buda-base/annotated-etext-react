// @flow

import type {CollectionInfo, URL, NumericRange, AnnotationPage} from '../AnnotationTypes';

export const ADD_SERVICE = 'ADD_SERVICE'
export const TOGGLE_SERVICE = 'TOGGLE_SERVICE'
export const ADD_COLLECTION = 'ADD_COLLECTION'
export const TOGGLE_COLLECTION = 'TOGGLE_COLLECTION'
export const RECEIVE_PAGE = 'RECEIVE_PAGE'
export const SELECT_RESOURCE = 'SELECT_RESOURCE'
export const SYNC_SERVICE = 'SYNC_SERVICE'

export type ServiceAction =
  | { type: 'ADD_SERVICE', +serviceUrl: URL }
  | { type: 'SYNC_SERVICE', +serviceUrl: URL, +range?: NumericRange }
  | { type: 'TOGGLE_SERVICE', +serviceUrl: URL }
  | { type: 'SELECT_RESOURCE', +resourceUrl: URL };

export type CollectionAction =
  | { type: 'ADD_COLLECTION', +collectionUrl: URL }
  | { type: 'TOGGLE_COLLECTION', +collectionUrl: URL }
  | { type: 'RECEIVE_PAGE', +collectionUrl: URL, +range?: NumericRange, +page: AnnotationPage };

export const addService = (resourceUrl:URL,serviceUrl: URL): ServiceAction => {
  return {
    type: ADD_SERVICE,
    resourceUrl: resourceUrl,
    serviceUrl: serviceUrl
  };
};

export const syncService = (serviceUrl: URL,range:NumericRange): ServiceAction => {
  return {
    type: SYNC_SERVICE,
    serviceUrl, // means " 'serviceUrl' : serviceUrl "
    range
  };
};

export const toggleService = (serviceUrl: URL): ServiceAction => {
  return {
    type: TOGGLE_SERVICE,
    serviceUrl: serviceUrl
  };
};

export const selectResource = (resourceUrl: URL): ServiceAction => {
  return {
    type: SELECT_RESOURCE,
    resourceUrl: resourceUrl
  };
};

export const addCollection = (collectionUrl: URL): CollectionAction => {
  return {
    type: ADD_COLLECTION,
    collectionUrl: collectionUrl
  };
};


export const toggleCollection = (collectionUrl: URL): CollectionAction => {
  return {
    type: TOGGLE_COLLECTION,
    collectionUrl: collectionUrl
  };
};

export const receivePage = (collectionUrl: URL, range: NumericRange, page: AnnotationPage): CollectionAction => {
  return {
    type: RECEIVE_PAGE,
    collectionUrl: collectionUrl,
    range: range,
    page: page
  };
};
