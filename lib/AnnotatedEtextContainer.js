"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _AnnotatedEtext = _interopRequireDefault(require("./AnnotatedEtext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var props = _objectSpread({}, ownProps);

  var services = state.data.services;
  var showCollections = state.data.showCollections;
  props = _objectSpread({}, props, {
    services: services,
    showCollections: showCollections
  });
  return props;
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

var AnnotatedEtextContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_AnnotatedEtext.default);
var _default = AnnotatedEtextContainer;
exports.default = _default;