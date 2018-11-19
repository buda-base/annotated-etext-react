//@flow
import React from 'react';
import { connect } from 'react-redux';
import type { Dispatch } from "redux";
import {CollectionServiceInterface} from './AnnotationTypes';
import LayerServiceListContainer from './LayerServiceList';
import type {CollectionInfo, URL} from './AnnotationTypes';
import type {ServiceState} from './Layer/types';
import * as anno from  "./Layer/actions"

type LayerSelectorState = {
};

type LayerSelectorProps = {
    IRI:string,
    servicesIds: {[string]:URL},
    servicesById: {[id: URL]: ServiceState},
    onGetCollectionList:(string)=>void
};

class LayerSelector extends React.Component<LayerSelectorProps, ServiceState> {

  static defaultProps: LayerSelectorProps = {
    servicesIds: { collectionSearch :"http://api.bdrc.io/annotations/collectionSearch" } // should come from some config
  };

  constructor(props: LayerSelectorProps = defaultProps) {
    super(props)
  }

  componentDidMount() {
    //const { dispatch, selectedSubreddit } = this.props
    //dispatch(fetchPostsIfNeeded(selectedSubreddit))
  }

  render() {
     console.log("LSCprops",this.props)

        const res =
         <div id="annoLayerSelec"><h3>Annotation layer selection</h3>
            {this.props.services && this.props.services.map((service,i) => 
              (<LayerServiceListContainer key={i} service={service} IRI={this.props.IRI}/>))}
            {!this.props.services &&
              <div><a href="#"
                onClick={(e) => this.props.onGetCollectionList(this.props.IRI,this.props.servicesIds["collectionSearch"])}
                >Get collection list</a>
            </div>}
        </div>;
        return res;
  };
}


const mapStateToProps = (state = initialState, ownProps: Object): Object => {
    let props = { ...ownProps  }
    // state here refers to global redux state not object state
    //, services: state.services }

    console.log("LSCms2p",state,ownProps)

    let services = state.data.services
    props = { ...props, services }

    //props["seri"]

    return props ;
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    onGetCollectionList: (iri,url) => {
      dispatch(anno.addService(iri,url));
    }
  };
};

const LayerSelectorContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LayerSelector);

export default LayerSelectorContainer;
