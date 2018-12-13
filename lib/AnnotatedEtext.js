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

var _styles = require("@material-ui/core/styles");

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _Chat = _interopRequireDefault(require("@material-ui/icons/Chat"));

var _Reply = _interopRequireDefault(require("@material-ui/icons/Reply"));

var _Build = _interopRequireDefault(require("@material-ui/icons/Build"));

var _Announcement = _interopRequireDefault(require("@material-ui/icons/Announcement"));

var _QuestionAnswer = _interopRequireDefault(require("@material-ui/icons/QuestionAnswer"));

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _Delete = _interopRequireDefault(require("@material-ui/icons/Delete"));

var _AddLocation = _interopRequireDefault(require("@material-ui/icons/AddLocation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    lightTooltip: {
      background: "rgb(250,250,250)",
      color: theme.palette.text.primary,
      boxShadow: theme.shadows[1],
      fontSize: 14,
      padding: "0px" //paddingBottom:"44px",
      //minWidth:44*5+"px"

    }
  };
};

var AnnotatedEtext =
/*#__PURE__*/
function (_Component) {
  _inherits(AnnotatedEtext, _Component);

  function AnnotatedEtext(props) {
    var _this;

    _classCallCheck(this, AnnotatedEtext);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AnnotatedEtext).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_addingAnno", false);

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
      console.log("mUp", e, this._addingAnno);

      if (this._addingAnno) {
        this._addingAnno = false;
        return;
      }

      this._addingAnno = true;
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

          if (!isNaN(startChar) && !isNaN(endChar) && startChar !== endChar) {
            var id = Math.random().toString(36).substr(2, 9);
            this.setState(_objectSpread({}, this.state, {
              annoPanel: true,
              newAnno: "tmp:test" + id,
              annotations: _toConsumableArray(this.state.annotations).concat([{
                startChar: startChar,
                endChar: endChar,
                //motivation:"identifying",
                body: {
                  "rdfs:comment": {
                    "@language": "en",
                    "@value": "This is test annotation #" + id
                  },
                  id: "tmp:test" + id
                },
                id: "tmp:test" + id
              }])
            }));
          }

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
    key: "onAnnoClick",
    value: function onAnnoClick(e) {
      this.setState(_objectSpread({}, this.state, {
        annoPanel: true
      })); //alert(a.nb+" annotation"+(a.nb > 1?"s":"")+" here")}
    }
  }, {
    key: "prefLabel",
    value: function prefLabel(body) {
      var val;
      if (body["id"]) val = body["id"];

      if (body["skos:prefLabel"]) {
        if (Array.isArray(body["skos:prefLabel"])) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = body["skos:prefLabel"][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var l = _step.value;
              // take first as a starting point (cf library/getLangLabel code)
              val = l["@value"];
              if (!val) val = l["value"];
              break;
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
        } else {
          val = body["skos:prefLabel"]["@value"];
          if (!val) val = body["skos:prefLabel"]["value"];
        }
      }

      return val;
    }
  }, {
    key: "identifying",
    value: function identifying(body) {
      var val = _react.default.createElement("a", {
        href: "http://library.bdrc.io/show/" + body["id"],
        target: "_blank"
      }, this.prefLabel(body));

      return val;
    }
  }, {
    key: "questioning",
    value: function questioning(body) {
      var val;

      if (Array.isArray(body)) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = body[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var c = _step2.value;
            val = c["rdfs:comment"]["@value"];
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
      } else {
        val = body["rdfs:comment"]["@value"];
      }

      return val;
    }
  }, {
    key: "replying",
    value: function replying(body) {
      return this.questioning(body);
    }
  }, {
    key: "assessing",
    value: function assessing(body) {
      return this.questioning(body);
    }
  }, {
    key: "renderAnno",
    value: function renderAnno(annotations) {
      var inDiv = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      console.group("RENDER_ANNO");
      console.log("rendering", annotations, inDiv);

      var remaining = _toConsumableArray(Object.keys(annotations).map(function (k) {
        return {
          k: k,
          motivation: annotations[k].motivation
        };
      }));

      remaining = _lodash.default.orderBy(remaining, ["motivation"], ['ASC']).map(function (e) {
        return e.k;
      });
      var next;
      var nb = remaining.length;
      var renderedAnno = {};

      while (nb > 0) {
        next = _toConsumableArray(remaining);
        console.log("remaining", remaining, renderedAnno, annotations);
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = remaining[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var k = _step3.value;
            var anno = annotations[k];
            console.log("anno", k, anno); //,remaining,renderedAnno)

            var newAnno = [];
            if (!anno.target) newAnno.push(_react.default.createElement("h4", null, anno.text));
            newAnno.push(_react.default.createElement("span", {
              id: "anno-tooltip-span",
              className: anno.motivation
            }, anno.motivation === "identifying" && _react.default.createElement("span", null, _react.default.createElement("u", null, "identifying"), ": ", this.identifying(anno.body)), anno.motivation === "questioning" && _react.default.createElement("span", null, _react.default.createElement("u", null, "questioning"), ": ", this.questioning(anno.body)), anno.motivation === "replying" && _react.default.createElement("span", null, _react.default.createElement("u", null, "replying"), ":    ", this.replying(anno.body)), anno.motivation === "assessing" && _react.default.createElement("span", null, _react.default.createElement("u", null, "assessing"), ":    ", this.assessing(anno.body))));
            renderedAnno[k] = newAnno;

            if (!anno.target) {
              console.log("no target");
              next.splice(next.indexOf(k), 1);
              nb--;
            } else if (renderedAnno[anno.target]) {
              console.log("target rendered", anno.target);
              renderedAnno[anno.target].push(_react.default.createElement("div", {
                className: "sub-anno"
              }, newAnno));
              next.splice(next.indexOf(k), 1);
              nb--;
            } else {
              console.log("target unrendered", anno.target);
            }
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

        remaining = _toConsumableArray(next);
      } //console.log("remains",remaining,renderedAnno)


      var ret = [];
      var annoK = Object.keys(annotations).map(function (k) {
        return {
          anno: k,
          key: annotations[k].startChar
        };
      });
      annoK = _lodash.default.orderBy(annoK, ['key'], ['ASC']).map(function (e) {
        return e.anno;
      });
      console.log("annoK", annoK, renderedAnno);
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = annoK[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _k = _step4.value;

          if (!annotations[_k].target) {
            if (!inDiv) ret.push(renderedAnno[_k]);else ret.push(_react.default.createElement("div", null, renderedAnno[_k]));
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

      console.groupEnd();
      return ret;
    }
  }, {
    key: "trash",
    value: function trash(e, anno) {
      console.log("trash", anno);
      var trash = this.state.trash;
      if (!trash) trash = [];

      var _arr = Object.keys(anno);

      for (var _i = 0; _i < _arr.length; _i++) {
        var k = _arr[_i];
        if (trash.indexOf(k) === -1) trash.push(k);
      }

      this.setState(_objectSpread({}, this.state, {
        annoPanel: true,
        trash: trash
      }));
    }
  }, {
    key: "question",
    value: function question(e, a) {
      var anno = Object.keys(a.annotations).filter(function (k) {
        return !a.annotations[k].target;
      })[0];
      console.log("question", a, anno);
      var id = anno.replace(/^.*?([^:/]+)$/, "$1");
      var startChar = a.start;
      var endChar = a.end;
      var uniq = Math.random().toString(36).substr(2, 9);
      this.setState(_objectSpread({}, this.state, {
        annoPanel: true,
        annotations: _toConsumableArray(this.state.annotations).concat([{
          id: "tmp:question_" + uniq,
          startChar: startChar,
          endChar: endChar,
          motivation: "questioning",
          target: anno,
          body: {
            "rdfs:comment": {
              "@language": "en",
              "@value": "about annotation #" + id
            },
            id: "tmp:question_" + uniq
          }
        }])
      }));
    }
  }, {
    key: "reply",
    value: function reply(e, a) {
      var anno = Object.keys(a.annotations).filter(function (k) {
        return a.annotations[k].motivation === "questioning";
      })[0];
      console.log("reply", anno, a);
      var id = anno.replace(/^.*?([^:/]+)$/, "$1");
      var startChar = a.start;
      var endChar = a.end;
      var uniq = Math.random().toString(36).substr(2, 9);
      this.setState(_objectSpread({}, this.state, {
        annoPanel: true,
        annotations: _toConsumableArray(this.state.annotations).concat([{
          id: "tmp:reply_" + uniq,
          startChar: startChar,
          endChar: endChar,
          motivation: "replying",
          target: anno,
          body: {
            "rdfs:comment": {
              "@language": "en",
              "@value": "about question on annotation #" + id
            },
            id: "tmp:reply_" + uniq
          }
        }])
      }));
    }
  }, {
    key: "assert",
    value: function assert(e, a) {
      console.log("assert", a);
      var startChar = a.start;
      var endChar = a.end;
      var uniq = Math.random().toString(36).substr(2, 9);
      this.setState(_objectSpread({}, this.state, {
        annoPanel: true,
        annotations: _toConsumableArray(this.state.annotations).concat([{
          id: "tmp:assert_" + uniq,
          startChar: startChar,
          endChar: endChar,
          motivation: "assessing",
          body: {
            "rdfs:comment": {
              "@language": "en",
              "@value": "assertion #" + uniq
            },
            id: "tmp:assert_" + uniq
          }
        }])
      }));
    }
  }, {
    key: "identify",
    value: function identify(e, a) {
      console.log("identify", a);
      var startChar = a.start;
      var endChar = a.end;
      var uniq = Math.random().toString(36).substr(2, 9);
      this.setState(_objectSpread({}, this.state, {
        annoPanel: true,
        annotations: _toConsumableArray(this.state.annotations).concat([{
          id: "tmp:identify_" + uniq,
          startChar: startChar,
          endChar: endChar,
          motivation: "identifying",
          body: {
            "rdfs:comment": {
              "@language": "en",
              "@value": "identifying #" + uniq
            },
            id: "tmp:identify_" + uniq
          }
        }])
      }));
    }
  }, {
    key: "mayCancelAnno",
    value: function mayCancelAnno(e) {
      var _this2 = this;

      console.log("cancel?", this.state, this._addingAnno);

      if (this._addingAnno) {
        if (this.state.annotations && this.state.newAnno) {
          var anno = this.state.annotations.filter(function (a) {
            return a.id === _this2.state.newAnno;
          });

          if (anno.length > 0 && !anno.motivation) {
            console.log("should cancel ");

            var newState = _objectSpread({}, this.state, {
              annotations: this.state.annotations.filter(function (a) {
                return a.id != _this2.state.newAnno;
              })
            });

            delete newState["newAnno"];
            this.setState(newState);
          }
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      console.log("AeT", this.props, this.state);
      this._addingAnno = false;
      var panel = [];
      panel.push(_react.default.createElement("div", null, this.renderAnno(this.state.panelAnno)));

      var ret = _react.default.createElement("div", null, _react.default.createElement("div", {
        id: "annotatedEtext",
        onMouseUp: this.onMouseUp.bind(this),
        onClick: this.mayCancelAnno.bind(this)
      }, this.state.chunks && this.state.chunks.map(function (c, i) {
        return _react.default.createElement("div", {
          key: i
        }, _react.default.createElement("div", {
          className: "text",
          "data-seq": c.seq,
          "data-start": c.start,
          "data-end": c.end
        }, !c.pieces && c.value, c.pieces && c.pieces.map(function (a, j) {
          var text = c.value.substring(a.start - c.start, a.end - c.start);
          if (a.nb == 0) return _react.default.createElement("span", {
            key: j,
            "data-seq": c.seq,
            "data-start": a.start,
            "data-end": a.end
          }, text);else {
            return _react.default.createElement(_Tooltip.default, _extends({}, _this3.state.newAnno ? {
              open: _this3.state.newAnno
            } : {}, {
              title: _react.default.createElement("div", {
                id: "anno-tooltip"
              }, _react.default.createElement("div", null, " ", _this3.renderAnno(a.annotations), " "), _react.default.createElement("div", {
                id: "anno-tooltip-menu",
                onMouseUp: function onMouseUp(e) {
                  e.stopPropagation();
                }
              }, _react.default.createElement("a", {
                href: "http://library.bdrc.io/search?q=\"" + text + "\"&lg=" + c.lang + "&t=Any",
                target: "_blank"
              }, _react.default.createElement(_IconButton.default, {
                size: "small",
                title: "Search in Library",
                onClick: function onClick(e) {
                  return _this3.setState(_objectSpread({}, _this3.state, {
                    annoPanel: true
                  }));
                }
              }, _react.default.createElement(_Search.default, null))), _react.default.createElement(_IconButton.default, {
                size: "small",
                title: "Assert",
                onClick: function onClick(e) {
                  return _this3.identify(e, a);
                }
              }, _react.default.createElement(_AddLocation.default, null)), _react.default.createElement(_IconButton.default, {
                size: "small",
                title: "Assert",
                onClick: function onClick(e) {
                  return _this3.assert(e, a);
                }
              }, _react.default.createElement(_Chat.default, null)), Object.keys(a.annotations).filter(function (k) {
                return a.annotations[k].motivation;
              }).length >= 1 && _react.default.createElement(_IconButton.default, {
                size: "small",
                title: "Question",
                onClick: function onClick(e) {
                  return _this3.question(e, a);
                }
              }, _react.default.createElement(_Announcement.default, null)), Object.keys(a.annotations).filter(function (k) {
                return a.annotations[k].motivation === "questioning";
              }).length === 1 && _react.default.createElement(_IconButton.default, {
                size: "small",
                title: "Reply",
                onClick: function onClick(e) {
                  return _this3.reply(e, a);
                }
              }, _react.default.createElement(_QuestionAnswer.default, null)), Object.keys(a.annotations).filter(function (k) {
                return a.annotations[k].motivation;
              }).length >= 1 && _react.default.createElement(_IconButton.default, {
                size: "small",
                title: "Edit",
                onClick: function onClick(e) {
                  return _this3.setState(_objectSpread({}, _this3.state, {
                    annoPanel: true
                  }));
                }
              }, _react.default.createElement(_Build.default, null)), Object.keys(a.annotations).length === 1 && _react.default.createElement(_IconButton.default, {
                size: "small",
                title: "Delete",
                onClick: function onClick(e) {
                  return _this3.trash(e, a.annotations);
                }
              }, _react.default.createElement(_Delete.default, null)))),
              interactive: true,
              classes: {
                tooltip: _this3.props.classes.lightTooltip
              },
              PopperProps: {
                style: {
                  opacity: 1
                }
              }
            }), _react.default.createElement("span", {
              onClick: _this3.onAnnoClick.bind(_this3),
              className: "annotated",
              key: j,
              "data-seq": c.seq,
              "data-start": a.start,
              "data-end": a.end,
              style: {
                backgroundColor: "rgba(128,255,0," + 0.35 * a.nb + ")"
              }
            }, text));
          }
        })));
      })), _react.default.createElement("div", {
        id: "annoPanel",
        className: this.state.annoPanel ? " open" : ""
      }, _react.default.createElement("h3", null, "Annotation panel"), this.renderAnno(this.state.panelAnno, true)));

      return ret;
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      console.log("getDSfP", props, state);
      var annoChunks = [];

      var annoInfo = _toConsumableArray(state.annotations);

      if (props.services) {
        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (var _iterator5 = props.services[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var service = _step5.value;

            var _arr2 = Object.keys(service.collectionsById);

            for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
              var id = _arr2[_i2];
              var pages = service.collectionsById[id].pages;

              var _arr3 = Object.values(pages);

              for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
                var p = _arr3[_i3];
                var _iteratorNormalCompletion6 = true;
                var _didIteratorError6 = false;
                var _iteratorError6 = undefined;

                try {
                  for (var _iterator6 = p.items[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var anno = _step6.value;
                    console.log("anno", anno);

                    if (anno.target) {
                      var startChar = void 0,
                          endChar = void 0,
                          target = void 0;

                      if (anno.target.type === "WorkLocation") {
                        startChar = anno.target.workLocationChar;
                        endChar = anno.target.workLocationEndChar;
                      } else if (anno.target.type === "Annotation") {
                        target = anno.target;
                        var targetId = void 0; // can be recursive in target eg target.target...target

                        do {
                          if (!targetId) targetId = target.id;
                          target = target.target;
                        } while (target.type && target.type != "WorkLocation" && target.target);

                        if (target) {
                          startChar = target.workLocationChar;
                          endChar = target.workLocationEndChar;
                          target = targetId;
                        }
                      }

                      annoInfo.push(_objectSpread({
                        startChar: startChar,
                        endChar: endChar,
                        body: anno.body,
                        id: anno.id,
                        motivation: anno.motivation
                      }, target ? {
                        target: target
                      } : {}));
                    }
                  }
                } catch (err) {
                  _didIteratorError6 = true;
                  _iteratorError6 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                      _iterator6.return();
                    }
                  } finally {
                    if (_didIteratorError6) {
                      throw _iteratorError6;
                    }
                  }
                }
              }
            }
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
      }

      annoInfo = annoInfo.filter(function (k) {
        //console.log("trash?",k,state.trash)
        return !state.trash || state.trash.indexOf(k.id) === -1;
      });
      console.log("annoInfo", annoInfo, state, state.trash);
      var panelAnno = annoInfo.reduce(function (acc, a) {
        return _objectSpread({}, acc, _defineProperty({}, a.id, a));
      }, {});

      if (props.chunks && (!state.chunks || annoInfo.length !== state.numAnno || props.chunks.length !== state.chunks.length)) {
        var _iteratorNormalCompletion7 = true;
        var _didIteratorError7 = false;
        var _iteratorError7 = undefined;

        try {
          var _loop = function _loop() {
            var elem = _step7.value;

            var chunk = _objectSpread({}, elem);

            var annoList = [];
            var _iteratorNormalCompletion8 = true;
            var _didIteratorError8 = false;
            var _iteratorError8 = undefined;

            try {
              for (var _iterator8 = annoInfo[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                var _anno = _step8.value;

                if (_anno.startChar >= chunk.start && _anno.startChar <= chunk.end || _anno.endChar >= chunk.start && _anno.endChar <= chunk.end || chunk.start >= _anno.startChar && chunk.end <= _anno.endChar) {
                  annoList.push(_anno);
                }
              }
            } catch (err) {
              _didIteratorError8 = true;
              _iteratorError8 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
                  _iterator8.return();
                }
              } finally {
                if (_didIteratorError8) {
                  throw _iteratorError8;
                }
              }
            }

            if (annoList.length > 0) {
              var tmp = annoList.reduce(function (acc, e, i) {
                var a = e.startChar;
                var z = e.endChar;
                if (a < chunk.start) a = chunk.start;
                if (z > chunk.end) z = chunk.end;
                var target = e.target;
                var text = chunk.value.substring(a - chunk.start, z - chunk.start);
                return _toConsumableArray(acc).concat([{
                  i: i,
                  char: a,
                  start: true,
                  id: e.id,
                  body: e.body,
                  motivation: e.motivation,
                  target: target,
                  text: text
                }, {
                  i: i,
                  char: z,
                  start: false,
                  id: e.id
                }]);
              }, []);
              tmp = _lodash.default.orderBy(tmp, ['char'], ['ASC']);
              console.log("tmp", tmp);
              chunk.pieces = [];
              var nb = 0,
                  body; // for superposition of annotations

              var idx = chunk.start; // cursor into chunk

              var nxt = idx; // next start/end of annotation

              var _iteratorNormalCompletion9 = true;
              var _didIteratorError9 = false;
              var _iteratorError9 = undefined;

              try {
                for (var _iterator9 = tmp[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                  var a = _step9.value;

                  var _elem = void 0;

                  nxt = a.char;
                  if (nxt >= chunk.end) nxt++;

                  if (idx != nxt) {
                    _elem = {
                      nb: nb,
                      start: idx,
                      end: nxt
                    };

                    if (body) {
                      _elem.annotations = _objectSpread({}, body); //elem.text = a.text //chunk.value.substring(idx - chunk.start,nxt - chunk.start  )
                    }

                    chunk.pieces.push(_elem);
                  }

                  if (a.start) {
                    nb++;

                    if (a.body) {
                      if (!body) body = {};
                      body[a.id] = _objectSpread({
                        body: a.body,
                        motivation: a.motivation
                      }, a.target ? {
                        target: a.target
                      } : {}, a.text ? {
                        text: a.text
                      } : {});
                      if (a.text) panelAnno[a.id]["text"] = a.text;
                    }
                  } else {
                    if (nb == 0) body = false;
                    nb--;
                    if (a.id) delete body[a.id];
                  }

                  idx = nxt;
                }
              } catch (err) {
                _didIteratorError9 = true;
                _iteratorError9 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
                    _iterator9.return();
                  }
                } finally {
                  if (_didIteratorError9) {
                    throw _iteratorError9;
                  }
                }
              }

              if (nxt < chunk.end) chunk.pieces.push(_objectSpread({
                nb: nb,
                start: nxt,
                end: chunk.end + 1
              }, nb > 0 ? {
                annotations: _objectSpread({}, body)
              } : {})); //console.log(JSON.stringify(chunk.pieces,null,4))

              annoList = _lodash.default.orderBy(annoList, ['char'], ['ASC']); //console.log(chunk.annoList)
            }

            annoChunks.push(chunk);
          };

          for (var _iterator7 = props.chunks[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
            _loop();
          }
        } catch (err) {
          _didIteratorError7 = true;
          _iteratorError7 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
              _iterator7.return();
            }
          } finally {
            if (_didIteratorError7) {
              throw _iteratorError7;
            }
          }
        }

        return _objectSpread({}, state, {
          chunks: annoChunks,
          numAnno: state.annotations.length,
          panelAnno: panelAnno
        });
      } else return _objectSpread({}, state);
    }
  }]);

  return AnnotatedEtext;
}(_react.Component);

var _default = (0, _styles.withStyles)(styles)(AnnotatedEtext);

exports.default = _default;