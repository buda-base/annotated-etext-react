//@flow

const mockfetchdata: Object = {
    "http://api.bdrc.io/annotations/collectionService": {
        "@context": "http://purl.bdrc.io/ontology/ext/annservice/context.json",
        "@id": "http://api.bdrc.io/annotations/collectionService",
        "profile": "http://purl.bdrc.io/ontology/ext/annservice/collectionService",
        "label": "BDRC Simple Web Annotation Service",
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
    "http://api.bdrc.io/annotations/collectionSearch?res=bdr:UTDEMO_01": {
      "@context":"http://purl.bdrc.io/ontology/ext/annservice/context.json",
      "@id":"http://api.bdrc.io/annotations/collectionSearch?res=bdr:UTDEMO_01",
      "@type":"CollectionInfoList",
      "collectioninfo": [
        {
          "collection": {
            "@id": "bdac:ANCUTDEMO_NER001",
            "label": {
              "@value": "NER annotations for bdr:UTDEMO_01",
              "@language": "en"
            },
            "layerType": "bdr:LayerNER",
            "layerForResource": "bdr:UTDEMO_01"
          },
          "services": [
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

export default mockfetchdata;