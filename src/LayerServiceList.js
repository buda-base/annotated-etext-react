//@flow
import React from 'react';
import { connect } from 'react-redux';
import type { Dispatch } from "redux";
import {CollectionServiceInterface} from './AnnotationTypes';
import type {CollectionInfo, URL} from './AnnotationTypes';

type LayerSelectorProps = {
   service:ServiceState,
    collections: Array<CollectionInfo>
};

const initialState = {
    collections: []
}

class LayerServiceList extends React.Component<LayerSelectorProps> {

  static defaultProps = {
      collections: []
  };

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

    //onTodoClick: id => {
    //  dispatch(toggleTodo(id));
    //}

  };
};

const LayerServiceListContainer = connect(
    mapStateToProps
)(LayerServiceList);


export default LayerServiceListContainer;
