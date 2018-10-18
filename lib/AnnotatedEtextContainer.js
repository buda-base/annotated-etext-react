'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _AnnotatedEtext = require('./AnnotatedEtext');

var _AnnotatedEtext2 = _interopRequireDefault(_AnnotatedEtext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
    //let props = { ...ownProps }
    //return props ;
};


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {};
};

var AnnotatedEtextContainer = (0, _reactRedux.connect)()(_AnnotatedEtext2.default);

exports.default = AnnotatedEtextContainer;