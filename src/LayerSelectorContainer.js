//@flow
import React from 'react';
import { connect } from 'react-redux';
import type { Dispatch } from "redux";
import {CollectionServiceInterface} from './AnnotationTypes';
import LayerServiceListContainer from './LayerServiceList';
import type {CollectionInfo, URL} from './AnnotationTypes';
import type {ServiceState} from './Layer/types';

type LayerSelectorState = {
    servicesById: {[id: URL]: ServiceState}
};

type LayerSelectorProps = {
    servicesIds: Array<string>
};

class LayerSelector extends React.Component<LayerSelectorProps, ServiceState> {

  static defaultProps: LayerSelectorProps = {
    servicesIds: [ "http://api.bdrc.io/annotations/collectionSearch" ] // should come from some config
  };

  constructor(props: LayerSelectorProps) {
    super(props)
  }

  componentDidMount() {
    //const { dispatch, selectedSubreddit } = this.props
    //dispatch(fetchPostsIfNeeded(selectedSubreddit))
  }

  render() {
        const res = <div><h3>Annotation layer selector</h3> {this.props.services && this.props.services.map((service) => (<LayerServiceListContainer />))}</div>;
        return res;
  };
}


const mapStateToProps = (state = initialState, ownProps: Object): Object => {
    let props = { ...ownProps, services: state.services }
    return props ;
}

const LayerSelectorContainer = connect(
    mapStateToProps
)(LayerSelector);

export default LayerSelectorContainer;
