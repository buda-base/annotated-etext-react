//@flow

import nock from 'nock';

const mockdata: Object = {
    "http://api.bdrc.io/annotations/collectionService": {
        "@context": "http://purl.bdrc.io/ontology/ext/annservice/context.json",
        "@id": "http://api.bdrc.io/annotations/collectionService",
        "profile": "http://purl.bdrc.io/ontology/ext/annservice/collectionService",
        "label": "BDRC Annotations",
        "comment": "BDRC Simple Web Annotation Service",
        "service": [
          {
            "@id": "http://api.bdrc.io/annotations/create",
            "profile": "http://purl.bdrc.io/ontology/ext/annservice/collectionCreate"
          },
          {
            "@id": "http://api.bdrc.io/annotations/collectionSearch",
            "profile": "http://purl.bdrc.io/ontology/ext/annservice/collectionSearch",
            "supports": ["range", "motivation", "res"]
          }
        ]
    },
    "http://api.bdrc.io/annotations/search/bdac:ANCUTDEMO_NER001/?range=1-100": {
      "@context" : [ "http://purl.bdrc.io/context.jsonld", "http://www.w3.org/ns/anno.jsonld" ],
      "id" : "http://purl.bdrc.io/anncollection/ANCUTDEMO_NER001/pd/1?range=1-100",
      "type" : "AnnotationPage",
      "items" : [ {
        "id" : "http://purl.bdrc.io/annotation/ANUTDEMO_NER001_001",
        "type" : "Annotation",
        "body" : {
          "id" : "bdr:W4CZ16824",
          "type" : "Work",
          "adm:access" : "bdr:AccessOpen",
          "adm:gitRevision" : "2d58f8275303110e5f9e7b9ce71cc7b1c9e5445b",
          "adm:license" : "bdr:LicensePublicDomain",
          "adm:status" : "bdr:StatusReleased",
          "creatorPandita" : [ "bdr:P8211", "bdr:P8249", "bdr:P00KG07267" ],
          "creatorReviserOfTranslation" : "bdr:P4CZ10511",
          "creatorTranslator" : "bdr:P4259",
          "workCreator" : [ "bdr:P4CZ10511", "bdr:P8249", "bdr:P00KG07267", "bdr:P4259", "bdr:P8211" ],
          "workGenre" : "bdr:T769",
          "workHasExpression" : "bdr:W0RKT0001",
          "workIsAbout" : "bdr:T55",
          "workLangScript" : [ "bdr:Sa", "bdr:LanguageTaxonomy" ],
          "workType" : "bdr:WorkTypeAbstractWork",
          "skos:prefLabel" : [ {
            "@language" : "sa-x-iast",
            "@value" : "vinayavastu"
          }, {
            "@language" : "bo-x-ewts",
            "@value" : "'dul ba'i gzhi/"
          } ]
        },
        "target" : {
          "type" : "WorkLocation",
          "workLocationChar" : 58,
          "workLocationEndChar" : 69,
          "workLocationVolume" : 1,
          "workLocationWork" : "bdr:WUTDEMO"
        },
        "motivation" : "identifying"
      }, {
        "id" : "http://purl.bdrc.io/annotation/ANUTDEMO_NER001_002",
        "type" : "Annotation",
        "body" : {
          "id" : "bdr:GDEMO001",
          "type" : "Place",
          "skos:altLabel" : [ {
            "@language" : "bo",
            "@value" : "ཀཽ་ཤམབྷི"
          }, {
            "@language" : "bo",
            "@value" : "ཀཽ་ཤཱམ་བཱི།"
          } ],
          "skos:prefLabel" : {
            "@language" : "sa-x-iast",
            "@value" : "kauśhambhi"
          }
        },
        "target" : {
          "id" : "_:b2",
          "type" : "WorkLocation",
          "workLocationChar" : 581,
          "workLocationEndChar" : 591,
          "workLocationVolume" : 1,
          "workLocationWork" : "bdr:WUTDEMO"
        },
        "motivation" : "identifying"
      }, {
        "id" : "http://purl.bdrc.io/annotation/ANUTDEMO_NER001_003",
        "type" : "Annotation",
        "body" : {
          "id" : "_:b1",
          "rdfs:comment" : {
            "@language" : "en",
            "@value" : "Are we sure about that?"
          }
        },
        "target" : {
          "id" : "http://purl.bdrc.io/annotation/ANUTDEMO_NER001_002",
          "type" : "Annotation",
          "body" : {
            "id" : "bdr:GDEMO001",
            "type" : "Place",
            "skos:altLabel" : [ {
              "@language" : "bo",
              "@value" : "ཀཽ་ཤམབྷི"
            }, {
              "@language" : "bo",
              "@value" : "ཀཽ་ཤཱམ་བཱི།"
            } ],
            "skos:prefLabel" : {
              "@language" : "sa-x-iast",
              "@value" : "kauśhambhi"
            }
          },
          "target" : {
            "id" : "_:b2",
            "type" : "WorkLocation",
            "workLocationChar" : 581,
            "workLocationEndChar" : 591,
            "workLocationVolume" : 1,
            "workLocationWork" : "bdr:WUTDEMO"
          },
          "motivation" : "identifying"
        },
        "motivation" : "questioning"
      }, {
        "id" : "http://purl.bdrc.io/annotation/ANUTDEMO_NER001_004",
        "type" : "Annotation",
        "body" : [ {
          "type" : "TextualBody",
          "rdfs:comment" : {
            "@language" : "en",
            "@value" : "Well, yeah, sort of"
          }
        }, {
          "type" : "TextualBody",
          "rdfs:comment" : {
            "@language" : "en",
            "@value" : "Well, yeah, sort of"
          }
        } ],
        "target" : {
          "id" : "http://purl.bdrc.io/annotation/ANUTDEMO_NER001_003",
          "type" : "Annotation",
          "body" : {
            "id" : "_:b1",
            "rdfs:comment" : {
              "@language" : "en",
              "@value" : "Are we sure about that?"
            }
          },
          "target" : {
            "id" : "http://purl.bdrc.io/annotation/ANUTDEMO_NER001_002",
            "type" : "Annotation",
            "body" : {
              "id" : "bdr:GDEMO001",
              "type" : "Place",
              "skos:altLabel" : [ {
                "@language" : "bo",
                "@value" : "ཀཽ་ཤམབྷི"
              }, {
                "@language" : "bo",
                "@value" : "ཀཽ་ཤཱམ་བཱི།"
              } ],
              "skos:prefLabel" : {
                "@language" : "sa-x-iast",
                "@value" : "kauśhambhi"
              }
            },
            "target" : {
              "id" : "_:b2",
              "type" : "WorkLocation",
              "workLocationChar" : 581,
              "workLocationEndChar" : 591,
              "workLocationVolume" : 1,
              "workLocationWork" : "bdr:WUTDEMO"
            },
            "motivation" : "identifying"
          },
          "motivation" : "questioning"
        },
        "motivation" : "replying"
      } ],
      "next" : null,
      "partOf" : {
        "id" : "http://purl.bdrc.io/anncollection/ANCUTDEMO_NER001",
        "type" : [ "AnnotationCollection", "AnnotationLayer" ],
        "layerForResource" : {
          "id" : "bdr:UTDEMO_01"
        },
        "layerType" : {
          "id" : "bdr:LayerNER"
        },
        "label" : {
          "@language" : "en",
          "@value" : "NER annotations for bdr:UTDEMO_01"
        },
        "as:totalItems" : 4
      },
      "prev" : null,
      "as:startIndex" : 0
    },
    "http://api.bdrc.io/annotations/collectionSearch?res=bdr:UTDEMO_01": {
      "@context":"http://purl.bdrc.io/ontology/ext/annservice/context.json",
      "@id":"http://api.bdrc.io/annotations/collectionSearch?res=bdr:UTDEMO_01",
      "@type":"CollectionInfoList",
      "collectioninfo": [
        {
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
          "service": [
            {
              "@context": "http://iiif.io/api/search/1/context.json",
              "@id": "http://api.bdrc.io/annotations/search/bdac:ANCUTDEMO_NER001/",
              "profile": "http://iiif.io/api/search/1/search"
            },
            {
              "@id": "http://api.bdrc.io/annotations/pageForRange/bdac:ANCUTDEMO_NER001/",
              "profile": "http://purl.bdrc.io/ontology/ext/annservice/pageForRange"
            },
            {
              "@context": "http://iiif.io/api/auth/1/context.json",
              "@id": "http://library.bdrc.io/iiifcookielogin",
              "profile": "http://iiif.io/api/auth/1/login",
              "label": "Login to BDRC",
              "header": "Please Log In",
              "description": "Example Institution requires that you log in with your example account to view this content.",
              "confirmLabel": "Login",
              "failureHeader": "Authentication Failed",
              "service": [
                {
                  "@id": "http://library.bdrc.io/iiiftoken",
                  "profile": "http://iiif.io/api/auth/1/token"
                },
                {
                  "@id": "http://library.bdrc.io/logout",
                  "profile": "http://iiif.io/api/auth/1/logout",
                  "label": "Logout from BDRC"
                }
              ]
            }
          ]
        }
      ]
    }

}

export default mockdata;

export function nock_data(domain: string, path: string, query: Object): void {
    let n = nock(domain)
        .persist()
        .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
        //.log(console.log)
        .get(path)
        .query(query)
        .reply(200, function(path: string, requestBody: string) {
            const uri: string = domain+path;
            //console.log(uri);
            //console.log(mockdata[uri]);
            return mockdata[uri];
        });
}