//@flow

import CollectionService from './CollectionService';
import type {CollectionInfo, URL} from './AnnotationTypes';

import fetchmock from './fetchmock';
 
describe('testing collection service', () => {
 
  it('calls service and return collections for a resource', async () => {
 
    const res: string = "bdr:UTDEMO_01";
    const serviceUrl: string = "http://api.bdrc.io/annotations/collectionSearch?res=bdr:UTDEMO_01";

    const service: CollectionService = new CollectionService(serviceUrl);

    const collections: Array<CollectionInfo> = await service.getAnnotationCollectionsServices(res);

    expect(collections.length).toEqual(1);
  })
})