"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.receivePage = exports.toggleCollection = exports.addCollection = exports.selectResource = exports.toggleService = exports.syncService = exports.addService = exports.SYNC_SERVICE = exports.SELECT_RESOURCE = exports.RECEIVE_PAGE = exports.TOGGLE_COLLECTION = exports.ADD_COLLECTION = exports.TOGGLE_SERVICE = exports.ADD_SERVICE = void 0;
var ADD_SERVICE = 'ADD_SERVICE';
exports.ADD_SERVICE = ADD_SERVICE;
var TOGGLE_SERVICE = 'TOGGLE_SERVICE';
exports.TOGGLE_SERVICE = TOGGLE_SERVICE;
var ADD_COLLECTION = 'ADD_COLLECTION';
exports.ADD_COLLECTION = ADD_COLLECTION;
var TOGGLE_COLLECTION = 'TOGGLE_COLLECTION';
exports.TOGGLE_COLLECTION = TOGGLE_COLLECTION;
var RECEIVE_PAGE = 'RECEIVE_PAGE';
exports.RECEIVE_PAGE = RECEIVE_PAGE;
var SELECT_RESOURCE = 'SELECT_RESOURCE';
exports.SELECT_RESOURCE = SELECT_RESOURCE;
var SYNC_SERVICE = 'SYNC_SERVICE';
exports.SYNC_SERVICE = SYNC_SERVICE;

var addService = function addService(resourceUrl, serviceUrl) {
  return {
    type: ADD_SERVICE,
    resourceUrl: resourceUrl,
    serviceUrl: serviceUrl
  };
};

exports.addService = addService;

var syncService = function syncService(serviceUrl, range) {
  return {
    type: SYNC_SERVICE,
    serviceUrl: serviceUrl,
    // means " 'serviceUrl' : serviceUrl "
    range: range
  };
};

exports.syncService = syncService;

var toggleService = function toggleService(serviceUrl) {
  return {
    type: TOGGLE_SERVICE,
    serviceUrl: serviceUrl
  };
};

exports.toggleService = toggleService;

var selectResource = function selectResource(resourceUrl) {
  return {
    type: SELECT_RESOURCE,
    resourceUrl: resourceUrl
  };
};

exports.selectResource = selectResource;

var addCollection = function addCollection(collectionUrl) {
  return {
    type: ADD_COLLECTION,
    collectionUrl: collectionUrl
  };
};

exports.addCollection = addCollection;

var toggleCollection = function toggleCollection(collectionUrl) {
  return {
    type: TOGGLE_COLLECTION,
    collectionUrl: collectionUrl
  };
};

exports.toggleCollection = toggleCollection;

var receivePage = function receivePage(collectionUrl, range, page) {
  return {
    type: RECEIVE_PAGE,
    collectionUrl: collectionUrl,
    range: range,
    page: page
  };
};

exports.receivePage = receivePage;