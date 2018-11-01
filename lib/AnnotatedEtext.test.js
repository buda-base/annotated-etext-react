"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _enzyme = _interopRequireWildcard(require("enzyme"));

var _AnnotatedEtext = _interopRequireDefault(require("./AnnotatedEtext"));

var _AnnotatedEtextContainer = _interopRequireDefault(require("./AnnotatedEtextContainer"));

var _reduxTestUtils = require("redux-test-utils");

require("babel-polyfill");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

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
            expect(_typeof(component)).toBe('object');
            console.log(component.debug());

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  })));
});