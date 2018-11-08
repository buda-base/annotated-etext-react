"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AnnotationTypes = require("./AnnotationTypes");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CollectionService =
/*#__PURE__*/
function () {
  function CollectionService(serviceUri) {
    _classCallCheck(this, CollectionService);

    _defineProperty(this, "serviceUri", void 0);

    this.serviceUri = serviceUri;
    return this;
  }

  _createClass(CollectionService, [{
    key: "_getCollectionInfo",
    value: function () {
      var _getCollectionInfo2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(resp) {
        var json;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return resp.json();

              case 2:
                json = _context.sent;
                return _context.abrupt("return", json.collectioninfo);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function _getCollectionInfo(_x) {
        return _getCollectionInfo2.apply(this, arguments);
      };
    }()
  }, {
    key: "getAnnotationCollectionsServices",
    value: function () {
      var _getAnnotationCollectionsServices = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(forResource) {
        var uri, resp, res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                uri = this.serviceUri + "?res=" + forResource;
                _context2.next = 3;
                return fetch(uri);

              case 3:
                resp = _context2.sent;
                _context2.next = 6;
                return this._getCollectionInfo(resp);

              case 6:
                res = _context2.sent;
                return _context2.abrupt("return", res);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function getAnnotationCollectionsServices(_x2) {
        return _getAnnotationCollectionsServices.apply(this, arguments);
      };
    }()
  }]);

  return CollectionService;
}();

exports.default = CollectionService;