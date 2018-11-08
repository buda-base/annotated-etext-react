"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nock_data = nock_data;
exports.default = void 0;

var _nock = _interopRequireDefault(require("nock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mockdata = {
  "http://api.bdrc.io/annotations/collectionService": {
    "@context": "http://purl.bdrc.io/ontology/ext/annservice/context.json",
    "@id": "http://api.bdrc.io/annotations/collectionService",
    "profile": "http://purl.bdrc.io/ontology/ext/annservice/collectionService",
    "label": "BDRC Annotations",
    "comment": "BDRC Simple Web Annotation Service",
    "service": [{
      "@id": "http://api.bdrc.io/annotations/create",
      "profile": "http://purl.bdrc.io/ontology/ext/annservice/collectionCreate"
    }, {
      "@id": "http://api.bdrc.io/annotations/collectionSearch",
      "profile": "http://purl.bdrc.io/ontology/ext/annservice/collectionSearch",
      "supports": ["range", "motivation", "res"]
    }]
  },
  "http://api.bdrc.io/annotations/collectionSearch?res=bdr:UTDEMO_01": {
    "@context": "http://purl.bdrc.io/ontology/ext/annservice/context.json",
    "@id": "http://api.bdrc.io/annotations/collectionSearch?res=bdr:UTDEMO_01",
    "@type": "CollectionInfoList",
    "collectioninfo": [{
      "collection": {
        "@id": "bdac:ANCUTDEMO_NER001",
        "@type": ["bdo:AnnotationLayer", "AnnotationCollection"],
        "label": {
          "@value": "NER annotations for bdr:UTDEMO_01",
          "@language": "en"
        },
        "layerType": "bdr:LayerNER",
        "layerForResource": "bdr:UTDEMO_01",
        "total": 5
      },
      "hints": {
        "access_hint": "read-only",
        "preselect": true
      },
      "service": [{
        "@context": "http://iiif.io/api/search/1/context.json",
        "@id": "http://api.bdrc.io/annotations/search/bdac:ANCUTDEMO_NER001/",
        "profile": "http://iiif.io/api/search/1/search"
      }, {
        "@id": "http://api.bdrc.io/annotations/pageForRange/bdac:ANCUTDEMO_NER001/",
        "profile": "http://purl.bdrc.io/ontology/ext/annservice/pageForRange"
      }, {
        "@context": "http://iiif.io/api/auth/1/context.json",
        "@id": "http://library.bdrc.io/iiifcookielogin",
        "profile": "http://iiif.io/api/auth/1/login",
        "label": "Login to BDRC",
        "header": "Please Log In",
        "description": "Example Institution requires that you log in with your example account to view this content.",
        "confirmLabel": "Login",
        "failureHeader": "Authentication Failed",
        "service": [{
          "@id": "http://library.bdrc.io/iiiftoken",
          "profile": "http://iiif.io/api/auth/1/token"
        }, {
          "@id": "http://library.bdrc.io/logout",
          "profile": "http://iiif.io/api/auth/1/logout",
          "label": "Logout from BDRC"
        }]
      }]
    }]
  }
};
var _default = mockdata;
exports.default = _default;

function nock_data(domain, path, query) {
  var n = (0, _nock.default)(domain).persist().defaultReplyHeaders({
    'access-control-allow-origin': '*'
  }) //.log(console.log)
  .get(path).query(query).reply(200, function (path, requestBody) {
    var uri = domain + path; //console.log(uri);
    //console.log(mockdata[uri]);

    return mockdata[uri];
  });
}