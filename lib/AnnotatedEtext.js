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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      key: 'getSelectedNode',
      value: function getSelectedNode(node) {
         var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

         node = node.parentNode;
         //while(node && node.dataset && node.dataset.seq) { node = node.parentNode ; }
         var data = _extends({}, Object.keys(node.dataset).reduce(function (acc, e) {
            return _extends({}, acc, _defineProperty({}, e, Number(node.dataset[e])));
         }, {}), {
            offset: offset
         });
         return data;
      }
   }, {
      key: 'onMouseUp',
      value: function onMouseUp(e) {
         var selec = _rangy2.default.getSelection();

         console.log("selec", selec, e);

         var fromChunk = this.getSelectedNode(selec.anchorNode, selec.anchorOffset);
         var toChunk = this.getSelectedNode(selec.focusNode, selec.focusOffset);
         var startChar = fromChunk.offset + fromChunk.start;
         var endChar = toChunk.offset + toChunk.start;
         if (startChar > endChar) {
            var val = endChar;
            endChar = startChar;
            startChar = val;
            // when selection starts after end of row backwards
            //if(toChunk.offset + toChunk.start == toChunk.end) startChar ++
         }
         // when selection starts after end of row
         //else if(fromChunk.offset + fromChunk.start == fromChunk.end) startChar ++
         // when selection ends between two rows
         //if(toChunk.noTo) endChar -- ;

         if (!isNaN(startChar) && !isNaN(endChar) && startChar !== endChar) this.setState(_extends({}, this.state, { annotations: [].concat(_toConsumableArray(this.state.annotations), [{ startChar: startChar, endChar: endChar }]) }));

         console.log("selec ", startChar, endChar, fromChunk, toChunk, selec, e);

         selec.collapseToStart();
      }
   }, {
      key: 'render',
      value: function render() {

         console.log("render", this.props, this.state);

         var ret = _react2.default.createElement(
            'div',
            { id: 'annotatedEtext', onMouseUp: this.onMouseUp.bind(this) },
            this.state.chunks && this.state.chunks.map(function (c, i) {
               return _react2.default.createElement(
                  'div',
                  { key: i },
                  _react2.default.createElement(
                     'div',
                     { className: 'text', 'data-seq': c.seq, 'data-start': c.start, 'data-end': c.end },
                     !c.pieces && c.value,
                     c.pieces && c.pieces.map(function (a, j) {
                        return _react2.default.createElement(
                           'span',
                           _extends({}, a.nb > 0 ? { onClick: function onClick(e) {
                                 alert(a.nb + " annotation" + (a.nb > 1 ? "s" : "") + " here");
                              } } : {}, { className: a.nb > 0 ? "annotated" : "", key: j, 'data-seq': c.seq, 'data-start': a.start, 'data-end': a.end,
                              style: { backgroundColor: "rgba(128,255,0," + 0.35 * a.nb + ")" } }),
                           c.value.substring(a.start - c.start, a.end - c.start)
                        );
                     })
                  )
               );
            })
         );
         return ret;
      }
   }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(props, state) {
         console.log("getDSfP", props, state);
         var annoChunks = [];
         if (props.chunks && (!state.chunks || state.annotations.length !== state.numAnno || props.chunks.length !== state.chunks.length)) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
               var _loop = function _loop() {
                  var elem = _step.value;

                  var chunk = _extends({}, elem);
                  var _iteratorNormalCompletion2 = true;
                  var _didIteratorError2 = false;
                  var _iteratorError2 = undefined;

                  try {
                     for (var _iterator2 = state.annotations[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var anno = _step2.value;

                        if (anno.startChar >= chunk.start && anno.startChar <= chunk.end || anno.endChar >= chunk.start && anno.endChar <= chunk.end || chunk.start >= anno.startChar && chunk.end <= anno.endChar) {
                           if (!chunk.annoList) chunk["annoList"] = [];
                           chunk.annoList.push(anno);
                        }
                     }
                  } catch (err) {
                     _didIteratorError2 = true;
                     _iteratorError2 = err;
                  } finally {
                     try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                           _iterator2.return();
                        }
                     } finally {
                        if (_didIteratorError2) {
                           throw _iteratorError2;
                        }
                     }
                  }

                  if (chunk.annoList) {
                     var tmp = chunk.annoList.reduce(function (acc, e, i) {
                        var a = e.startChar;
                        var z = e.endChar;
                        if (a < chunk.start) a = chunk.start;
                        if (z > chunk.end) z = chunk.end;
                        return [].concat(_toConsumableArray(acc), [{ i: i, char: a, start: true }, { i: i, char: z, start: false }]);
                     }, []);
                     tmp = _lodash2.default.orderBy(tmp, ['char'], ['ASC']);
                     console.log(tmp);
                     chunk.pieces = [];
                     var nb = 0; // for superposition of annotations
                     var idx = chunk.start; // cursor into chunk
                     var nxt = idx; // next start/end of annotation
                     var _iteratorNormalCompletion3 = true;
                     var _didIteratorError3 = false;
                     var _iteratorError3 = undefined;

                     try {
                        for (var _iterator3 = tmp[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                           var a = _step3.value;

                           nxt = a.char;
                           if (idx != nxt) chunk.pieces.push({ nb: nb, start: idx, end: nxt });
                           if (a.start) nb++;else nb--;
                           idx = nxt;
                        }
                     } catch (err) {
                        _didIteratorError3 = true;
                        _iteratorError3 = err;
                     } finally {
                        try {
                           if (!_iteratorNormalCompletion3 && _iterator3.return) {
                              _iterator3.return();
                           }
                        } finally {
                           if (_didIteratorError3) {
                              throw _iteratorError3;
                           }
                        }
                     }

                     if (nxt < chunk.end) chunk.pieces.push({ nb: nb, start: nxt, end: chunk.end });
                     //console.log(JSON.stringify(chunk.pieces,null,4))
                     chunk.annoList = _lodash2.default.orderBy(chunk.annoList, ['char'], ['ASC']);
                     //console.log(chunk.annoList)
                  }

                  annoChunks.push(chunk);
               };

               for (var _iterator = props.chunks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  _loop();
               }
            } catch (err) {
               _didIteratorError = true;
               _iteratorError = err;
            } finally {
               try {
                  if (!_iteratorNormalCompletion && _iterator.return) {
                     _iterator.return();
                  }
               } finally {
                  if (_didIteratorError) {
                     throw _iteratorError;
                  }
               }
            }

            return _extends({}, state, { chunks: annoChunks, numAnno: state.annotations.length });
         } else return _extends({}, state);
      }
   }]);

   return AnnotatedEtext;
}(_react.Component);

exports.default = AnnotatedEtext;