//@flow
import React from 'react';
import { connect } from 'react-redux';
import type { Dispatch } from "redux";
import {CollectionServiceInterface} from './AnnotationTypes';
import type {CollectionInfo, URL, NumericRange} from './AnnotationTypes';
import {syncService} from './Layer/actions'

type LayerSelectorProps = {
   service:ServiceState,
   collections: Array<CollectionInfo>,
   onSyncService:(service:URL,range:NumericRange) => void
};

const initialState = {
    collections: []
}

class LayerServiceList extends React.Component<LayerSelectorProps> {

  static defaultProps = {
      collections: []
  };

  constructor(props:LayerSelectorProps)
  {
     super(props);
     this.checkSync(props);
  }

  shouldComponentUpdate(nextProps,nextState)
  {
     return this.checkSync(nextProps)
  }

  checkSync(nextProps)
  {
     console.log("LSLcs",nextProps);

     if(nextProps.service && nextProps.service.collectionsById)
     {
        for(let id of Object.keys(nextProps.service.collectionsById))
        {
           let collec = nextProps.service.collectionsById[id]
           if(collec.shouldSyncFor.start > collec.syncedFor.end && !collec.fetching)
           {
              this.props.onSyncService("http://api.bdrc.io/annotations/search/"+id+"/",collec.shouldSyncFor)
              // wait for collection to sync before re-render
              return false
           }
        }
     }
     return true;
  }



  render() {
     console.log("LSLprops",this.props);

        const res =
         <div>
            {this.props.service && Object.keys(this.props.service.collectionsById).map( (id,i) => (
               <a key={i} href="#">{this.props.service.collectionsById[id]["collectionInfo"]["collection"]["label"]["@value"]}</a>
            ))}
         </div>;
        return res;
  };
}

const mapStateToProps = (state = initialState, ownProps: Object): Object => {
    let props = { ...ownProps } //, collections: state.collections }
    props = { ...props, collections: state.data.services.map( s => Object.keys(s.collectionsById).map( k => s.collectionsById[k].collectionInfo ) ) }
    return props ;
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
      onSyncService:(service:URL,range:NumericRange) => {
         dispatch(syncService(service,range));
      }
  };
};

const LayerServiceListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LayerServiceList);


export default LayerServiceListContainer;
