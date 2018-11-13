"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _enzyme = _interopRequireWildcard(require("enzyme"));

var _AnnotatedEtext = _interopRequireDefault(require("./AnnotatedEtext"));

var _AnnotatedEtextContainer = _interopRequireDefault(require("./AnnotatedEtextContainer"));

var _reduxTestUtils = require("redux-test-utils");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _CollectionService = _interopRequireDefault(require("./CollectionService"));

var _mockdata = require("./mockdata");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_enzyme.default.configure({
  adapter: new _enzymeAdapterReact.default()
});

var shallowWithStore = function shallowWithStore(component, store) {
  var context = {
    store: store
  };
  return (0, _enzyme.shallow)(component, {
    context: context
  });
};

describe('AnnotatedEtext tests', function () {
  it('creates default empty AnnotatedEtext',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var testState, store, component;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            testState = {
              test: {}
            };
            store = (0, _reduxTestUtils.createMockStore)(testState);
            component = shallowWithStore(_react.default.createElement(_AnnotatedEtextContainer.default, null), store);
            expect(_typeof(component)).toBe('object'); //console.log(component.debug())

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  })));
  it('testing etext mocking',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var data, chunks;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            (0, _mockdata.nock_data)("http://purl.bdrc.io", "/graph/Chunks", {
              I_LIM: 10,
              R_RES: "bdr:UTDEMO_01",
              I_SEQ: 1
            });
            _context2.next = 3;
            return fetch("http://purl.bdrc.io/graph/Chunks?I_LIM=10&R_RES=bdr:UTDEMO_01&I_SEQ=1");

          case 3:
            data = _context2.sent;
            _context2.next = 6;
            return data.json();

          case 6:
            chunks = _context2.sent;
            expect(chunks["@graph"].filter(function (e) {
              return e["seqNum"];
            }).length).toEqual(10);
            expect(chunks["@graph"].filter(function (e) {
              return e["@id"] === "bdr:UTDEMO_01";
            })[0]["eTextHasChunk"].length).toEqual(10); //console.log(JSON.stringify(chunks,null,3))

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  })));
});