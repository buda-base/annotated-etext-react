"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("../src/AnnotatedEtext.css");

var _reactDom = _interopRequireDefault(require("react-dom"));

var _rangy = _interopRequireDefault(require("rangy"));

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
    key: "getSelectedNode",
    value: function getSelectedNode(node) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      while (node && (!node.dataset || !node.dataset.seq)) {
        node = node.parentNode;
        console.log("node", node, node.dataset, !node.dataset, !node.dataset.seq);
      }

      var data;
      if (node) data = _objectSpread({}, Object.keys(node.dataset).reduce(function (acc, e) {
        return _objectSpread({}, acc, _defineProperty({}, e, Number(node.dataset[e])));
      }, {}), {
        offset: offset
      });
      return data;
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp(e) {
      if (this.props.dontSelect) return;

      try {
        var selec = _rangy.default.getSelection();

        console.log("selec", selec, e);
        var fromChunk = this.getSelectedNode(selec.anchorNode, selec.anchorOffset);
        var toChunk = this.getSelectedNode(selec.focusNode, selec.focusOffset);

        if (fromChunk && toChunk) {
          var startChar = fromChunk.offset + fromChunk.start;
          var endChar = toChunk.offset + toChunk.start;

          if (startChar > endChar) {
            var val = endChar;
            endChar = startChar;
            startChar = val;
          }

          if (!isNaN(startChar) && !isNaN(endChar) && startChar !== endChar) this.setState(_objectSpread({}, this.state, {
            annotations: _toConsumableArray(this.state.annotations).concat([{
              startChar: startChar,
              endChar: endChar
            }])
          }));
          console.log("selec ", startChar, endChar, fromChunk, toChunk, selec, e);
        } else {
          console.log("no chunk selec", fromChunk, toChunk);
        }

        selec.collapseToStart();
      } catch (e) {
        console.error("selec error", e);
      }
    }
  }, {
    key: "render",
    value: function render() {
      console.log("AeT", this.props, this.state);

      var ret = _react.default.createElement("div", {
        id: "annotatedEtext",
        onMouseUp: this.onMouseUp.bind(this)
      }, this.state.chunks && this.state.chunks.map(function (c, i) {
        return _react.default.createElement("div", {
          key: i
        }, _react.default.createElement("div", {
          className: "text",
          "data-seq": c.seq,
          "data-start": c.start,
          "data-end": c.end
        }, !c.pieces && c.value, c.pieces && c.pieces.map(function (a, j) {
          return _react.default.createElement("span", _extends({}, a.nb > 0 ? {
            onClick: function onClick(e) {
              alert(a.nb + " annotation" + (a.nb > 1 ? "s" : "") + " here");
            }
          } : {}, {
            className: a.nb > 0 ? "annotated" : "",
            key: j,
            "data-seq": c.seq,
            "data-start": a.start,
            "data-end": a.end,
            style: {
              backgroundColor: "rgba(128,255,0," + 0.35 * a.nb + ")"
            }
          }), c.value.substring(a.start - c.start, a.end - c.start));
        })));
      }));

      return ret;
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      console.log("getDSfP", props, state);
      var annoChunks = [];

      var annoInfo = _toConsumableArray(state.annotations);

      if (props.services) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = props.services[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var service = _step.value;

            var _arr = Object.keys(service.collectionsById);

            for (var _i = 0; _i < _arr.length; _i++) {
              var id = _arr[_i];
              var pages = service.collectionsById[id].pages;

              var _arr2 = Object.values(pages);

              for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
                var p = _arr2[_i2];
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                  for (var _iterator2 = p.items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var anno = _step2.value;
                    console.log("anno", anno);
                    if (anno.target && anno.target.type === "WorkLocation") annoInfo.push({
                      startChar: anno.target.workLocationChar,
                      endChar: anno.target.workLocationEndChar
                    });
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
              }
            }
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
      }

      console.log("annoInfo", annoInfo);

      if (props.chunks && (!state.chunks || annoInfo.length !== state.numAnno || props.chunks.length !== state.chunks.length)) {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          var _loop = function _loop() {
            var elem = _step3.value;

            var chunk = _objectSpread({}, elem);

            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              for (var _iterator4 = annoInfo[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var _anno = _step4.value;

                if (_anno.startChar >= chunk.start && _anno.startChar <= chunk.end || _anno.endChar >= chunk.start && _anno.endChar <= chunk.end || chunk.start >= _anno.startChar && chunk.end <= _anno.endChar) {
                  if (!chunk.annoList) chunk["annoList"] = [];
                  chunk.annoList.push(_anno);
                }
              }
            } catch (err) {
              _didIteratorError4 = true;
              _iteratorError4 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                  _iterator4.return();
                }
              } finally {
                if (_didIteratorError4) {
                  throw _iteratorError4;
                }
              }
            }

            if (chunk.annoList) {
              var tmp = chunk.annoList.reduce(function (acc, e, i) {
                var a = e.startChar;
                var z = e.endChar;
                if (a < chunk.start) a = chunk.start;
                if (z > chunk.end) z = chunk.end;
                return _toConsumableArray(acc).concat([{
                  i: i,
                  char: a,
                  start: true
                }, {
                  i: i,
                  char: z,
                  start: false
                }]);
              }, []);
              tmp = _lodash.default.orderBy(tmp, ['char'], ['ASC']);
              console.log("tmp", tmp);
              chunk.pieces = [];
              var nb = 0; // for superposition of annotations

              var idx = chunk.start; // cursor into chunk

              var nxt = idx; // next start/end of annotation

              var _iteratorNormalCompletion5 = true;
              var _didIteratorError5 = false;
              var _iteratorError5 = undefined;

              try {
                for (var _iterator5 = tmp[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                  var a = _step5.value;
                  nxt = a.char;
                  if (nxt >= chunk.end) nxt++;
                  if (idx != nxt) chunk.pieces.push({
                    nb: nb,
                    start: idx,
                    end: nxt
                  });
                  if (a.start) nb++;else nb--;
                  idx = nxt;
                }
              } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                    _iterator5.return();
                  }
                } finally {
                  if (_didIteratorError5) {
                    throw _iteratorError5;
                  }
                }
              }

              if (nxt < chunk.end) chunk.pieces.push({
                nb: nb,
                start: nxt,
                end: chunk.end + 1
              }); //console.log(JSON.stringify(chunk.pieces,null,4))

              chunk.annoList = _lodash.default.orderBy(chunk.annoList, ['char'], ['ASC']); //console.log(chunk.annoList)
            }

            annoChunks.push(chunk);
          };

          for (var _iterator3 = props.chunks[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            _loop();
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
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