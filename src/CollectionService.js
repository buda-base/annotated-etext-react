//@flow

import {CollectionServiceInterface} from './AnnotationTypes';
import type {CollectionInfo, URL} from './AnnotationTypes';

export default class CollectionService implements CollectionServiceInterface {

    serviceUri: URL;

    constructor(serviceUri: URL): CollectionService {
        this.serviceUri = serviceUri;
        return this;
    }

    async _getCollectionInfo(resp: Response) : Promise<Array<CollectionInfo>> {
        let json = await resp.json();
        return json.collectioninfo;
    }

    async getAnnotationCollectionsServices(forResource: URL) : Promise<Array<CollectionInfo>> {
        const uri: URL = this.serviceUri+"?res="+forResource;
        const resp: Response = await fetch(uri);
        const res: Array<CollectionInfo> = await this._getCollectionInfo(resp);
        return res;
    }
}