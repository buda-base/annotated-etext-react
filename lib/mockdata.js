"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nock_data = nock_data;
exports.mock_data = mock_data;
exports.default = void 0;

var _nock = _interopRequireDefault(require("nock"));

var _fetchMock = _interopRequireDefault(require("fetch-mock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mockdata = {
  "http://purl.bdrc.io/graph/Chunks?I_LIM=10&R_RES=bdr:UTDEMO_01&I_SEQ=1": {
    "@graph": [{
      "@id": "_:b0",
      "chunkContents": {
        "@language": "bo",
        "@value": "གནས་མལ་དང་ནི་རྩོད་པ་དང་། །དགེ་འདུན་དབྱེན་རྣམས་བསྡུས་པ་ཡིན། །རབ་ཏུ་འབྱུང་བའི་གཞིའི་སྤྱི་སྡོམ་ལ། ཤཱ་རིའི་བུ་དང་མུ་སྟེགས་ཅན། །"
      },
      "seqNum": 7,
      "sliceEndChar": 785,
      "sliceStartChar": 663
    }, {
      "@id": "_:b1",
      "chunkContents": {
        "@language": "bo",
        "@value": "མུ་སྟེགས་ཚོགས་རྣམས་ཐམས་ཅད་རབ་བཅོམ་སྟེ། །སྡེ་དང་བཅས་པའི་བདུད་རྣམས་ངེས་བཅོམ་ནས། །བྱང་ཆུབ་འདི་བརྙེས་དེ་ལ་ཕྱག་འཚལ་ལོ། །"
      },
      "seqNum": 3,
      "sliceEndChar": 281,
      "sliceStartChar": 166
    }, {
      "@id": "_:b2",
      "chunkContents": {
        "@language": "bo",
        "@value": "བསྙེན་པར་རྫོགས་པར་གནང་བ་དང་། །ཉེ་སྡེས་ཚོགས་ནི་བསྡུས་པ་དང་། །ལྔ་པའི་སྡེ་ཚན་བསྡུས་པ་ཡིན། །བྱང་ཆུབ་སེམས་དཔའ་དགའ་ལྡན་གྱི་གནས་ན་བཞུགས་པ་ན། "
      },
      "seqNum": 9,
      "sliceEndChar": 1045,
      "sliceStartChar": 911
    }, {
      "@id": "_:b3",
      "chunkContents": {
        "@language": "bo",
        "@value": "༄༅༅། །རྒྱ་གར་སྐད་དུ། བི་ན་ཡ་བསྟུ། བོད་སྐད་དུ། འདུལ་བ་གཞི། བམ་པོ་དང་པོ། དཀོན་མཆོག་གསུམ་ལ་ཕྱག་འཚལ་ལོ། །གང་གིས་འཆིང་རྣམས་ཡང་དག་རབ་བཅད་ཅིང་། །"
      },
      "seqNum": 2,
      "sliceEndChar": 165,
      "sliceStartChar": 27
    }, {
      "@id": "_:b4",
      "chunkContents": {
        "@language": "bo",
        "@value": "ཡུལ་ཨང་ག་དག་ན་ཨང་གའི་རྒྱལ་པོ་ཞེས་བྱ་བས་རྒྱལ་སྲིད་འབྱོར་པ། "
      },
      "seqNum": 10,
      "sliceEndChar": 1104,
      "sliceStartChar": 1046
    }, {
      "@id": "_:b5",
      "chunkContents": {
        "@language": "bo",
        "@value": "དགེ་ཚུལ་གཉིས་དང་བྱ་རོག་སྐྲོད། །དགྲ་བཅོམ་བསད་དང་ལག་རྡུམ་གྱི། །སྡེ་ཚན་ཡང་དག་བསྡུས་པ་ཡིན། །སྡོམ་ལ། ཤཱ་རིའི་བུ་དང་རབ་འབྱུང་དང་། །"
      },
      "seqNum": 8,
      "sliceEndChar": 910,
      "sliceStartChar": 786
    }, {
      "@id": "_:b6",
      "chunkContents": {
        "@language": "bo",
        "@value": "ངུར་སྨྲིག་གོས་འཆང་མཁས་པ་ཚུལ་ལས་ཉམས་པ་དཀའ། །གཞི་རྣམས་ཀྱི་སྤྱི་སྡོམ་ལ། རབ་འབྱུང་གསོ་སྦྱོང་གཞི་དང་ནི། །དགག་དབྱེ་དབྱར་དང་ཀོ་ལྤགས་གཞི། །"
      },
      "seqNum": 5,
      "sliceEndChar": 551,
      "sliceStartChar": 421
    }, {
      "@id": "_:b7",
      "chunkContents": {
        "@language": "bo",
        "@value": "སྨན་དང་གོས་དང་སྲ་བརྐྱང་དང་། །ཀཽ་ཤཱམ་བཱི་དང་ལས་ཀྱི་གཞི། །དམར་སེར་ཅན་དང་གང་ཟག་དང་། །སྤོ་དང་གསོ་སྦྱོང་བཞག་པ་དང་། །"
      },
      "seqNum": 6,
      "sliceEndChar": 662,
      "sliceStartChar": 552
    }, {
      "@id": "_:b8",
      "chunkContents": {
        "@language": "bo",
        "@value": "༄༅། །འདུལ་བ་ཀ་བཞུགས་སོ། །"
      },
      "seqNum": 1,
      "sliceEndChar": 26,
      "sliceStartChar": 1
    }, {
      "@id": "_:b9",
      "chunkContents": {
        "@language": "bo",
        "@value": "ཁྱིམ་དོན་ཆེ་ཆུང་སྤངས་ཏེ་དང་པོར་རབ་འབྱུང་དཀའ། །རབ་བྱུང་ཐོབ་ནས་ཡུལ་སྤྱད་དག་གིས་དགའ་ཐོབ་དཀའ། །མངོན་དགའ་ཇི་བཞིན་དོན་བསྐྱེད་ཡང་དག་བྱེད་པ་དཀའ། །"
      },
      "seqNum": 4,
      "sliceEndChar": 420,
      "sliceStartChar": 282
    }, {
      "@id": "bdr:UTDEMO_01",
      "eTextHasChunk": ["_:b7", "_:b2", "_:b4", "_:b6", "_:b5", "_:b3", "_:b9", "_:b0", "_:b8", "_:b1"]
    }],
    "@context": "http://purl.bdrc.io/context.jsonld"
  },
  "http://purl.bdrc.io/graph/Chunks?I_LIM=10&R_RES=bdr:UTDEMO_01&I_SEQ=11": {
    "@graph": [{
      "@id": "_:b0",
      "chunkContents": {
        "@language": "bo",
        "@value": "རེས་འགའ་ནི་ཨང་གའི་རྒྱལ་པོ་དཔུང་དང་མཐུ་ཆེ་བ་ཡིན་ལ། རེས་འགའ་ནི་རྒྱལ་པོ་པད་མ་ཆེན་པོ་དཔུང་དང་མཐུ་ཆེ་བ་ཡིན་ནོ། །"
      },
      "seqNum": 14,
      "sliceEndChar": 1416,
      "sliceStartChar": 1310
    }, {
      "@id": "_:b1",
      "chunkContents": {
        "@language": "bo",
        "@value": "གླང་པོ་ཆེ་པའི་ཚོགས་དང་། རྟ་པའི་ཚོགས་དང་། ཤིང་རྟ་པའི་ཚོགས་དང་། དཔུང་བུ་ཆུང་གི་ཚོགས་གོ་བསྐོན་ཏེ།"
      },
      "seqNum": 18,
      "sliceEndChar": 1847,
      "sliceStartChar": 1753
    }, {
      "@id": "_:b2",
      "chunkContents": {
        "@language": "bo",
        "@value": "དཔུང་བུ་ཆུང་གི་ཚོགས་གོ་བསྐོན་ཏེ། ཡུལ་མ་ག་དྷཱ་རྒྱལ་པོའི་ཁབ་མ་གཏོགས་པ་བཅོམ་ནས་ཕྱིར་ལྡོག་པར་བྱེད་དོ། །"
      },
      "seqNum": 16,
      "sliceEndChar": 1660,
      "sliceStartChar": 1561
    }, {
      "@id": "_:b3",
      "chunkContents": {
        "@language": "bo",
        "@value": "རྒྱལ་སྲིད་འབྱོར་པ་རྒྱས་པ་བདེ་བ་ལོ་ལེགས་པ་སྐྱེ་བོ་དང་མི་མང་པོས་གང་བ་བྱེད་དུ་བཅུག་གོ། །"
      },
      "seqNum": 13,
      "sliceEndChar": 1309,
      "sliceStartChar": 1224
    }, {
      "@id": "_:b4",
      "chunkContents": {
        "@language": "bo",
        "@value": "གང་གི་ཚེ་ཨང་གའི་རྒྱལ་པོ་དཔུང་དང་མཐུ་ཆེ་བ་དེའི་ཚེ་ན། དེས་དཔུང་གི་ཚོགས་ཡན་ལག་བཞི་པ། གླང་པོ་ཆེ་པའི་ཚོགས་དང་། རྟ་པའི་ཚོགས་དང་། ཤིང་རྟ་པའི་ཚོགས་དང་། "
      },
      "seqNum": 15,
      "sliceEndChar": 1560,
      "sliceStartChar": 1417
    }, {
      "@id": "_:b6",
      "chunkContents": {
        "@language": "bo",
        "@value": "རྒྱས་པ་བདེ་བ་ལོ་ལེགས་པ་སྐྱེ་བོ་དང་མི་མང་པོས་གང་བ་བྱེད་དུ་བཅུག་གོ། །"
      },
      "seqNum": 11,
      "sliceEndChar": 1171,
      "sliceStartChar": 1105
    }, {
      "@id": "_:b7",
      "chunkContents": {
        "@language": "bo",
        "@value": "ཡུལ་མ་ག་དྷཱ་དག་ན་ཡང་རྒྱལ་པོ་པད་མ་ཆེན་པོ་ཞེས་བྱ་བས། "
      },
      "seqNum": 12,
      "sliceEndChar": 1223,
      "sliceStartChar": 1172
    }, {
      "@id": "_:b8",
      "chunkContents": {
        "@language": "bo",
        "@value": "གང་གི་ཚེ་རྒྱལ་པོ་པད་མ་ཆེན་པོ་དཔུང་དང་མཐུ་ཆེ་བ་དེའི་ཚེ་ན། དེས་ཀྱང་དཔུང་གི་ཚོགས་ཡན་ལག་བཞི་པ། "
      },
      "seqNum": 17,
      "sliceEndChar": 1752,
      "sliceStartChar": 1661
    }, {
      "@id": "bdr:UTDEMO_01",
      "eTextHasChunk": ["_:b1", "_:b0", "_:b7", "_:b4", "_:b2", "_:b8", "_:b3", "_:b6"]
    }],
    "@context": "http://purl.bdrc.io/context.jsonld"
  },
  "http://purl.bdrc.io/graph/Chunks?I_LIM=5&R_RES=bdr:UTDEMO_01&I_SEQ=1": {
    "@graph": [{
      "@id": "_:b0",
      "chunkContents": {
        "@language": "bo",
        "@value": "ཁྱིམ་དོན་ཆེ་ཆུང་སྤངས་ཏེ་དང་པོར་རབ་འབྱུང་དཀའ། །རབ་བྱུང་ཐོབ་ནས་ཡུལ་སྤྱད་དག་གིས་དགའ་ཐོབ་དཀའ། །མངོན་དགའ་ཇི་བཞིན་དོན་བསྐྱེད་ཡང་དག་བྱེད་པ་དཀའ། །"
      },
      "seqNum": 4,
      "sliceEndChar": 420,
      "sliceStartChar": 282
    }, {
      "@id": "_:b1",
      "chunkContents": {
        "@language": "bo",
        "@value": "མུ་སྟེགས་ཚོགས་རྣམས་ཐམས་ཅད་རབ་བཅོམ་སྟེ། །སྡེ་དང་བཅས་པའི་བདུད་རྣམས་ངེས་བཅོམ་ནས། །བྱང་ཆུབ་འདི་བརྙེས་དེ་ལ་ཕྱག་འཚལ་ལོ། །"
      },
      "seqNum": 3,
      "sliceEndChar": 281,
      "sliceStartChar": 166
    }, {
      "@id": "_:b2",
      "chunkContents": {
        "@language": "bo",
        "@value": "ངུར་སྨྲིག་གོས་འཆང་མཁས་པ་ཚུལ་ལས་ཉམས་པ་དཀའ། །གཞི་རྣམས་ཀྱི་སྤྱི་སྡོམ་ལ། རབ་འབྱུང་གསོ་སྦྱོང་གཞི་དང་ནི། །དགག་དབྱེ་དབྱར་དང་ཀོ་ལྤགས་གཞི། །"
      },
      "seqNum": 5,
      "sliceEndChar": 551,
      "sliceStartChar": 421
    }, {
      "@id": "_:b3",
      "chunkContents": {
        "@language": "bo",
        "@value": "༄༅༅། །རྒྱ་གར་སྐད་དུ། བི་ན་ཡ་བསྟུ། བོད་སྐད་དུ། འདུལ་བ་གཞི། བམ་པོ་དང་པོ། དཀོན་མཆོག་གསུམ་ལ་ཕྱག་འཚལ་ལོ། །གང་གིས་འཆིང་རྣམས་ཡང་དག་རབ་བཅད་ཅིང་། །"
      },
      "seqNum": 2,
      "sliceEndChar": 165,
      "sliceStartChar": 27
    }, {
      "@id": "_:b4",
      "chunkContents": {
        "@language": "bo",
        "@value": "༄༅། །འདུལ་བ་ཀ་བཞུགས་སོ། །"
      },
      "seqNum": 1,
      "sliceEndChar": 26,
      "sliceStartChar": 1
    }, {
      "@id": "bdr:UTDEMO_01",
      "eTextHasChunk": ["_:b3", "_:b1", "_:b0", "_:b2", "_:b4"]
    }],
    "@context": "http://purl.bdrc.io/context.jsonld"
  },
  "http://purl.bdrc.io/graph/Chunks?I_LIM=5&R_RES=bdr:UTDEMO_01&I_SEQ=6": {
    "@graph": [{
      "@id": "_:b0",
      "chunkContents": {
        "@language": "bo",
        "@value": "སྨན་དང་གོས་དང་སྲ་བརྐྱང་དང་། །ཀཽ་ཤཱམ་བཱི་དང་ལས་ཀྱི་གཞི། །དམར་སེར་ཅན་དང་གང་ཟག་དང་། །སྤོ་དང་གསོ་སྦྱོང་བཞག་པ་དང་། །"
      },
      "seqNum": 6,
      "sliceEndChar": 662,
      "sliceStartChar": 552
    }, {
      "@id": "_:b1",
      "chunkContents": {
        "@language": "bo",
        "@value": "བསྙེན་པར་རྫོགས་པར་གནང་བ་དང་། །ཉེ་སྡེས་ཚོགས་ནི་བསྡུས་པ་དང་། །ལྔ་པའི་སྡེ་ཚན་བསྡུས་པ་ཡིན། །བྱང་ཆུབ་སེམས་དཔའ་དགའ་ལྡན་གྱི་གནས་ན་བཞུགས་པ་ན། "
      },
      "seqNum": 9,
      "sliceEndChar": 1045,
      "sliceStartChar": 911
    }, {
      "@id": "_:b2",
      "chunkContents": {
        "@language": "bo",
        "@value": "དགེ་ཚུལ་གཉིས་དང་བྱ་རོག་སྐྲོད། །དགྲ་བཅོམ་བསད་དང་ལག་རྡུམ་གྱི། །སྡེ་ཚན་ཡང་དག་བསྡུས་པ་ཡིན། །སྡོམ་ལ། ཤཱ་རིའི་བུ་དང་རབ་འབྱུང་དང་། །"
      },
      "seqNum": 8,
      "sliceEndChar": 910,
      "sliceStartChar": 786
    }, {
      "@id": "_:b3",
      "chunkContents": {
        "@language": "bo",
        "@value": "གནས་མལ་དང་ནི་རྩོད་པ་དང་། །དགེ་འདུན་དབྱེན་རྣམས་བསྡུས་པ་ཡིན། །རབ་ཏུ་འབྱུང་བའི་གཞིའི་སྤྱི་སྡོམ་ལ། ཤཱ་རིའི་བུ་དང་མུ་སྟེགས་ཅན། །"
      },
      "seqNum": 7,
      "sliceEndChar": 785,
      "sliceStartChar": 663
    }, {
      "@id": "_:b4",
      "chunkContents": {
        "@language": "bo",
        "@value": "ཡུལ་ཨང་ག་དག་ན་ཨང་གའི་རྒྱལ་པོ་ཞེས་བྱ་བས་རྒྱལ་སྲིད་འབྱོར་པ། "
      },
      "seqNum": 10,
      "sliceEndChar": 1104,
      "sliceStartChar": 1046
    }, {
      "@id": "bdr:UTDEMO_01",
      "eTextHasChunk": ["_:b2", "_:b3", "_:b1", "_:b0", "_:b4"]
    }],
    "@context": "http://purl.bdrc.io/context.jsonld"
  },
  "http://purl.bdrc.io/graph/Chunks?I_LIM=5&R_RES=bdr:UTDEMO_01&I_SEQ=11": {
    "@graph": [{
      "@id": "_:b0",
      "chunkContents": {
        "@language": "bo",
        "@value": "རྒྱས་པ་བདེ་བ་ལོ་ལེགས་པ་སྐྱེ་བོ་དང་མི་མང་པོས་གང་བ་བྱེད་དུ་བཅུག་གོ། །"
      },
      "seqNum": 11,
      "sliceEndChar": 1171,
      "sliceStartChar": 1105
    }, {
      "@id": "_:b1",
      "chunkContents": {
        "@language": "bo",
        "@value": "གང་གི་ཚེ་ཨང་གའི་རྒྱལ་པོ་དཔུང་དང་མཐུ་ཆེ་བ་དེའི་ཚེ་ན། དེས་དཔུང་གི་ཚོགས་ཡན་ལག་བཞི་པ། གླང་པོ་ཆེ་པའི་ཚོགས་དང་། རྟ་པའི་ཚོགས་དང་། ཤིང་རྟ་པའི་ཚོགས་དང་། "
      },
      "seqNum": 15,
      "sliceEndChar": 1560,
      "sliceStartChar": 1417
    }, {
      "@id": "_:b2",
      "chunkContents": {
        "@language": "bo",
        "@value": "རྒྱལ་སྲིད་འབྱོར་པ་རྒྱས་པ་བདེ་བ་ལོ་ལེགས་པ་སྐྱེ་བོ་དང་མི་མང་པོས་གང་བ་བྱེད་དུ་བཅུག་གོ། །"
      },
      "seqNum": 13,
      "sliceEndChar": 1309,
      "sliceStartChar": 1224
    }, {
      "@id": "_:b3",
      "chunkContents": {
        "@language": "bo",
        "@value": "རེས་འགའ་ནི་ཨང་གའི་རྒྱལ་པོ་དཔུང་དང་མཐུ་ཆེ་བ་ཡིན་ལ། རེས་འགའ་ནི་རྒྱལ་པོ་པད་མ་ཆེན་པོ་དཔུང་དང་མཐུ་ཆེ་བ་ཡིན་ནོ། །"
      },
      "seqNum": 14,
      "sliceEndChar": 1416,
      "sliceStartChar": 1310
    }, {
      "@id": "_:b4",
      "chunkContents": {
        "@language": "bo",
        "@value": "ཡུལ་མ་ག་དྷཱ་དག་ན་ཡང་རྒྱལ་པོ་པད་མ་ཆེན་པོ་ཞེས་བྱ་བས། "
      },
      "seqNum": 12,
      "sliceEndChar": 1223,
      "sliceStartChar": 1172
    }, {
      "@id": "bdr:UTDEMO_01",
      "eTextHasChunk": ["_:b3", "_:b4", "_:b1", "_:b2", "_:b0"]
    }],
    "@context": "http://purl.bdrc.io/context.jsonld"
  },
  "http://purl.bdrc.io/graph/Chunks?I_LIM=5&R_RES=bdr:UTDEMO_01&I_SEQ=16": {
    "@graph": [{
      "@id": "_:b0",
      "chunkContents": {
        "@language": "bo",
        "@value": "གླང་པོ་ཆེ་པའི་ཚོགས་དང་། རྟ་པའི་ཚོགས་དང་། ཤིང་རྟ་པའི་ཚོགས་དང་། དཔུང་བུ་ཆུང་གི་ཚོགས་གོ་བསྐོན་ཏེ།"
      },
      "seqNum": 18,
      "sliceEndChar": 1847,
      "sliceStartChar": 1753
    }, {
      "@id": "_:b1",
      "chunkContents": {
        "@language": "bo",
        "@value": "དཔུང་བུ་ཆུང་གི་ཚོགས་གོ་བསྐོན་ཏེ། ཡུལ་མ་ག་དྷཱ་རྒྱལ་པོའི་ཁབ་མ་གཏོགས་པ་བཅོམ་ནས་ཕྱིར་ལྡོག་པར་བྱེད་དོ། །"
      },
      "seqNum": 16,
      "sliceEndChar": 1660,
      "sliceStartChar": 1561
    }, {
      "@id": "_:b2",
      "chunkContents": {
        "@language": "bo",
        "@value": "གང་གི་ཚེ་རྒྱལ་པོ་པད་མ་ཆེན་པོ་དཔུང་དང་མཐུ་ཆེ་བ་དེའི་ཚེ་ན། དེས་ཀྱང་དཔུང་གི་ཚོགས་ཡན་ལག་བཞི་པ། "
      },
      "seqNum": 17,
      "sliceEndChar": 1752,
      "sliceStartChar": 1661
    }, {
      "@id": "bdr:UTDEMO_01",
      "eTextHasChunk": ["_:b0", "_:b1", "_:b2"]
    }],
    "@context": "http://purl.bdrc.io/context.jsonld"
  },
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
  "http://purl.bdrc.io/anncollection/ANCUTDEMO_V01_001/pageForRange?range=1-551": {
    "@context": ["http://purl.bdrc.io/context.jsonld", "http://www.w3.org/ns/anno.jsonld"],
    "id": "http://purl.bdrc.io/anncollection/ANCUTDEMO_V01_001/pd/1?range=1-551",
    "type": "AnnotationPage",
    "items": [{
      "id": "http://purl.bdrc.io/annotation/ANUTDEMO_V01_001_0001",
      "type": "Annotation",
      "annInLayer": {
        "id": "http://purl.bdrc.io/anncollection/ANCUTDEMO_V01_001"
      },
      "creator": null,
      "rights": null,
      "audience": null,
      "generator": null,
      "canonical": null,
      "body": [{
        "type": "WorkLocation",
        "workLocationPage": 3,
        "workLocationVolume": 1,
        "workLocationWork": ["bdr:W22084", "bdr:W30532", "bdr:W4CZ5369"]
      }, {
        "type": "WorkLocation",
        "workLocationPage": 1,
        "workLocationPageName": "1a",
        "workLocationVolume": 1,
        "workLocationWork": "bdr:WUTDEMO"
      }],
      "target": {
        "type": "WorkLocation",
        "workLocationChar": 1,
        "workLocationEndChar": 26,
        "workLocationVolume": 1,
        "workLocationWork": "bdr:WUTDEMO"
      },
      "motivation": "PageMapping",
      "via": null
    }, {
      "id": "http://purl.bdrc.io/annotation/ANUTDEMO_V01_001_0002",
      "type": "Annotation",
      "annInLayer": {
        "id": "http://purl.bdrc.io/anncollection/ANCUTDEMO_V01_001"
      },
      "creator": null,
      "rights": null,
      "audience": null,
      "generator": null,
      "canonical": null,
      "body": [{
        "type": "WorkLocation",
        "workLocationPage": 2,
        "workLocationPageName": "1b",
        "workLocationVolume": 1,
        "workLocationWork": "bdr:WUTDEMO"
      }, {
        "type": "WorkLocation",
        "workLocationPage": 4,
        "workLocationVolume": 1,
        "workLocationWork": ["bdr:W22084", "bdr:W30532", "bdr:W4CZ5369"]
      }],
      "target": {
        "type": "WorkLocation",
        "workLocationChar": 27,
        "workLocationEndChar": 675,
        "workLocationVolume": 1,
        "workLocationWork": "bdr:WUTDEMO"
      },
      "motivation": "PageMapping",
      "via": null
    }],
    "partOf": {
      "@id": "bdac:ANCUTDEMO_V01_001",
      "type": "AnnotationLayer",
      "layerForResource": {
        "@id": "bdr:UTDEMO_01"
      },
      "layerType": {
        "@id": "bdr:LayerPageMapping"
      },
      "rdfs:label": {
        "@language": "en",
        "@value": "Page mapping information for bdr:UTDEMO_01"
      },
      "http://www.w3.org/ns/activitystreams#totalItems": 22
    }
  },
  "http://purl.bdrc.io/anncollection/ANCUTDEMO_V01_001/pageForRange?range=552-1104": {
    "@context": ["http://purl.bdrc.io/context.jsonld", "http://www.w3.org/ns/anno.jsonld"],
    "id": "http://purl.bdrc.io/anncollection/ANCUTDEMO_V01_001/pd/1?range=552-1104",
    "type": "AnnotationPage",
    "items": [{
      "id": "http://purl.bdrc.io/annotation/ANUTDEMO_V01_001_0002",
      "type": "Annotation",
      "annInLayer": {
        "id": "http://purl.bdrc.io/anncollection/ANCUTDEMO_V01_001"
      },
      "creator": null,
      "rights": null,
      "audience": null,
      "generator": null,
      "canonical": null,
      "body": [{
        "type": "WorkLocation",
        "workLocationPage": 2,
        "workLocationPageName": "1b",
        "workLocationVolume": 1,
        "workLocationWork": "bdr:WUTDEMO"
      }, {
        "type": "WorkLocation",
        "workLocationPage": 4,
        "workLocationVolume": 1,
        "workLocationWork": ["bdr:W22084", "bdr:W30532", "bdr:W4CZ5369"]
      }],
      "target": {
        "type": "WorkLocation",
        "workLocationChar": 27,
        "workLocationEndChar": 675,
        "workLocationVolume": 1,
        "workLocationWork": "bdr:WUTDEMO"
      },
      "motivation": "PageMapping",
      "via": null
    }, {
      "id": "http://purl.bdrc.io/annotation/ANUTDEMO_V01_001_0003",
      "type": "Annotation",
      "annInLayer": {
        "id": "http://purl.bdrc.io/anncollection/ANCUTDEMO_V01_001"
      },
      "creator": null,
      "rights": null,
      "audience": null,
      "generator": null,
      "canonical": null,
      "body": [{
        "type": "WorkLocation",
        "workLocationPage": 5,
        "workLocationVolume": 1,
        "workLocationWork": ["bdr:W22084", "bdr:W30532", "bdr:W4CZ5369"]
      }, {
        "type": "WorkLocation",
        "workLocationPage": 3,
        "workLocationPageName": "2a",
        "workLocationVolume": 1,
        "workLocationWork": "bdr:WUTDEMO"
      }],
      "target": {
        "type": "WorkLocation",
        "workLocationChar": 676,
        "workLocationEndChar": 1847,
        "workLocationVolume": 1,
        "workLocationWork": "bdr:WUTDEMO"
      },
      "motivation": "PageMapping",
      "via": null
    }],
    "partOf": {
      "@id": "bdac:ANCUTDEMO_V01_001",
      "type": "AnnotationLayer",
      "layerForResource": {
        "@id": "bdr:UTDEMO_01"
      },
      "layerType": {
        "@id": "bdr:LayerPageMapping"
      },
      "rdfs:label": {
        "@language": "en",
        "@value": "Page mapping information for bdr:UTDEMO_01"
      },
      "http://www.w3.org/ns/activitystreams#totalItems": 22
    }
  },
  "http://purl.bdrc.io/anncollection/ANCUTDEMO_V01_001/pageForRange?range=1-1104": {
    "@context": ["http://purl.bdrc.io/context.jsonld", "http://www.w3.org/ns/anno.jsonld"],
    "id": "http://purl.bdrc.io/anncollection/ANCUTDEMO_V01_001/pd/1?range=1-1104",
    "type": "AnnotationPage",
    "items": [{
      "id": "http://purl.bdrc.io/annotation/ANUTDEMO_V01_001_0001",
      "type": "Annotation",
      "annInLayer": {
        "id": "http://purl.bdrc.io/anncollection/ANCUTDEMO_V01_001"
      },
      "creator": null,
      "rights": null,
      "audience": null,
      "generator": null,
      "canonical": null,
      "body": [{
        "type": "WorkLocation",
        "workLocationPage": 3,
        "workLocationVolume": 1,
        "workLocationWork": ["bdr:W22084", "bdr:W30532", "bdr:W4CZ5369"]
      }, {
        "type": "WorkLocation",
        "workLocationPage": 1,
        "workLocationPageName": "1a",
        "workLocationVolume": 1,
        "workLocationWork": "bdr:WUTDEMO"
      }],
      "target": {
        "type": "WorkLocation",
        "workLocationChar": 1,
        "workLocationEndChar": 26,
        "workLocationVolume": 1,
        "workLocationWork": "bdr:WUTDEMO"
      },
      "motivation": "PageMapping",
      "via": null
    }, {
      "id": "http://purl.bdrc.io/annotation/ANUTDEMO_V01_001_0002",
      "type": "Annotation",
      "annInLayer": {
        "id": "http://purl.bdrc.io/anncollection/ANCUTDEMO_V01_001"
      },
      "creator": null,
      "rights": null,
      "audience": null,
      "generator": null,
      "canonical": null,
      "body": [{
        "type": "WorkLocation",
        "workLocationPage": 2,
        "workLocationPageName": "1b",
        "workLocationVolume": 1,
        "workLocationWork": "bdr:WUTDEMO"
      }, {
        "type": "WorkLocation",
        "workLocationPage": 4,
        "workLocationVolume": 1,
        "workLocationWork": ["bdr:W22084", "bdr:W30532", "bdr:W4CZ5369"]
      }],
      "target": {
        "type": "WorkLocation",
        "workLocationChar": 27,
        "workLocationEndChar": 675,
        "workLocationVolume": 1,
        "workLocationWork": "bdr:WUTDEMO"
      },
      "motivation": "PageMapping",
      "via": null
    }, {
      "id": "http://purl.bdrc.io/annotation/ANUTDEMO_V01_001_0003",
      "type": "Annotation",
      "annInLayer": {
        "id": "http://purl.bdrc.io/anncollection/ANCUTDEMO_V01_001"
      },
      "creator": null,
      "rights": null,
      "audience": null,
      "generator": null,
      "canonical": null,
      "body": [{
        "type": "WorkLocation",
        "workLocationPage": 5,
        "workLocationVolume": 1,
        "workLocationWork": ["bdr:W22084", "bdr:W30532", "bdr:W4CZ5369"]
      }, {
        "type": "WorkLocation",
        "workLocationPage": 3,
        "workLocationPageName": "2a",
        "workLocationVolume": 1,
        "workLocationWork": "bdr:WUTDEMO"
      }],
      "target": {
        "type": "WorkLocation",
        "workLocationChar": 676,
        "workLocationEndChar": 1847,
        "workLocationVolume": 1,
        "workLocationWork": "bdr:WUTDEMO"
      },
      "motivation": "PageMapping",
      "via": null
    }],
    "partOf": {
      "@id": "bdac:ANCUTDEMO_V01_001",
      "type": "AnnotationLayer",
      "layerForResource": {
        "@id": "bdr:UTDEMO_01"
      },
      "layerType": {
        "@id": "bdr:LayerPageMapping"
      },
      "rdfs:label": {
        "@language": "en",
        "@value": "Page mapping information for bdr:UTDEMO_01"
      },
      "http://www.w3.org/ns/activitystreams#totalItems": 22
    }
  },
  "http://purl.bdrc.io/anncollection/ANCUTDEMO_V01_001/pageForRange?range=1-1560": {
    "@context": ["http://purl.bdrc.io/context.jsonld", "http://www.w3.org/ns/anno.jsonld"],
    "id": "http://purl.bdrc.io/anncollection/ANCUTDEMO_V01_001/pd/1?range=1-1560",
    "type": "AnnotationPage",
    "items": [{
      "id": "http://purl.bdrc.io/annotation/ANUTDEMO_V01_001_0001",
      "type": "Annotation",
      "annInLayer": {
        "id": "http://purl.bdrc.io/anncollection/ANCUTDEMO_V01_001"
      },
      "creator": null,
      "rights": null,
      "audience": null,
      "generator": null,
      "canonical": null,
      "body": [{
        "type": "WorkLocation",
        "workLocationPage": 3,
        "workLocationVolume": 1,
        "workLocationWork": ["bdr:W22084", "bdr:W30532", "bdr:W4CZ5369"]
      }, {
        "type": "WorkLocation",
        "workLocationPage": 1,
        "workLocationPageName": "1a",
        "workLocationVolume": 1,
        "workLocationWork": "bdr:WUTDEMO"
      }],
      "target": {
        "type": "WorkLocation",
        "workLocationChar": 1,
        "workLocationEndChar": 26,
        "workLocationVolume": 1,
        "workLocationWork": "bdr:WUTDEMO"
      },
      "motivation": "PageMapping",
      "via": null
    }, {
      "id": "http://purl.bdrc.io/annotation/ANUTDEMO_V01_001_0002",
      "type": "Annotation",
      "annInLayer": {
        "id": "http://purl.bdrc.io/anncollection/ANCUTDEMO_V01_001"
      },
      "creator": null,
      "rights": null,
      "audience": null,
      "generator": null,
      "canonical": null,
      "body": [{
        "type": "WorkLocation",
        "workLocationPage": 2,
        "workLocationPageName": "1b",
        "workLocationVolume": 1,
        "workLocationWork": "bdr:WUTDEMO"
      }, {
        "type": "WorkLocation",
        "workLocationPage": 4,
        "workLocationVolume": 1,
        "workLocationWork": ["bdr:W22084", "bdr:W30532", "bdr:W4CZ5369"]
      }],
      "target": {
        "type": "WorkLocation",
        "workLocationChar": 27,
        "workLocationEndChar": 675,
        "workLocationVolume": 1,
        "workLocationWork": "bdr:WUTDEMO"
      },
      "motivation": "PageMapping",
      "via": null
    }, {
      "id": "http://purl.bdrc.io/annotation/ANUTDEMO_V01_001_0003",
      "type": "Annotation",
      "annInLayer": {
        "id": "http://purl.bdrc.io/anncollection/ANCUTDEMO_V01_001"
      },
      "creator": null,
      "rights": null,
      "audience": null,
      "generator": null,
      "canonical": null,
      "body": [{
        "type": "WorkLocation",
        "workLocationPage": 5,
        "workLocationVolume": 1,
        "workLocationWork": ["bdr:W22084", "bdr:W30532", "bdr:W4CZ5369"]
      }, {
        "type": "WorkLocation",
        "workLocationPage": 3,
        "workLocationPageName": "2a",
        "workLocationVolume": 1,
        "workLocationWork": "bdr:WUTDEMO"
      }],
      "target": {
        "type": "WorkLocation",
        "workLocationChar": 676,
        "workLocationEndChar": 1847,
        "workLocationVolume": 1,
        "workLocationWork": "bdr:WUTDEMO"
      },
      "motivation": "PageMapping",
      "via": null
    }],
    "partOf": {
      "@id": "bdac:ANCUTDEMO_V01_001",
      "type": "AnnotationLayer",
      "layerForResource": {
        "@id": "bdr:UTDEMO_01"
      },
      "layerType": {
        "@id": "bdr:LayerPageMapping"
      },
      "rdfs:label": {
        "@language": "en",
        "@value": "Page mapping information for bdr:UTDEMO_01"
      },
      "http://www.w3.org/ns/activitystreams#totalItems": 22
    }
  },
  "http://purl.bdrc.io/anncollection/ANCUTDEMO_V01_001/pageForRange?range=1-1847": {
    "@context": ["http://purl.bdrc.io/context.jsonld", "http://www.w3.org/ns/anno.jsonld"],
    "id": "http://purl.bdrc.io/anncollection/ANCUTDEMO_V01_001/pd/1?range=1-1104",
    "type": "AnnotationPage",
    "items": [{
      "id": "http://purl.bdrc.io/annotation/ANUTDEMO_V01_001_0001",
      "type": "Annotation",
      "annInLayer": {
        "id": "http://purl.bdrc.io/anncollection/ANCUTDEMO_V01_001"
      },
      "creator": null,
      "rights": null,
      "audience": null,
      "generator": null,
      "canonical": null,
      "body": [{
        "type": "WorkLocation",
        "workLocationPage": 3,
        "workLocationVolume": 1,
        "workLocationWork": ["bdr:W22084", "bdr:W30532", "bdr:W4CZ5369"]
      }, {
        "type": "WorkLocation",
        "workLocationPage": 1,
        "workLocationPageName": "1a",
        "workLocationVolume": 1,
        "workLocationWork": "bdr:WUTDEMO"
      }],
      "target": {
        "type": "WorkLocation",
        "workLocationChar": 1,
        "workLocationEndChar": 26,
        "workLocationVolume": 1,
        "workLocationWork": "bdr:WUTDEMO"
      },
      "motivation": "PageMapping",
      "via": null
    }, {
      "id": "http://purl.bdrc.io/annotation/ANUTDEMO_V01_001_0002",
      "type": "Annotation",
      "annInLayer": {
        "id": "http://purl.bdrc.io/anncollection/ANCUTDEMO_V01_001"
      },
      "creator": null,
      "rights": null,
      "audience": null,
      "generator": null,
      "canonical": null,
      "body": [{
        "type": "WorkLocation",
        "workLocationPage": 2,
        "workLocationPageName": "1b",
        "workLocationVolume": 1,
        "workLocationWork": "bdr:WUTDEMO"
      }, {
        "type": "WorkLocation",
        "workLocationPage": 4,
        "workLocationVolume": 1,
        "workLocationWork": ["bdr:W22084", "bdr:W30532", "bdr:W4CZ5369"]
      }],
      "target": {
        "type": "WorkLocation",
        "workLocationChar": 27,
        "workLocationEndChar": 675,
        "workLocationVolume": 1,
        "workLocationWork": "bdr:WUTDEMO"
      },
      "motivation": "PageMapping",
      "via": null
    }, {
      "id": "http://purl.bdrc.io/annotation/ANUTDEMO_V01_001_0003",
      "type": "Annotation",
      "annInLayer": {
        "id": "http://purl.bdrc.io/anncollection/ANCUTDEMO_V01_001"
      },
      "creator": null,
      "rights": null,
      "audience": null,
      "generator": null,
      "canonical": null,
      "body": [{
        "type": "WorkLocation",
        "workLocationPage": 5,
        "workLocationVolume": 1,
        "workLocationWork": ["bdr:W22084", "bdr:W30532", "bdr:W4CZ5369"]
      }, {
        "type": "WorkLocation",
        "workLocationPage": 3,
        "workLocationPageName": "2a",
        "workLocationVolume": 1,
        "workLocationWork": "bdr:WUTDEMO"
      }],
      "target": {
        "type": "WorkLocation",
        "workLocationChar": 676,
        "workLocationEndChar": 1847,
        "workLocationVolume": 1,
        "workLocationWork": "bdr:WUTDEMO"
      },
      "motivation": "PageMapping",
      "via": null
    }],
    "partOf": {
      "@id": "bdac:ANCUTDEMO_V01_001",
      "type": "AnnotationLayer",
      "layerForResource": {
        "@id": "bdr:UTDEMO_01"
      },
      "layerType": {
        "@id": "bdr:LayerPageMapping"
      },
      "rdfs:label": {
        "@language": "en",
        "@value": "Page mapping information for bdr:UTDEMO_01"
      },
      "http://www.w3.org/ns/activitystreams#totalItems": 22
    }
  },
  "http://purl.bdrc.io/anncollection/ANCUTDEMO_HIG001/pageForRange?range=1-551": {
    "@context": ["http://purl.bdrc.io/context.jsonld", "http://www.w3.org/ns/anno.jsonld"],
    "id": "http://purl.bdrc.io/anncollection/ANCUTDEMO_HIG001/pd/1?range=1-551",
    "type": "AnnotationPage",
    "items": [{
      "@context": ["http://purl.bdrc.io/context.jsonld", "http://www.w3.org/ns/anno.jsonld"],
      "id": "http://purl.bdrc.io/annotation/ANUTDEMO_HIG001_001",
      "type": "Annotation",
      "annInLayer": {
        "id": "http://purl.bdrc.io/anncollection/ANCUTDEMO_HIG001"
      },
      "target": {
        "type": "WorkLocation",
        "workLocationChar": 328,
        "workLocationEndChar": 347,
        "workLocationVolume": 1,
        "workLocationWork": "bdr:WUTDEMO"
      },
      "body": {},
      "motivation": "highlighting",
      "via": null
    }, "partOf"]
  },
  "http://purl.bdrc.io/anncollection/ANCUTDEMO_HIG001/pageForRange?range=1-1104": {
    "@context": ["http://purl.bdrc.io/context.jsonld", "http://www.w3.org/ns/anno.jsonld"],
    "id": "http://purl.bdrc.io/anncollection/ANCUTDEMO_HIG001/pd/1?range=1-1104",
    "type": "AnnotationPage",
    "items": [{
      "@context": ["http://purl.bdrc.io/context.jsonld", "http://www.w3.org/ns/anno.jsonld"],
      "id": "http://purl.bdrc.io/annotation/ANUTDEMO_HIG001_001",
      "type": "Annotation",
      "annInLayer": {
        "id": "http://purl.bdrc.io/anncollection/ANCUTDEMO_HIG001"
      },
      "target": {
        "type": "WorkLocation",
        "workLocationChar": 328,
        "workLocationEndChar": 347,
        "workLocationVolume": 1,
        "workLocationWork": "bdr:WUTDEMO"
      },
      "body": {},
      "motivation": "highlighting",
      "via": null
    }, "partOf"]
  },
  "http://purl.bdrc.io/anncollection/ANCUTDEMO_HIG001/pageForRange?range=1-1560": {
    "@context": ["http://purl.bdrc.io/context.jsonld", "http://www.w3.org/ns/anno.jsonld"],
    "id": "http://purl.bdrc.io/anncollection/ANCUTDEMO_HIG001/pd/1?range=1-1560",
    "type": "AnnotationPage",
    "items": [{
      "@context": ["http://purl.bdrc.io/context.jsonld", "http://www.w3.org/ns/anno.jsonld"],
      "id": "http://purl.bdrc.io/annotation/ANUTDEMO_HIG001_001",
      "type": "Annotation",
      "annInLayer": {
        "id": "http://purl.bdrc.io/anncollection/ANCUTDEMO_HIG001"
      },
      "target": {
        "type": "WorkLocation",
        "workLocationChar": 328,
        "workLocationEndChar": 347,
        "workLocationVolume": 1,
        "workLocationWork": "bdr:WUTDEMO"
      },
      "body": {},
      "motivation": "highlighting",
      "via": null
    }, "partOf"]
  },
  "http://purl.bdrc.io/anncollection/ANCUTDEMO_HIG001/pageForRange?range=1-1847": {
    "@context": ["http://purl.bdrc.io/context.jsonld", "http://www.w3.org/ns/anno.jsonld"],
    "id": "http://purl.bdrc.io/anncollection/ANCUTDEMO_HIG001/pd/1?range=1-1847",
    "type": "AnnotationPage",
    "items": [{
      "@context": ["http://purl.bdrc.io/context.jsonld", "http://www.w3.org/ns/anno.jsonld"],
      "id": "http://purl.bdrc.io/annotation/ANUTDEMO_HIG001_001",
      "type": "Annotation",
      "annInLayer": {
        "id": "http://purl.bdrc.io/anncollection/ANCUTDEMO_HIG001"
      },
      "target": {
        "type": "WorkLocation",
        "workLocationChar": 328,
        "workLocationEndChar": 347,
        "workLocationVolume": 1,
        "workLocationWork": "bdr:WUTDEMO"
      },
      "body": {},
      "motivation": "highlighting",
      "via": null
    }, "partOf"]
  },
  "http://purl.bdrc.io/anncollection/ANCUTDEMO_NER001/pageForRange?range=1-551": {
    "@context": ["http://purl.bdrc.io/context.jsonld", "http://www.w3.org/ns/anno.jsonld"],
    "id": "http://purl.bdrc.io/anncollection/ANCUTDEMO_NER001/pd/1?range=1-551",
    "type": "AnnotationPage",
    "items": [{
      "id": "http://purl.bdrc.io/annotation/ANUTDEMO_NER001_001",
      "type": "Annotation",
      "body": {
        "id": "bdr:W4CZ16824",
        "type": "Work",
        "adm:access": "bdr:AccessOpen",
        "adm:gitRevision": "2d58f8275303110e5f9e7b9ce71cc7b1c9e5445b",
        "adm:license": "bdr:LicensePublicDomain",
        "adm:status": "bdr:StatusReleased",
        "creatorPandita": ["bdr:P8211", "bdr:P8249", "bdr:P00KG07267"],
        "creatorReviserOfTranslation": "bdr:P4CZ10511",
        "creatorTranslator": "bdr:P4259",
        "workCreator": ["bdr:P4CZ10511", "bdr:P8249", "bdr:P00KG07267", "bdr:P4259", "bdr:P8211"],
        "workGenre": "bdr:T769",
        "workHasExpression": "bdr:W0RKT0001",
        "workIsAbout": "bdr:T55",
        "workLangScript": ["bdr:Sa", "bdr:LanguageTaxonomy"],
        "workType": "bdr:WorkTypeAbstractWork",
        "skos:prefLabel": [{
          "@language": "sa-x-iast",
          "@value": "vinayavastu"
        }, {
          "@language": "bo-x-ewts",
          "@value": "'dul ba'i gzhi/"
        }]
      },
      "target": {
        "type": "WorkLocation",
        "workLocationChar": 61,
        "workLocationEndChar": 72,
        "workLocationVolume": 1,
        "workLocationWork": "bdr:WUTDEMO"
      },
      "motivation": "identifying"
    }],
    "next": null,
    "partOf": {
      "id": "http://purl.bdrc.io/anncollection/ANCUTDEMO_NER001",
      "type": ["AnnotationCollection", "AnnotationLayer"],
      "layerForResource": {
        "id": "bdr:UTDEMO_01"
      },
      "layerType": {
        "id": "bdr:LayerNER"
      },
      "label": {
        "@language": "en",
        "@value": "NER annotations for bdr:UTDEMO_01"
      },
      "as:totalItems": 4
    },
    "prev": null,
    "as:startIndex": 0
  },
  "http://purl.bdrc.io/anncollection/ANCUTDEMO_NER001/pageForRange?range=552-1104": {
    "@context": ["http://purl.bdrc.io/context.jsonld", "http://www.w3.org/ns/anno.jsonld"],
    "id": "http://purl.bdrc.io/anncollection/ANCUTDEMO_NER001/pd/1?range=552-1104",
    "type": "AnnotationPage",
    "items": [{
      "id": "http://purl.bdrc.io/annotation/ANUTDEMO_NER001_002",
      "type": "Annotation",
      "body": {
        "id": "bdr:GDEMO001",
        "type": "Place",
        "skos:altLabel": [{
          "@language": "bo",
          "@value": "ཀཽ་ཤམབྷི"
        }, {
          "@language": "bo",
          "@value": "ཀཽ་ཤཱམ་བཱི།"
        }],
        "skos:prefLabel": {
          "@language": "sa-x-iast",
          "@value": "kauśhambhi"
        }
      },
      "target": {
        "id": "_:b2",
        "type": "WorkLocation",
        "workLocationChar": 581,
        "workLocationEndChar": 591,
        "workLocationVolume": 1,
        "workLocationWork": "bdr:WUTDEMO"
      },
      "motivation": "identifying"
    }, {
      "id": "http://purl.bdrc.io/annotation/ANUTDEMO_NER001_003",
      "type": "Annotation",
      "body": {
        "id": "_:b1",
        "rdfs:comment": {
          "@language": "en",
          "@value": "Are we sure about that?"
        }
      },
      "target": {
        "id": "http://purl.bdrc.io/annotation/ANUTDEMO_NER001_002",
        "type": "Annotation",
        "body": {
          "id": "bdr:GDEMO001",
          "type": "Place",
          "skos:altLabel": [{
            "@language": "bo",
            "@value": "ཀཽ་ཤམབྷི"
          }, {
            "@language": "bo",
            "@value": "ཀཽ་ཤཱམ་བཱི།"
          }],
          "skos:prefLabel": {
            "@language": "sa-x-iast",
            "@value": "kauśhambhi"
          }
        },
        "target": {
          "id": "_:b2",
          "type": "WorkLocation",
          "workLocationChar": 581,
          "workLocationEndChar": 591,
          "workLocationVolume": 1,
          "workLocationWork": "bdr:WUTDEMO"
        },
        "motivation": "identifying"
      },
      "motivation": "questioning"
    }, {
      "id": "http://purl.bdrc.io/annotation/ANUTDEMO_NER001_004",
      "type": "Annotation",
      "body": [{
        "type": "TextualBody",
        "rdfs:comment": {
          "@language": "en",
          "@value": "Well, yeah, sort of"
        }
      }, {
        "type": "TextualBody",
        "rdfs:comment": {
          "@language": "en",
          "@value": "Well, yeah, sort of"
        }
      }],
      "target": {
        "id": "http://purl.bdrc.io/annotation/ANUTDEMO_NER001_003",
        "type": "Annotation",
        "body": {
          "id": "_:b1",
          "rdfs:comment": {
            "@language": "en",
            "@value": "Are we sure about that?"
          }
        },
        "target": {
          "id": "http://purl.bdrc.io/annotation/ANUTDEMO_NER001_002",
          "type": "Annotation",
          "body": {
            "id": "bdr:GDEMO001",
            "type": "Place",
            "skos:altLabel": [{
              "@language": "bo",
              "@value": "ཀཽ་ཤམབྷི"
            }, {
              "@language": "bo",
              "@value": "ཀཽ་ཤཱམ་བཱི།"
            }],
            "skos:prefLabel": {
              "@language": "sa-x-iast",
              "@value": "kauśhambhi"
            }
          },
          "target": {
            "id": "_:b2",
            "type": "WorkLocation",
            "workLocationChar": 581,
            "workLocationEndChar": 591,
            "workLocationVolume": 1,
            "workLocationWork": "bdr:WUTDEMO"
          },
          "motivation": "identifying"
        },
        "motivation": "questioning"
      },
      "motivation": "replying"
    }],
    "next": null,
    "partOf": {
      "id": "http://purl.bdrc.io/anncollection/ANCUTDEMO_NER001",
      "type": ["AnnotationCollection", "AnnotationLayer"],
      "layerForResource": {
        "id": "bdr:UTDEMO_01"
      },
      "layerType": {
        "id": "bdr:LayerNER"
      },
      "label": {
        "@language": "en",
        "@value": "NER annotations for bdr:UTDEMO_01"
      },
      "as:totalItems": 4
    },
    "prev": null,
    "as:startIndex": 0
  },
  "http://purl.bdrc.io/anncollection/ANCUTDEMO_NER001/pageForRange?range=1-1000": {
    "@context": ["http://purl.bdrc.io/context.jsonld", "http://www.w3.org/ns/anno.jsonld"],
    "id": "http://purl.bdrc.io/anncollection/ANCUTDEMO_NER001/pd/1?range=1-1000",
    "type": "AnnotationPage",
    "items": [{
      "id": "http://purl.bdrc.io/annotation/ANUTDEMO_NER001_001",
      "type": "Annotation",
      "body": {
        "id": "bdr:W4CZ16824",
        "type": "Work",
        "adm:access": "bdr:AccessOpen",
        "adm:gitRevision": "2d58f8275303110e5f9e7b9ce71cc7b1c9e5445b",
        "adm:license": "bdr:LicensePublicDomain",
        "adm:status": "bdr:StatusReleased",
        "creatorPandita": ["bdr:P8211", "bdr:P8249", "bdr:P00KG07267"],
        "creatorReviserOfTranslation": "bdr:P4CZ10511",
        "creatorTranslator": "bdr:P4259",
        "workCreator": ["bdr:P4CZ10511", "bdr:P8249", "bdr:P00KG07267", "bdr:P4259", "bdr:P8211"],
        "workGenre": "bdr:T769",
        "workHasExpression": "bdr:W0RKT0001",
        "workIsAbout": "bdr:T55",
        "workLangScript": ["bdr:Sa", "bdr:LanguageTaxonomy"],
        "workType": "bdr:WorkTypeAbstractWork",
        "skos:prefLabel": [{
          "@language": "sa-x-iast",
          "@value": "vinayavastu"
        }, {
          "@language": "bo-x-ewts",
          "@value": "'dul ba'i gzhi/"
        }]
      },
      "target": {
        "type": "WorkLocation",
        "workLocationChar": 61,
        "workLocationEndChar": 72,
        "workLocationVolume": 1,
        "workLocationWork": "bdr:WUTDEMO"
      },
      "motivation": "identifying"
    }, {
      "id": "http://purl.bdrc.io/annotation/ANUTDEMO_NER001_002",
      "type": "Annotation",
      "body": {
        "id": "bdr:GDEMO001",
        "type": "Place",
        "skos:altLabel": [{
          "@language": "bo",
          "@value": "ཀཽ་ཤམབྷི"
        }, {
          "@language": "bo",
          "@value": "ཀཽ་ཤཱམ་བཱི།"
        }],
        "skos:prefLabel": {
          "@language": "sa-x-iast",
          "@value": "kauśhambhi"
        }
      },
      "target": {
        "id": "_:b2",
        "type": "WorkLocation",
        "workLocationChar": 581,
        "workLocationEndChar": 591,
        "workLocationVolume": 1,
        "workLocationWork": "bdr:WUTDEMO"
      },
      "motivation": "identifying"
    }, {
      "id": "http://purl.bdrc.io/annotation/ANUTDEMO_NER001_003",
      "type": "Annotation",
      "body": {
        "id": "_:b1",
        "rdfs:comment": {
          "@language": "en",
          "@value": "Are we sure about that?"
        }
      },
      "target": {
        "id": "http://purl.bdrc.io/annotation/ANUTDEMO_NER001_002",
        "type": "Annotation",
        "body": {
          "id": "bdr:GDEMO001",
          "type": "Place",
          "skos:altLabel": [{
            "@language": "bo",
            "@value": "ཀཽ་ཤམབྷི"
          }, {
            "@language": "bo",
            "@value": "ཀཽ་ཤཱམ་བཱི།"
          }],
          "skos:prefLabel": {
            "@language": "sa-x-iast",
            "@value": "kauśhambhi"
          }
        },
        "target": {
          "id": "_:b2",
          "type": "WorkLocation",
          "workLocationChar": 581,
          "workLocationEndChar": 591,
          "workLocationVolume": 1,
          "workLocationWork": "bdr:WUTDEMO"
        },
        "motivation": "identifying"
      },
      "motivation": "questioning"
    }, {
      "id": "http://purl.bdrc.io/annotation/ANUTDEMO_NER001_004",
      "type": "Annotation",
      "body": [{
        "type": "TextualBody",
        "rdfs:comment": {
          "@language": "en",
          "@value": "Well, yeah, sort of"
        }
      }, {
        "type": "TextualBody",
        "rdfs:comment": {
          "@language": "en",
          "@value": "Well, yeah, sort of"
        }
      }],
      "target": {
        "id": "http://purl.bdrc.io/annotation/ANUTDEMO_NER001_003",
        "type": "Annotation",
        "body": {
          "id": "_:b1",
          "rdfs:comment": {
            "@language": "en",
            "@value": "Are we sure about that?"
          }
        },
        "target": {
          "id": "http://purl.bdrc.io/annotation/ANUTDEMO_NER001_002",
          "type": "Annotation",
          "body": {
            "id": "bdr:GDEMO001",
            "type": "Place",
            "skos:altLabel": [{
              "@language": "bo",
              "@value": "ཀཽ་ཤམབྷི"
            }, {
              "@language": "bo",
              "@value": "ཀཽ་ཤཱམ་བཱི།"
            }],
            "skos:prefLabel": {
              "@language": "sa-x-iast",
              "@value": "kauśhambhi"
            }
          },
          "target": {
            "id": "_:b2",
            "type": "WorkLocation",
            "workLocationChar": 581,
            "workLocationEndChar": 591,
            "workLocationVolume": 1,
            "workLocationWork": "bdr:WUTDEMO"
          },
          "motivation": "identifying"
        },
        "motivation": "questioning"
      },
      "motivation": "replying"
    }],
    "next": null,
    "partOf": {
      "id": "http://purl.bdrc.io/anncollection/ANCUTDEMO_NER001",
      "type": ["AnnotationCollection", "AnnotationLayer"],
      "layerForResource": {
        "id": "bdr:UTDEMO_01"
      },
      "layerType": {
        "id": "bdr:LayerNER"
      },
      "label": {
        "@language": "en",
        "@value": "NER annotations for bdr:UTDEMO_01"
      },
      "as:totalItems": 4
    },
    "prev": null,
    "as:startIndex": 0
  },
  "http://purl.bdrc.io/anncollection/ANCUTDEMO_NER001/pageForRange?range=1-1847": {
    "@context": ["http://purl.bdrc.io/context.jsonld", "http://www.w3.org/ns/anno.jsonld"],
    "id": "http://purl.bdrc.io/anncollection/ANCUTDEMO_NER001/pd/1?range=1-1847",
    "type": "AnnotationPage",
    "items": [{
      "id": "http://purl.bdrc.io/annotation/ANUTDEMO_NER001_001",
      "type": "Annotation",
      "body": {
        "id": "bdr:W4CZ16824",
        "type": "Work",
        "adm:access": "bdr:AccessOpen",
        "adm:gitRevision": "2d58f8275303110e5f9e7b9ce71cc7b1c9e5445b",
        "adm:license": "bdr:LicensePublicDomain",
        "adm:status": "bdr:StatusReleased",
        "creatorPandita": ["bdr:P8211", "bdr:P8249", "bdr:P00KG07267"],
        "creatorReviserOfTranslation": "bdr:P4CZ10511",
        "creatorTranslator": "bdr:P4259",
        "workCreator": ["bdr:P4CZ10511", "bdr:P8249", "bdr:P00KG07267", "bdr:P4259", "bdr:P8211"],
        "workGenre": "bdr:T769",
        "workHasExpression": "bdr:W0RKT0001",
        "workIsAbout": "bdr:T55",
        "workLangScript": ["bdr:Sa", "bdr:LanguageTaxonomy"],
        "workType": "bdr:WorkTypeAbstractWork",
        "skos:prefLabel": [{
          "@language": "sa-x-iast",
          "@value": "vinayavastu"
        }, {
          "@language": "bo-x-ewts",
          "@value": "'dul ba'i gzhi/"
        }]
      },
      "target": {
        "type": "WorkLocation",
        "workLocationChar": 61,
        "workLocationEndChar": 72,
        "workLocationVolume": 1,
        "workLocationWork": "bdr:WUTDEMO"
      },
      "motivation": "identifying"
    }, {
      "id": "http://purl.bdrc.io/annotation/ANUTDEMO_NER001_002",
      "type": "Annotation",
      "body": {
        "id": "bdr:GDEMO001",
        "type": "Place",
        "skos:altLabel": [{
          "@language": "bo",
          "@value": "ཀཽ་ཤམབྷི"
        }, {
          "@language": "bo",
          "@value": "ཀཽ་ཤཱམ་བཱི།"
        }],
        "skos:prefLabel": {
          "@language": "sa-x-iast",
          "@value": "kauśhambhi"
        }
      },
      "target": {
        "id": "_:b2",
        "type": "WorkLocation",
        "workLocationChar": 581,
        "workLocationEndChar": 591,
        "workLocationVolume": 1,
        "workLocationWork": "bdr:WUTDEMO"
      },
      "motivation": "identifying"
    }, {
      "id": "http://purl.bdrc.io/annotation/ANUTDEMO_NER001_003",
      "type": "Annotation",
      "body": {
        "id": "_:b1",
        "rdfs:comment": {
          "@language": "en",
          "@value": "Are we sure about that?"
        }
      },
      "target": {
        "id": "http://purl.bdrc.io/annotation/ANUTDEMO_NER001_002",
        "type": "Annotation",
        "body": {
          "id": "bdr:GDEMO001",
          "type": "Place",
          "skos:altLabel": [{
            "@language": "bo",
            "@value": "ཀཽ་ཤམབྷི"
          }, {
            "@language": "bo",
            "@value": "ཀཽ་ཤཱམ་བཱི།"
          }],
          "skos:prefLabel": {
            "@language": "sa-x-iast",
            "@value": "kauśhambhi"
          }
        },
        "target": {
          "id": "_:b2",
          "type": "WorkLocation",
          "workLocationChar": 581,
          "workLocationEndChar": 591,
          "workLocationVolume": 1,
          "workLocationWork": "bdr:WUTDEMO"
        },
        "motivation": "identifying"
      },
      "motivation": "questioning"
    }, {
      "id": "http://purl.bdrc.io/annotation/ANUTDEMO_NER001_004",
      "type": "Annotation",
      "body": [{
        "type": "TextualBody",
        "rdfs:comment": {
          "@language": "en",
          "@value": "Well, yeah, sort of"
        }
      }, {
        "type": "TextualBody",
        "rdfs:comment": {
          "@language": "en",
          "@value": "Well, yeah, sort of"
        }
      }],
      "target": {
        "id": "http://purl.bdrc.io/annotation/ANUTDEMO_NER001_003",
        "type": "Annotation",
        "body": {
          "id": "_:b1",
          "rdfs:comment": {
            "@language": "en",
            "@value": "Are we sure about that?"
          }
        },
        "target": {
          "id": "http://purl.bdrc.io/annotation/ANUTDEMO_NER001_002",
          "type": "Annotation",
          "body": {
            "id": "bdr:GDEMO001",
            "type": "Place",
            "skos:altLabel": [{
              "@language": "bo",
              "@value": "ཀཽ་ཤམབྷི"
            }, {
              "@language": "bo",
              "@value": "ཀཽ་ཤཱམ་བཱི།"
            }],
            "skos:prefLabel": {
              "@language": "sa-x-iast",
              "@value": "kauśhambhi"
            }
          },
          "target": {
            "id": "_:b2",
            "type": "WorkLocation",
            "workLocationChar": 581,
            "workLocationEndChar": 591,
            "workLocationVolume": 1,
            "workLocationWork": "bdr:WUTDEMO"
          },
          "motivation": "identifying"
        },
        "motivation": "questioning"
      },
      "motivation": "replying"
    }],
    "next": null,
    "partOf": {
      "id": "http://purl.bdrc.io/anncollection/ANCUTDEMO_NER001",
      "type": ["AnnotationCollection", "AnnotationLayer"],
      "layerForResource": {
        "id": "bdr:UTDEMO_01"
      },
      "layerType": {
        "id": "bdr:LayerNER"
      },
      "label": {
        "@language": "en",
        "@value": "NER annotations for bdr:UTDEMO_01"
      },
      "as:totalItems": 4
    },
    "prev": null,
    "as:startIndex": 0
  },
  "http://purl.bdrc.io/anncollection/ANCUTDEMO_NER001/pageForRange?range=1-1104": {
    "@context": ["http://purl.bdrc.io/context.jsonld", "http://www.w3.org/ns/anno.jsonld"],
    "id": "http://purl.bdrc.io/anncollection/ANCUTDEMO_NER001/pd/1?range=1-1104",
    "type": "AnnotationPage",
    "items": [{
      "id": "http://purl.bdrc.io/annotation/ANUTDEMO_NER001_001",
      "type": "Annotation",
      "body": {
        "id": "bdr:W4CZ16824",
        "type": "Work",
        "adm:access": "bdr:AccessOpen",
        "adm:gitRevision": "2d58f8275303110e5f9e7b9ce71cc7b1c9e5445b",
        "adm:license": "bdr:LicensePublicDomain",
        "adm:status": "bdr:StatusReleased",
        "creatorPandita": ["bdr:P8211", "bdr:P8249", "bdr:P00KG07267"],
        "creatorReviserOfTranslation": "bdr:P4CZ10511",
        "creatorTranslator": "bdr:P4259",
        "workCreator": ["bdr:P4CZ10511", "bdr:P8249", "bdr:P00KG07267", "bdr:P4259", "bdr:P8211"],
        "workGenre": "bdr:T769",
        "workHasExpression": "bdr:W0RKT0001",
        "workIsAbout": "bdr:T55",
        "workLangScript": ["bdr:Sa", "bdr:LanguageTaxonomy"],
        "workType": "bdr:WorkTypeAbstractWork",
        "skos:prefLabel": [{
          "@language": "sa-x-iast",
          "@value": "vinayavastu"
        }, {
          "@language": "bo-x-ewts",
          "@value": "'dul ba'i gzhi/"
        }]
      },
      "target": {
        "type": "WorkLocation",
        "workLocationChar": 61,
        "workLocationEndChar": 72,
        "workLocationVolume": 1,
        "workLocationWork": "bdr:WUTDEMO"
      },
      "motivation": "identifying"
    }, {
      "id": "http://purl.bdrc.io/annotation/ANUTDEMO_NER001_002",
      "type": "Annotation",
      "body": {
        "id": "bdr:GDEMO001",
        "type": "Place",
        "skos:altLabel": [{
          "@language": "bo",
          "@value": "ཀཽ་ཤམབྷི"
        }, {
          "@language": "bo",
          "@value": "ཀཽ་ཤཱམ་བཱི།"
        }],
        "skos:prefLabel": {
          "@language": "sa-x-iast",
          "@value": "kauśhambhi"
        }
      },
      "target": {
        "id": "_:b2",
        "type": "WorkLocation",
        "workLocationChar": 581,
        "workLocationEndChar": 591,
        "workLocationVolume": 1,
        "workLocationWork": "bdr:WUTDEMO"
      },
      "motivation": "identifying"
    }, {
      "id": "http://purl.bdrc.io/annotation/ANUTDEMO_NER001_003",
      "type": "Annotation",
      "body": {
        "id": "_:b1",
        "rdfs:comment": {
          "@language": "en",
          "@value": "Are we sure about that?"
        }
      },
      "target": {
        "id": "http://purl.bdrc.io/annotation/ANUTDEMO_NER001_002",
        "type": "Annotation",
        "body": {
          "id": "bdr:GDEMO001",
          "type": "Place",
          "skos:altLabel": [{
            "@language": "bo",
            "@value": "ཀཽ་ཤམབྷི"
          }, {
            "@language": "bo",
            "@value": "ཀཽ་ཤཱམ་བཱི།"
          }],
          "skos:prefLabel": {
            "@language": "sa-x-iast",
            "@value": "kauśhambhi"
          }
        },
        "target": {
          "id": "_:b2",
          "type": "WorkLocation",
          "workLocationChar": 581,
          "workLocationEndChar": 591,
          "workLocationVolume": 1,
          "workLocationWork": "bdr:WUTDEMO"
        },
        "motivation": "identifying"
      },
      "motivation": "questioning"
    }, {
      "id": "http://purl.bdrc.io/annotation/ANUTDEMO_NER001_004",
      "type": "Annotation",
      "body": [{
        "type": "TextualBody",
        "rdfs:comment": {
          "@language": "en",
          "@value": "Well, yeah, sort of"
        }
      }, {
        "type": "TextualBody",
        "rdfs:comment": {
          "@language": "en",
          "@value": "Well, yeah, sort of"
        }
      }],
      "target": {
        "id": "http://purl.bdrc.io/annotation/ANUTDEMO_NER001_003",
        "type": "Annotation",
        "body": {
          "id": "_:b1",
          "rdfs:comment": {
            "@language": "en",
            "@value": "Are we sure about that?"
          }
        },
        "target": {
          "id": "http://purl.bdrc.io/annotation/ANUTDEMO_NER001_002",
          "type": "Annotation",
          "body": {
            "id": "bdr:GDEMO001",
            "type": "Place",
            "skos:altLabel": [{
              "@language": "bo",
              "@value": "ཀཽ་ཤམབྷི"
            }, {
              "@language": "bo",
              "@value": "ཀཽ་ཤཱམ་བཱི།"
            }],
            "skos:prefLabel": {
              "@language": "sa-x-iast",
              "@value": "kauśhambhi"
            }
          },
          "target": {
            "id": "_:b2",
            "type": "WorkLocation",
            "workLocationChar": 581,
            "workLocationEndChar": 591,
            "workLocationVolume": 1,
            "workLocationWork": "bdr:WUTDEMO"
          },
          "motivation": "identifying"
        },
        "motivation": "questioning"
      },
      "motivation": "replying"
    }],
    "next": null,
    "partOf": {
      "id": "http://purl.bdrc.io/anncollection/ANCUTDEMO_NER001",
      "type": ["AnnotationCollection", "AnnotationLayer"],
      "layerForResource": {
        "id": "bdr:UTDEMO_01"
      },
      "layerType": {
        "id": "bdr:LayerNER"
      },
      "label": {
        "@language": "en",
        "@value": "NER annotations for bdr:UTDEMO_01"
      },
      "as:totalItems": 4
    },
    "prev": null,
    "as:startIndex": 0
  },
  "http://purl.bdrc.io/anncollection/ANCUTDEMO_NER001/pageForRange?range=1-1560": {
    "@context": ["http://purl.bdrc.io/context.jsonld", "http://www.w3.org/ns/anno.jsonld"],
    "id": "http://purl.bdrc.io/anncollection/ANCUTDEMO_NER001/pd/1?range=1-1560",
    "type": "AnnotationPage",
    "items": [{
      "id": "http://purl.bdrc.io/annotation/ANUTDEMO_NER001_001",
      "type": "Annotation",
      "body": {
        "id": "bdr:W4CZ16824",
        "type": "Work",
        "adm:access": "bdr:AccessOpen",
        "adm:gitRevision": "2d58f8275303110e5f9e7b9ce71cc7b1c9e5445b",
        "adm:license": "bdr:LicensePublicDomain",
        "adm:status": "bdr:StatusReleased",
        "creatorPandita": ["bdr:P8211", "bdr:P8249", "bdr:P00KG07267"],
        "creatorReviserOfTranslation": "bdr:P4CZ10511",
        "creatorTranslator": "bdr:P4259",
        "workCreator": ["bdr:P4CZ10511", "bdr:P8249", "bdr:P00KG07267", "bdr:P4259", "bdr:P8211"],
        "workGenre": "bdr:T769",
        "workHasExpression": "bdr:W0RKT0001",
        "workIsAbout": "bdr:T55",
        "workLangScript": ["bdr:Sa", "bdr:LanguageTaxonomy"],
        "workType": "bdr:WorkTypeAbstractWork",
        "skos:prefLabel": [{
          "@language": "sa-x-iast",
          "@value": "vinayavastu"
        }, {
          "@language": "bo-x-ewts",
          "@value": "'dul ba'i gzhi/"
        }]
      },
      "target": {
        "type": "WorkLocation",
        "workLocationChar": 61,
        "workLocationEndChar": 72,
        "workLocationVolume": 1,
        "workLocationWork": "bdr:WUTDEMO"
      },
      "motivation": "identifying"
    }, {
      "id": "http://purl.bdrc.io/annotation/ANUTDEMO_NER001_002",
      "type": "Annotation",
      "body": {
        "id": "bdr:GDEMO001",
        "type": "Place",
        "skos:altLabel": [{
          "@language": "bo",
          "@value": "ཀཽ་ཤམབྷི"
        }, {
          "@language": "bo",
          "@value": "ཀཽ་ཤཱམ་བཱི།"
        }],
        "skos:prefLabel": {
          "@language": "sa-x-iast",
          "@value": "kauśhambhi"
        }
      },
      "target": {
        "id": "_:b2",
        "type": "WorkLocation",
        "workLocationChar": 581,
        "workLocationEndChar": 591,
        "workLocationVolume": 1,
        "workLocationWork": "bdr:WUTDEMO"
      },
      "motivation": "identifying"
    }, {
      "id": "http://purl.bdrc.io/annotation/ANUTDEMO_NER001_003",
      "type": "Annotation",
      "body": {
        "id": "_:b1",
        "rdfs:comment": {
          "@language": "en",
          "@value": "Are we sure about that?"
        }
      },
      "target": {
        "id": "http://purl.bdrc.io/annotation/ANUTDEMO_NER001_002",
        "type": "Annotation",
        "body": {
          "id": "bdr:GDEMO001",
          "type": "Place",
          "skos:altLabel": [{
            "@language": "bo",
            "@value": "ཀཽ་ཤམབྷི"
          }, {
            "@language": "bo",
            "@value": "ཀཽ་ཤཱམ་བཱི།"
          }],
          "skos:prefLabel": {
            "@language": "sa-x-iast",
            "@value": "kauśhambhi"
          }
        },
        "target": {
          "id": "_:b2",
          "type": "WorkLocation",
          "workLocationChar": 581,
          "workLocationEndChar": 591,
          "workLocationVolume": 1,
          "workLocationWork": "bdr:WUTDEMO"
        },
        "motivation": "identifying"
      },
      "motivation": "questioning"
    }, {
      "id": "http://purl.bdrc.io/annotation/ANUTDEMO_NER001_004",
      "type": "Annotation",
      "body": [{
        "type": "TextualBody",
        "rdfs:comment": {
          "@language": "en",
          "@value": "Well, yeah, sort of"
        }
      }, {
        "type": "TextualBody",
        "rdfs:comment": {
          "@language": "en",
          "@value": "Well, yeah, sort of"
        }
      }],
      "target": {
        "id": "http://purl.bdrc.io/annotation/ANUTDEMO_NER001_003",
        "type": "Annotation",
        "body": {
          "id": "_:b1",
          "rdfs:comment": {
            "@language": "en",
            "@value": "Are we sure about that?"
          }
        },
        "target": {
          "id": "http://purl.bdrc.io/annotation/ANUTDEMO_NER001_002",
          "type": "Annotation",
          "body": {
            "id": "bdr:GDEMO001",
            "type": "Place",
            "skos:altLabel": [{
              "@language": "bo",
              "@value": "ཀཽ་ཤམབྷི"
            }, {
              "@language": "bo",
              "@value": "ཀཽ་ཤཱམ་བཱི།"
            }],
            "skos:prefLabel": {
              "@language": "sa-x-iast",
              "@value": "kauśhambhi"
            }
          },
          "target": {
            "id": "_:b2",
            "type": "WorkLocation",
            "workLocationChar": 581,
            "workLocationEndChar": 591,
            "workLocationVolume": 1,
            "workLocationWork": "bdr:WUTDEMO"
          },
          "motivation": "identifying"
        },
        "motivation": "questioning"
      },
      "motivation": "replying"
    }],
    "next": null,
    "partOf": {
      "id": "http://purl.bdrc.io/anncollection/ANCUTDEMO_NER001",
      "type": ["AnnotationCollection", "AnnotationLayer"],
      "layerForResource": {
        "id": "bdr:UTDEMO_01"
      },
      "layerType": {
        "id": "bdr:LayerNER"
      },
      "label": {
        "@language": "en",
        "@value": "NER annotations for bdr:UTDEMO_01"
      },
      "as:totalItems": 4
    },
    "prev": null,
    "as:startIndex": 0
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
        "total": 5,
        "service": [{
          "@context": "http://iiif.io/api/search/1/context.json",
          "@id": "http://purl.bdrc.io/anncollection/ANCUTDEMO_NER001/search",
          "profile": "http://iiif.io/api/search/1/search"
        }, {
          "@id": "http://purl.bdrc.io/anncollection/ANCUTDEMO_NER001/pageForRange",
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
      },
      "hints": {
        "access_hint": "read-only",
        "preselect": true
      }
    }, {
      "collection": {
        "@id": "bdac:ANCUTDEMO_HIG001",
        "type": "AnnotationLayer",
        "layerForResource": {
          "@id": "bdr:UTDEMO_01"
        },
        "layerType": [{
          "@id": "bdr:LayerHighlight"
        }, {
          "@id": "bdr:LayerUser"
        }],
        "label": {
          "@language": "en",
          "@value": "User annotations for user 1"
        },
        "http://www.w3.org/ns/activitystreams#totalItems": 22
      }
    }, {
      "collection": {
        "@id": "bdac:ANCUTDEMO_V01_001",
        "type": "AnnotationLayer",
        "layerForResource": {
          "@id": "bdr:UTDEMO_01"
        },
        "layerType": {
          "@id": "bdr:LayerPageMapping"
        },
        "rdfs:label": {
          "@language": "en",
          "@value": "Page mapping information for bdr:UTDEMO_01"
        },
        "http://www.w3.org/ns/activitystreams#totalItems": 22
      }
      /* ,
      {
         "collection": {
           "@id" : "bdac:ANCUTDEMO_V01_002",
           "type" : "AnnotationLayer",
           "layerForResource" : {
             "@id" : "bdr:UTDEMO_01"
           },
           "layerType" : {
             "@id" : "bdr:LayerLineMapping"
           },
           "rdfs:label" : {
             "@language" : "en",
             "@value" : "Line informations for bdr:UTDEMO_01"
           },
           "http://www.w3.org/ns/activitystreams#totalItems" : 22
         }
      } */

    }]
  }
};
var _default = mockdata;
exports.default = _default;

function nock_data(domain, path, query) {
  var n = (0, _nock.default)(domain).persist().defaultReplyHeaders({
    'access-control-allow-origin': '*'
  }).log(console.log).get(path).query(query).reply(200, function (path, requestBody) {
    var uri = domain + path; //console.log("nock",uri);
    //console.log(mockdata[uri]);

    return mockdata[uri];
  });
}

function mock_data(domain, path, query) {
  var uri = domain + path + Object.keys(query).reduce(function (acc, k, i) {
    return acc + (i == 0 ? "?" : "&") + k + "=" + query[k];
  }, "");
  console.log("uri", uri);

  _fetchMock.default.get(uri, function () {
    return mockdata[uri];
  });
}