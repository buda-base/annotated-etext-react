//@flow
import React from 'react';
import { connect } from 'react-redux';
import type { Dispatch } from "redux";
import {CollectionServiceInterface} from './AnnotationTypes';
import type {CollectionInfo, URL, NumericRange} from './AnnotationTypes';
import {syncService,toggleCollection} from './Layer/actions'
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import green from "@material-ui/core/colors/green"

type LayerSelectorProps = {
   service:ServiceState,
   collections: Array<CollectionInfo>,
   showCollections: {[id: URL]: boolean},
   onSyncService:(service:URL,range:NumericRange) => void,
   onToggleCollection:(id:URL,check:boolean) => void
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
              this.props.onSyncService("http://purl.bdrc.io/anncollection/"+id.replace(/bdac:/,"")+"/pageForRange",collec.shouldSyncFor)
              // wait for collection to sync before re-render
              return false
           }
        }
     }
     return true;
  }

  handleChange(e:Event,check:boolean,id:string)
  {
      console.log("hC",e,check,id)
      this.props.onToggleCollection(id,check)
  }

  render() {
     console.log("LSLprops",this.props);


        const res =
         <div>
            {this.props.service && Object.keys(this.props.service.collectionsById).map( (id,i) => {

               let collec = this.props.service.collectionsById[id]["collectionInfo"]["collection"]
               let label = collec["label"]
               if(!label) label = collec["rdfs:label"]
               if(label) label = label["@value"]
               else label = "Collection "+id

               //return ( [<a key={i} href="#">{label}</a>,<br/>] ) }
               return (
                 <FormControlLabel
                   style={{marginRight:"30px"}}
                   control={
                     <Checkbox
                       checked={this.props.showCollections[id]}
                       onChange={ (e,check) => this.handleChange(e,check,id)}
                       value={id}
                       color={green[500]}
                     />
                   }
                   label={label}
                /> )
            })}
         </div>;
        return res;
  };
}

const mapStateToProps = (state = initialState, ownProps: Object): Object => {
    let props = { ...ownProps } //, collections: state.collections }

    let showCollections = state.data.showCollections

    props = { ...props,
      collections: state.data.services.map( s => Object.keys(s.collectionsById).map( k => s.collectionsById[k].collectionInfo ) ),
      showCollections
   }
    return props ;
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
      onSyncService:(service:URL,range:NumericRange) => {
         dispatch(syncService(service,range));
      },
      onToggleCollection:(id:URL,check:boolean) => {
         dispatch(toggleCollection(id,check));
      }
  };
};

const LayerServiceListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LayerServiceList);


export default LayerServiceListContainer;
