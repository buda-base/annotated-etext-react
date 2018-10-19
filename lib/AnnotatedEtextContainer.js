'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _AnnotatedEtext = require('./AnnotatedEtext');

var _AnnotatedEtext2 = _interopRequireDefault(_AnnotatedEtext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
    var props = _extends({}, ownProps);
    return props;
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {};
};

var AnnotatedEtextContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_AnnotatedEtext2.default);

exports.default = AnnotatedEtextContainer;