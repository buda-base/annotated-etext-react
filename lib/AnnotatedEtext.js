"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("../src/AnnotatedEtext.css");

var _reactDom = _interopRequireDefault(require("react-dom"));

var _rangy = _interopRequireDefault(require("rangy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AnnotatedEtext =
/*#__PURE__*/
function (_Component) {
  _inherits(AnnotatedEtext, _Component);

  function AnnotatedEtext(props) {
    var _this;

    _classCallCheck(this, AnnotatedEtext);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AnnotatedEtext).call(this, props));
    _this.state = {
      annotations: []
    };
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
    key: "onMouseUp",
    value: function onMouseUp(e) {
      var selec = _rangy.default.getSelection();

      var fromChunk = selec.anchorNode.parentNode.dataset;
      if (!fromChunk.seq) fromChunk = _objectSpread({}, selec.anchorNode.firstChild.parentNode.dataset, {
        noFrom: true
      });
      fromChunk = _objectSpread({}, fromChunk, {
        offset: selec.anchorOffset
      });
      var toChunk = selec.focusNode.parentNode.dataset;
      if (!toChunk.seq) toChunk = _objectSpread({}, selec.focusNode.firstChild.parentNode.dataset, {
        noTo: true
      });
      toChunk = _objectSpread({}, toChunk, {
        offset: selec.focusOffset
      });
      var startChar = Number(fromChunk.start) + fromChunk.offset;
      var endChar = Number(toChunk.start) + toChunk.offset;

      if (startChar > endChar) {
        var val = endChar;
        endChar = startChar;
        startChar = val; // when selection starts after end of row backwards

        if (toChunk.offset + toChunk.start == toChunk.end) startChar++;
      } // when selection starts after end of row
      else if (fromChunk.offset + fromChunk.start == fromChunk.end) startChar++; // when selection ends between two rows


      if (toChunk.noTo) endChar--;
      if (startChar !== endChar) this.setState(_objectSpread({}, this.state, {
        annotations: _toConsumableArray(this.state.annotations).concat([{
          startChar: startChar,
          endChar: endChar
        }])
      }));
      console.log("selec ", startChar, endChar, fromChunk, toChunk, selec);
      selec.collapseToStart();
    }
  }, {
    key: "render",
    value: function render() {
      console.log("render", this.props, this.state);

      var ret = _react.default.createElement("div", {
        id: "annotatedEtext",
        onMouseUp: this.onMouseUp.bind(this)
      }, this.state.chunks && this.state.chunks.map(function (c, i) {
        return _react.default.createElement("div", null, c.annoList && c.annoList.map(function (a) {
          return _react.default.createElement("div", {
            className: "anno"
          }, _react.default.createElement("span", null, c.value.substring(0, a.startChar - c.start)), _react.default.createElement("span", {
            className: "color"
          }, c.value.substring(a.startChar - c.start, a.endChar - c.start)));
        }), _react.default.createElement("div", {
          className: "text",
          key: i,
          "data-seq": c.seq,
          "data-start": c.start,
          "data-end": c.end
        }, c.value));
      }));

      return ret;
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      console.log("getDSfP", props, state);
      var annoChunks = [];

      if (props.chunks && (!state.chunks || state.annotations.length !== state.numAnno || props.chunks.length !== state.chunks.length)) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = props.chunks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var elem = _step.value;

            var chunk = _objectSpread({}, elem);

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
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }

            annoChunks.push(chunk);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return _objectSpread({}, state, {
          chunks: annoChunks,
          numAnno: state.annotations.length
        });
      } else return _objectSpread({}, state);
    }
  }]);

  return AnnotatedEtext;
}(_react.Component);

exports.default = AnnotatedEtext;