//@flow

import CollectionService from './CollectionService';
import type {CollectionInfo, URL} from './AnnotationTypes';

import {nock_data} from './mockdata';

describe('testing collection service', () => {

  it('calls service and return collections for a resource', async () => {

    nock_data("http://api.bdrc.io", "/annotations/collectionSearch", {res: "bdr:UTDEMO_01"});

    const res: string = "bdr:UTDEMO_01";
    const serviceUrl: string = "http://api.bdrc.io/annotations/collectionSearch";

    const service: CollectionService = new CollectionService(serviceUrl);

    const collections: Array<CollectionInfo> = await service.getAnnotationCollectionsServices(res);

    expect(collections.length).toEqual(1);

    console.log(JSON.stringify(collections,null,3))
  })
})
