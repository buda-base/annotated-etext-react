"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _AnnotationTypes = require("./AnnotationTypes");

var _actions = require("./Layer/actions");

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _green = _interopRequireDefault(require("@material-ui/core/colors/green"));

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

var initialState = {
  collections: []
};

var LayerServiceList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LayerServiceList, _React$Component);

  function LayerServiceList(props) {
    var _this;

    _classCallCheck(this, LayerServiceList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LayerServiceList).call(this, props));

    _this.checkSync(props);

    return _this;
  }

  _createClass(LayerServiceList, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.checkSync(nextProps);
    }
  }, {
    key: "checkSync",
    value: function checkSync(nextProps) {
      console.log("LSLcs", nextProps);

      if (nextProps.service && nextProps.service.collectionsById) {
        var _arr = Object.keys(nextProps.service.collectionsById);

        for (var _i = 0; _i < _arr.length; _i++) {
          var _id = _arr[_i];
          var collec = nextProps.service.collectionsById[_id];

          if (collec.shouldSyncFor.start > collec.syncedFor.end && !collec.fetching) {
            this.props.onSyncService("http://purl.bdrc.io/anncollection/" + _id.replace(/bdac:/, "") + "/pageForRange", collec.shouldSyncFor); // wait for collection to sync before re-render

            return false;
          }
        }
      }

      return true;
    }
  }, {
    key: "handleChange",
    value: function handleChange(e, check, id) {
      console.log("hC", e, check, id);
      this.props.onToggleCollection(id, check);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log("LSLprops", this.props);

      var res = _react.default.createElement("div", null, this.props.service && Object.keys(this.props.service.collectionsById).map(function (id, i) {
        var collec = _this2.props.service.collectionsById[id]["collectionInfo"]["collection"];
        var label = collec["label"];
        if (!label) label = collec["rdfs:label"];
        if (label) label = label["@value"];else label = "Collection " + id; //return ( [<a key={i} href="#">{label}</a>,<br/>] ) }

        return _react.default.createElement(_FormControlLabel.default, {
          style: {
            marginRight: "30px"
          },
          control: _react.default.createElement(_Checkbox.default, {
            checked: _this2.props.showCollections[id],
            onChange: function onChange(e, check) {
              return _this2.handleChange(e, check, id);
            },
            value: id,
            color: _green.default[500]
          }),
          label: label
        });
      }));

      return res;
    }
  }]);

  return LayerServiceList;
}(_react.default.Component);

_defineProperty(LayerServiceList, "defaultProps", {
  collections: []
});

var mapStateToProps = function mapStateToProps() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var ownProps = arguments.length > 1 ? arguments[1] : undefined;

  var props = _objectSpread({}, ownProps); //, collections: state.collections }


  var showCollections = state.data.showCollections;
  props = _objectSpread({}, props, {
    collections: state.data.services.map(function (s) {
      return Object.keys(s.collectionsById).map(function (k) {
        return s.collectionsById[k].collectionInfo;
      });
    }),
    showCollections: showCollections
  });
  return props;
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSyncService: function onSyncService(service, range) {
      dispatch((0, _actions.syncService)(service, range));
    },
    onToggleCollection: function onToggleCollection(id, check) {
      dispatch((0, _actions.toggleCollection)(id, check));
    }
  };
};

var LayerServiceListContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LayerServiceList);
var _default = LayerServiceListContainer;
exports.default = _default;