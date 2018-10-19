'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _enzyme = require('enzyme');

var _enzyme2 = _interopRequireDefault(_enzyme);

var _AnnotatedEtext = require('./AnnotatedEtext');

var _AnnotatedEtext2 = _interopRequireDefault(_AnnotatedEtext);

var _AnnotatedEtextContainer = require('./AnnotatedEtextContainer');

var _AnnotatedEtextContainer2 = _interopRequireDefault(_AnnotatedEtextContainer);

var _reduxTestUtils = require('redux-test-utils');

require('babel-polyfill');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_enzyme2.default.configure({ adapter: new _enzymeAdapterReact2.default() });

var shallowWithStore = function shallowWithStore(component, store) {
   var context = {
      store: store
   };
   return (0, _enzyme.shallow)(component, { context: context });
};

describe('AnnotatedEtext tests', function () {
   it('creates default empty AnnotatedEtext', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var testState, store, component;
      return regeneratorRuntime.wrap(function _callee$(_context) {
         while (1) {
            switch (_context.prev = _context.next) {
               case 0:
                  testState = {
                     test: {}
                  };
                  store = (0, _reduxTestUtils.createMockStore)(testState);
                  component = shallowWithStore(_react2.default.createElement(_AnnotatedEtextContainer2.default, null), store);

                  expect(typeof component === 'undefined' ? 'undefined' : _typeof(component)).toBe('object');
                  console.log(component.debug());

               case 5:
               case 'end':
                  return _context.stop();
            }
         }
      }, _callee, undefined);
   })));
});