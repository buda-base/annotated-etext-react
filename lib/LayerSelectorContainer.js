"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _AnnotationTypes = require("./AnnotationTypes");

var _LayerServiceList = _interopRequireDefault(require("./LayerServiceList"));

var anno = _interopRequireWildcard(require("./Layer/actions"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LayerSelector =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LayerSelector, _React$Component);

  function LayerSelector() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps;

    _classCallCheck(this, LayerSelector);

    return _possibleConstructorReturn(this, _getPrototypeOf(LayerSelector).call(this, props));
  }

  _createClass(LayerSelector, [{
    key: "componentDidMount",
    value: function componentDidMount() {//const { dispatch, selectedSubreddit } = this.props
      //dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      console.log("LSCprops", this.props);

      var res = _react.default.createElement("div", {
        id: "annoLayerSelec"
      }, _react.default.createElement("h3", null, "Annotation layer selection"), this.props.services && this.props.services.map(function (service, i) {
        return _react.default.createElement(_LayerServiceList.default, {
          key: i,
          service: service,
          IRI: _this.props.IRI
        });
      }), !this.props.services && _react.default.createElement("div", null, _react.default.createElement("a", {
        href: "#",
        onClick: function onClick(e) {
          return _this.props.onGetCollectionList(_this.props.IRI, _this.props.servicesIds["collectionSearch"]);
        }
      }, "Get collection list")));

      return res;
    }
  }]);

  return LayerSelector;
}(_react.default.Component);

_defineProperty(LayerSelector, "defaultProps", {
  servicesIds: {
    collectionSearch: "http://api.bdrc.io/annotations/collectionSearch" // should come from some config

  }
});

var mapStateToProps = function mapStateToProps() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var ownProps = arguments.length > 1 ? arguments[1] : undefined;

  var props = _objectSpread({}, ownProps); // state here refers to global redux state not object state
  //, services: state.services }


  console.log("LSCms2p", state, ownProps);
  var services = state.data.services;
  props = _objectSpread({}, props, {
    services: services //props["seri"]

  });
  return props;
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onGetCollectionList: function onGetCollectionList(iri, url) {
      dispatch(anno.addService(iri, url));
    }
  };
};

var LayerSelectorContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LayerSelector);
var _default = LayerSelectorContainer;
exports.default = _default;