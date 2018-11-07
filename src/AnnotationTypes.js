//@flow

export type Context = Array<URL> | URL | Object ;

export type RDFString = string | {"@value": string, "@language": string};

export type Annotation = Object ;

export type URL = string;

export type AnnotationCollection = Object ;

export type AnnotationPage = Object ;

export type Service = {
    type: URL,
} ;

export type NumericRange = {
    start: Number,
    end: Number
}

type Props = {
   chunks:[],
   IRI:string,
}

// applied to annotation collections or text, records the position currently synchronized by the system
type SyncState = {
   firstChar: number,
   endChar: number
}

// the state of the text
type TextState = {
    askedFirstChar: number,
    askedEndChar: number,
    syncState: SyncState
}

export type Range = NumericRange ;

export type CollectionInfo = {
    collection: AnnotationCollection,
    services: Array<Service>
};

export interface AnnotationCollectionInterface {
   getAnnotationPageIterator(): Generator<AnnotationPage,boolean,void>,
   getAnnotationPageIteratorForRange(range: Range): Generator<AnnotationPage,boolean,void>,
   getAnnotationIterator(): Generator<Annotation,boolean,void>,
   getAnnotationIteratorForRange(range: Range): Generator<Annotation,boolean,void>,
   createAnnotation(annotation: Annotation): Promise<URL>,
};

export interface AnnotationPageInterface {
   getAnnotationIterator(): Generator<Annotation,boolean,void>
}

export interface CollectionServiceInterface {
    constructor(serviceUri: URL): CollectionServiceInterface,
    getAnnotationCollectionsServices(forResource: URL) : Promise<Array<CollectionInfo>>
}