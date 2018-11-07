// @flow

import type {CollectionInfo, URL, NumericRange, AnnotationPage, CollectionServiceInterface} from '../AnnotationTypes';

export type ServiceState = {
  +selectedResource?: URL,
  +fetching: boolean,
  +service?: CollectionServiceInterface,
  +collectionsById: {[id: URL]: Collection}
};

export type Collection = {
  +fetching: boolean,
  +selected: boolean,
  +supportsRange: boolean,
  +shouldSyncFor: NumericRange,
  +syncedFor: NumericRange,
  +collectionInfo: CollectionInfo,
  +pages: {[range: string]: AnnotationPage}
};