'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../src/AnnotatedEtext.css');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _rangy = require('rangy');

var _rangy2 = _interopRequireDefault(_rangy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AnnotatedEtext = function (_Component) {
   _inherits(AnnotatedEtext, _Component);

   function AnnotatedEtext(props) {
      _classCallCheck(this, AnnotatedEtext);

      var _this = _possibleConstructorReturn(this, (AnnotatedEtext.__proto__ || Object.getPrototypeOf(AnnotatedEtext)).call(this, props));

      _this.state = { annotations: [] };
      return _this;
   }
   /*
   componentWillMount()
   {
   }
    componentDidMount()
   {
   }
    componentWillUpdate(nextProps, nextState)
   {
   }
    componentDidUpdate()
   {
   }
    shouldComponentUpdate(nextProps, nextState)
   {
   }
   */

   _createClass(AnnotatedEtext, [{
      key: 'onMouseUp',
      value: function onMouseUp(e) {
         var selec = _rangy2.default.getSelection();

         var fromChunk = selec.anchorNode.parentNode.dataset;
         if (!fromChunk.seq) fromChunk = _extends({}, selec.anchorNode.firstChild.parentNode.dataset, { noFrom: true });
         fromChunk = _extends({}, fromChunk, { offset: selec.anchorOffset });
         var toChunk = selec.focusNode.parentNode.dataset;
         if (!toChunk.seq) toChunk = _extends({}, selec.focusNode.firstChild.parentNode.dataset, { noTo: true });
         toChunk = _extends({}, toChunk, { offset: selec.focusOffset });

         var startChar = Number(fromChunk.start) + fromChunk.offset;
         var endChar = Number(toChunk.start) + toChunk.offset;
         if (startChar > endChar) {
            var val = endChar;
            endChar = startChar;
            startChar = val;
            // fixes issue with start/end when selection from/to is between two rows
            if (fromChunk.noFrom || toChunk.noTo) endChar--;
         }

         this.setState(_extends({}, this.state, { annotations: [].concat(_toConsumableArray(this.state.annotations), [{ startChar: startChar, endChar: endChar }]) }));

         console.log("selec ", startChar, endChar, fromChunk, toChunk, selec);
      }
   }, {
      key: 'render',
      value: function render() {

         console.log("render", this.props, this.state);

         var ret = _react2.default.createElement(
            'div',
            { id: 'annotatedEtext', onMouseUp: this.onMouseUp.bind(this) },
            this.props.chunks && this.props.chunks.map(function (c, i) {
               return _react2.default.createElement(
                  'div',
                  { key: i, 'data-seq': c.seq, 'data-start': c.start, 'data-end': c.end },
                  c.value
               );
            })
         );
         return ret;
      }
   }]);

   return AnnotatedEtext;
}(_react.Component);

exports.default = AnnotatedEtext;